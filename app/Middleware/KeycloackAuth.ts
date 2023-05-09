import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import Token from 'keycloak-connect/middleware/auth-utils/token'
import Signature from 'keycloak-connect/middleware/auth-utils/signature'

export default class KeycloakAuth {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    try {
      // Validate token with Keycloak
      const headers = request.headers()
      if (!headers.authorization) {
        return response.status(401).send({ message: 'Unauthorized' })
      }
      const tokenRaw = headers?.authorization?.replace('Bearer ', '')
      const token = new Token(tokenRaw, 'adonis-web')
      const signature = new Signature({
        realmUrl: Env.get('KEYCLOACK_REALM_URL'),
        publicKey: Env.get('KEYCLOACK_PUBLIC_KEY'),
        minTimeBetweenJwksRequests: 0,
      })

      const signatureResult = await signature.verify(token, null)
      if (!signatureResult) {
        return response.status(401).send({ message: 'Unauthorized', data: 'Invalid token' })
      }

      // Check if the user has the required roles
      const roles = token.content.realm_access.roles

      //create a user for the request
      request['user'] = {
        ...token.content,
        roles,
      }

      await next()
    } catch (error) {
      console.error(error)
      return response.status(401).send({ message: 'Unauthorized' })
    }
  }
}

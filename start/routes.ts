import Route from '@ioc:Adonis/Core/Route'
import Env from '@ioc:Adonis/Core/Env'
import axios from 'axios'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/protected', async () => {
  return 'Protected route'
}).middleware(['keycloackAuth'])

Route.get('/login', async () => {
  const tokenUrl = 'http://localhost:8080/realms/demo/protocol/openid-connect/token'
  const keycloackConfig = {
    grant_type: 'client_credentials',
    client_id: Env.get('KEYCLOAK_CLIENT_ID'),
    client_secret: Env.get('KEYCLOACK_SECRET'),
  }
  try {
    const { data } = await axios.post(tokenUrl, keycloackConfig, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    return data
  } catch (error) {
    console.log(error)
    return error
  }
})

Route.resource('assets', 'AssetsController').apiOnly().only(['index'])

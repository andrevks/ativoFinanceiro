import Route from '@ioc:Adonis/Core/Route'
import Env from '@ioc:Adonis/Core/Env'
import axios from 'axios'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/protected', async ({ request }) => {
  return { message: 'You are accessing a protected route ', user: request['user'] }
}).middleware(['keycloackAuth:admin,user'])

Route.post('/authenticate', async ({ request, response }) => {
  const { username, password } = request.only(['username', 'password'])
  try {
    const tokenUrl = 'http://localhost:8080/realms/demo/protocol/openid-connect/token'
    const keycloackConfig = {
      grant_type: 'password',
      client_id: Env.get('KEYCLOAK_CLIENT_ID'),
      client_secret: Env.get('KEYCLOACK_SECRET'),
      username,
      password,
    }
    const { data: token } = await axios.post(tokenUrl, keycloackConfig, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    return token
  } catch (error) {
    console.error(error)
    response.status(401).send({ error: 'Invalid email or password', message: error.message })
  }
})

Route.get('/login', async ({ response }) => {
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
    console.error(error)
    response.unauthorized({ message: error.message })
  }
})

Route.resource('assets', 'AssetsController').apiOnly().only(['index'])

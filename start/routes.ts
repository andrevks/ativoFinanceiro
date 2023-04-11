import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('assets', 'AssetsController').apiOnly().only(['index'])

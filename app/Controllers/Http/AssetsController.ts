import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RabbitmqService from 'App/Services/RabbitmqService'
import IndexAssetValidator from 'App/Validators/IndexAssetValidator'
import yahoo from 'yahoo-finance'
export default class AssetsController {
  public async index({ request, response }: HttpContextContract) {
    const { symbol, from, to, period, type } = await request.validate(IndexAssetValidator)

    try {
      let data: any = {}
      if (type === 'quote') {
        data = await yahoo.quote({
          symbol,
          modules: [
            'price',
            // 'summaryDetail',
            // 'earnings',
            // 'recommendationTrend',
            'financialData',
            // 'summaryProfile',
            // 'upgradeDowngradeHistory',
            // 'calendarEvents',
            // 'defaultKeyStatistics',
          ], // optional; default modules.
        })
      } else {
        data = await yahoo.historical({ symbol, from, to, period })
      }

      if (process.env.ENABLE_RABBITMQ === 'false') return response.ok(data)

      const rabbit = new RabbitmqService('amqp://admin:admin@127.0.0.1:5672')
      await rabbit.start()
      await rabbit.publishInExchange(
        'de.ativofinanceiro.preco',
        'rk.ativofinanceiro.preco-por-ativo',
        JSON.stringify(data)
      )

      return 'Msg published on rabbitmq'
    } catch (error) {
      return response.badRequest(error.message)
    }
  }
}

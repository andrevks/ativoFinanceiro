import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
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
            'summaryDetail',
            'earnings',
            'recommendationTrend',
            'financialData',
            'summaryProfile',
            'upgradeDowngradeHistory',
            'calendarEvents',
            'defaultKeyStatistics',
          ], // optional; default modules.
        })
      } else {
        data = await yahoo.historical({
          symbol,
          from,
          to,
          period,
        })
      }

      return data
    } catch (error) {
      return response.badRequest(error.message)
    }
  }
}

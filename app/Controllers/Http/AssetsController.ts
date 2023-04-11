import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import yahoo from 'yahoo-finance'
export default class AssetsController {
  public async index({}: HttpContextContract) {
    const data = await yahoo.historical(
      {
        symbol: 'BBD',
        from: '2020-01-01',
        to: '2020-04-20',
        period: 'd',
      },
      (err, quotes) => {
        if (err) {
          console.log(err)
        }
        return quotes
      }
    )

    return data
  }
}

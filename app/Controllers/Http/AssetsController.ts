import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AssetsController {
  public async index({}: HttpContextContract) {
    return {
      assets: [
        {
          id: 1,
          name: 'Bitcoin',
          symbol: 'BTC',
          slug: 'bitcoin',
          num_market_pairs: 9388,
          date_added: '2013-04-28T00:00:00.000Z',
          tags: ['mineable'],
          max_supply: 21000000,
          circulating_supply: 18718737,
          total_supply: 18718737,
          platform: null,
          cmc_rank: 1,
          last_updated: '2021-05-05T20:02:02.000Z',
        },
      ],
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import IndexAssetValidator from 'App/Validators/IndexAssetValidator'
import runBackgroundTask from '../../../resources/background-task'

export default class AssetsController {
  public async index({ request, response }: HttpContextContract) {
    const { symbol, from, to, period, type } = await request.validate(IndexAssetValidator)

    try {
      // Run the background task
      runBackgroundTask({ symbol, from, to, period, type })

      return response.ok('Background task started')
    } catch (error) {
      return response.badRequest(error.message)
    }
  }
}

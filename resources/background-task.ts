import yahoo from 'yahoo-finance'
import RabbitmqService from '../app/Services/RabbitmqService'

interface IrunBackgroundTask {
  symbol: string
  from?: string
  to?: string
  period?: string
  type?: string
}

async function runBackgroundTask({ symbol, from, to, period, type }: IrunBackgroundTask) {
  try {
    let data = {}

    if (type === 'quote') {
      data = await yahoo.quote({
        symbol,
        modules: ['price', 'financialData'],
      })
    } else {
      data = await yahoo.historical({ symbol, from, to, period })
    }

    const queueName = 'q.ativofinanceiro.busca'
    const exchangeName = 'de.ativofinanceiro.preco'
    const rkName = 'rk.ativofinanceiro.preco-por-ativo'

    const rabbit = new RabbitmqService(
      'amqp://admin:admin@127.0.0.1:5672',
      exchangeName,
      queueName,
      rkName
    )

    await rabbit.start()

    // Add a delay before publishing the message
    setTimeout(async () => {
      await rabbit.publishInExchange(exchangeName, rkName, JSON.stringify(data))
    }, 2000) // 2 seconds delay
  } catch (error) {
    console.log(error.message)
  }
}

export default runBackgroundTask

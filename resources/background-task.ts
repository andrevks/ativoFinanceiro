import yahoo from 'yahoo-finance'
import RabbitmqService from '../app/Services/RabbitmqService'
import { set } from 'vue/types/umd'

interface IrunBackgroundTask {
  symbol: string
  from?: string
  to?: string
  period?: string
  type?: string
  correlationId: string
}

async function runBackgroundTask({
  symbol,
  from,
  to,
  period,
  type,
  correlationId,
}: IrunBackgroundTask) {
  let data = {}

  if (type === 'quote') {
    data = await yahoo.quote({
      symbol,
      modules: ['price', 'financialData'],
    })
  } else {
    data = await yahoo.historical({ symbol, from, to, period })
  }

  const rabbit = new RabbitmqService(
    'amqp://admin:admin@127.0.0.1:5672',
    'de.ativofinanceiro.preco',
    'q.ativofinanceiro.busca',
    'rk.ativofinanceiro.preco-por-ativo'
  )

  await rabbit.start()

  // Add a delay before publishing the message
  setTimeout(async () => {
    await rabbit.publishInExchangeWithCorrelationId(
      'de.ativofinanceiro.preco',
      'rk.ativofinanceiro.preco-por-ativo',
      JSON.stringify(data),
      correlationId
    )
  }, 2000) // 2 seconds delay
}

export default runBackgroundTask

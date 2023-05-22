import { Connection, Channel, connect, Message } from 'amqplib'

export default class RabbitmqService {
  private conn: Connection
  private channel: Channel

  constructor(private uri: string) {}

  public async start(): Promise<void> {
    this.conn = await connect(this.uri)
    this.channel = await this.conn.createChannel()
    this.createExchangeWithQueueAndBind(
      'de.ativofinanceiro.preco',
      'q.ativofinanceiro.busca',
      'rk.ativofinanceiro.preco-por-ativo'
    )
  }

  public async publishInQueue(queue: string, message: string) {
    return this.channel.sendToQueue(queue, Buffer.from(message))
  }

  public async publishInExchange(
    exchange: string,
    routingKey: string,
    message: string
  ): Promise<boolean> {
    return this.channel.publish(exchange, routingKey, Buffer.from(message))
  }

  public async consume(queue: string, callback: (message: Message) => void) {
    return this.channel.consume(queue, (message: any) => {
      callback(message)
      this.channel.ack(message)
    })
  }

  private async createExchangeWithQueueAndBind(exchangeName, queueName, routingKey) {
    await this.channel.assertExchange(exchangeName, 'direct', { durable: true })
    await this.channel.assertQueue(queueName, { durable: true })
    await this.channel.bindQueue(queueName, exchangeName, routingKey)
  }
}

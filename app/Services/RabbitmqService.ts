import { Connection, Channel, connect, Message, ConsumeMessage } from 'amqplib'

export default class RabbitmqService {
  private conn: Connection
  private channel: Channel

  constructor(
    private uri: string,
    private exchangeName: string,
    private qName: string,
    private rkName: string
  ) {}

  public async start(): Promise<void> {
    this.conn = await connect(this.uri)
    this.channel = await this.conn.createChannel()
    this.createExchangeWithQueueAndBind(this.exchangeName, this.qName, this.rkName)
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

  public async publishInExchangeWithCorrelationId(
    exchange: string,
    routingKey: string,
    message: string,
    correlationId: string
  ): Promise<boolean> {
    return this.channel.publish(exchange, routingKey, Buffer.from(message), {
      correlationId,
    })
  }

  public async consume(queue: string, callback: (message: Message) => void) {
    return this.channel.consume(queue, (message: ConsumeMessage) => {
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

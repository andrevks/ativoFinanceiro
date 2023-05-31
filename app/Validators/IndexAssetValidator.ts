import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IndexAssetValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    type: schema.string.optional(
      {
        trim: true,
      },
      [rules.minLength(1), rules.maxLength(10), rules.regex(/^(quote|historical)$/)]
    ),
    symbol: schema.string(
      {
        trim: true,
      },
      [rules.minLength(1), rules.maxLength(8), rules.regex(/^[A-Z0-9.]+$/)]
    ),
    from: schema.string.optional(
      {
        trim: true,
      },
      //made of dates like '2020-01-01'
      [rules.regex(/^\d{4}-\d{2}-\d{2}$/)]
    ),
    to: schema.string.optional(
      {
        trim: true,
      },
      //made of dates like '2020-01-01'
      [rules.regex(/^\d{4}-\d{2}-\d{2}$/)]
    ),
    period: schema.string.optional(
      //"d", "w", "m", or "v". Default is "d"
      {
        trim: true,
      },
      [rules.regex(/^(d|w|m|v)$/), rules.maxLength(1), rules.minLength(1)]
    ),
  })

  public messages: CustomMessages = {
    'type.minLength': 'Type should be at least 1 character',
    'type.maxLength': 'Type should be at most 10 characters',
    'type.regex': 'Type should be quote or historical',
    'symbol.minLength': 'Symbol should be at least 1 character',
    'symbol.maxLength': 'Symbol should be at most 8 characters',
    'symbol.regex': 'Symbol should be made of letters, numbers and dots',
    'from.regex': 'From should be a date like 2020-01-01',
    'to.regex': 'To should be a date like 2020-01-01',
    'period.regex': 'Period should be d, w, m or v',
    'period.maxLength': 'Period should be at most 1 character',
    'period.minLength': 'Period should be at least 1 character',
    'correlationId.uuid': 'CorrelationId should be a valid uuid v4',
  }
}

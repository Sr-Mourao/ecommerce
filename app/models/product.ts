import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare image_url: string

  @column()
  declare type: string

  @column()
  declare price: number

  @column()
  declare seller: string

  @column({
    prepare: (value: string[]) => JSON.stringify(value),
    consume: (value: string | string[]) => {
      if (Array.isArray(value)) return value
      return JSON.parse(value)
    },
  })
  @column()
  declare available_sizes: string[] | string

  @column()
  declare details: string

  @column()
  declare sport: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

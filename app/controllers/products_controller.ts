import Product from '#models/product'
import { createProductValidator } from '#validators/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  public async index({ response }: HttpContext) {
    try {
      const products = await Product.all()
      response.status(200).send(products)
    } catch (error) {
      console.error(error)
      return response.status(500).send({
        message: 'Internal server error',
        error: error.message,
      })
    }
  }
  public async store({ request, response }: HttpContext) {
    try {
      const body = await request.validateUsing(createProductValidator)
      const { available_sizes, ...product } = body
      await Product.create({
        ...product,
        available_sizes: JSON.stringify(available_sizes),
      })

      response.status(201).send({})
    } catch (error) {
      console.error(error)
      if (error.messages) {
        return response.status(422).send({
          message: 'Validation failed',
          errors: error.messages,
        })
      }
      return response.status(500).send({
        message: 'Internal server error',
        error: error.message,
      })
    }
  }

  public async show({ params, response }: HttpContext) {
    try {
      const user = await Product.find(params.id)
      if (!user) {
        return response.status(404).send({
          message: 'product not found',
        })
      }
      response.status(200).send(user)
    } catch (error) {
      console.error(error)
      return response.status(500).send({
        message: 'Internal server error',
        error: error.message,
      })
    }
  }
  public async update({ params, request, response }: HttpContext) {
    try {
      const body = await request.validateUsing(createProductValidator)
      const { available_sizes, ...product } = body
      await Product.query()
        .where('id', params.id)
        .update({
          ...product,
          available_sizes: JSON.stringify(available_sizes),
        })
      response.status(200).send({})
    } catch (error) {
      console.error(error)
      if (error.messages) {
        return response.status(422).send({
          message: 'Validation failed',
          errors: error.messages,
        })
      }
      return response.status(500).send({
        message: 'Internal server error',
        error: error.message,
      })
    }
  }
}

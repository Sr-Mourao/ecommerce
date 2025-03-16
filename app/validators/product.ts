import vine from '@vinejs/vine'

export const createProductValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    image_url: vine.string().trim().url(),
    type: vine.string(),
    price: vine.number(),
    seller: vine.string(),
    available_sizes: vine.array(vine.string()),
    details: vine.string(),
    sport: vine.string(),
  })
)

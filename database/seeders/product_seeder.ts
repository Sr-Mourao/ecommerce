import Product from '#models/product'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Product.createMany([
      {
        name: 'Camiseta do Brasil',
        image_url: 'https://imgnike-a.akamaihd.net/1300x1300/0228340L.jpg',
        type: 'Camiseta',
        price: 349.99,
        seller: 'Nike',
        available_sizes: ['P', 'M', 'G', 'GG'],
        details:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        sport: 'Futebol',
      },
      {
        name: 'Regata do Chicago Bulls',
        image_url:
          'https://static.nikejordan.com.br/produtos/camiseta-regata-nba-adidas-swingman-chicago-bulls-rose/6B/D13-0209-06B/13-0209-06B_zoom1.jpg?ts=1600895852',
        type: 'Regata',
        price: 499.99,
        seller: 'Adidas',
        available_sizes: ['P', 'M', 'G', 'XPP'],
        details:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        sport: 'Basquete',
      },
      {
        name: 'Calção da Puma',
        image_url:
          'https://static.netshoes.com.br/produtos/calcao-puma-liga-core-masculino/58/NWG-1619-058/NWG-1619-058_zoom1.jpg?ts=1634647138',
        type: 'Calção',
        price: 99.98,
        seller: 'Puma',
        available_sizes: ['P', 'M', 'G'],
        details:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        sport: 'Corrida',
      },
      {
        name: 'Calção da Nike',
        image_url:
          'https://static.nikejordan.com.br/produtos/calcao-nike-dri-fit-academy-masculino/26/HZM-0829-326/HZM-0829-326_zoom1.jpg?ts=1608657811',
        type: 'Calção',
        price: 129.99,
        seller: 'Nike',
        available_sizes: ['P', 'M', 'G', 'GG'],
        details:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        sport: 'Corrida',
      },
      {
        name: 'Meia do Jordan',
        image_url:
          'https://static.vexxing.com.br/arquivos/ids/193193-1000-1000/meias-Nike-Jordan-Jumpman.jpg?v=63628280007',
        type: 'Meia',
        price: 39.99,
        seller: 'Nike',
        available_sizes: ['U'],
        details:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        sport: 'Basquete',
      },
    ])
  }
}

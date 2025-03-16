/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const ProductsController = () => import('../app/controllers/products_controller.js')

router.on('/').renderInertia('home')
router.on('/admin').renderInertia('admin')

router
  .group(() => {
    router.resource('products', ProductsController).apiOnly()
  })
  .prefix('/api')

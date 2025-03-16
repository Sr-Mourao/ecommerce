/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/app.css'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { ProductsProvider } from '../context/ProductsContext'

const appName = import.meta.env.VITE_APP_NAME || ''

createInertiaApp({
  progress: { color: '#5468FF' },

  title: () => `Sports | Roupas e Acessórios - ${appName}`,

  resolve: (name) => {
    return resolvePageComponent(`../pages/${name}.tsx`, import.meta.glob('../pages/**/*.tsx'))
  },

  setup({ el, App, props }) {
    createRoot(el).render(
      <ProductsProvider>
        <App {...props} />
      </ProductsProvider>
    )
  },
})

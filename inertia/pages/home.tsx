import type { Product } from '../../types/product'
import { Sidebar } from '~/components/Layout/Sidebar'
import { Header } from '~/components/Layout/Header'
import { Footer } from '~/components/Layout/Footer'
import { Cards } from '~/components/Cards'
import { useProducts } from '~/context/ProductsContext'
import { useEffect, useState } from 'react'
import { ModalViewProduct } from '~/components/Modal/ViewProduct'

export default function Home() {
  const { fetchProducts, loading, products } = useProducts()
  const [openModal, setOpenModal] = useState(false)
  const [selectedproduct, setSelectedProduct] = useState({})

  function handlerOpenProductSelected(product: Product) {
    setSelectedProduct(product)
    setOpenModal(true)
  }

  function handlerCloseProductSelected() {
    setSelectedProduct({})
    setOpenModal(false)
  }

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts()
    }
  }, [])

  return (
    <Sidebar>
      <Header />
      <div className="isolate mt-10 max-w-screen-xl mx-auto px-16 xl:px-8 grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-3 gap-8">
        {loading ? (
          <p className="text-center col-span-full">Carregando produtos...</p>
        ) : (
          products.map((product: Product) => (
            <Cards
              key={product.id}
              product={product}
              onClick={() => handlerOpenProductSelected(product)}
            />
          ))
        )}
      </div>
      {openModal && (
        <ModalViewProduct onClick={() => handlerCloseProductSelected()} product={selectedproduct} />
      )}
      <Footer />
    </Sidebar>
  )
}

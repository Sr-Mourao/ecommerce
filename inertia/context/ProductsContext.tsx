import { createContext, useContext, useState, useMemo } from 'react'
import type { Product } from '../../types/product'
import axios from 'axios'

interface ProductsContextType {
  allProducts: Product[]
  products: Product[]
  loading: boolean
  categories: string[]
  sellers: string[]
  sports: string[]
  fetchProducts: () => Promise<void>
  filterProducts: (category?: string, seller?: string, sport?: string) => void
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined)

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchProducts() {
    try {
      setLoading(true)
      const { data } = await axios.get('/api/products')
      setAllProducts(data)
      setFilteredProducts(data)
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
    } finally {
      setLoading(false)
    }
  }

  function extractUniqueValues(itens: Product[], key: keyof Product): string[] {
    return [
      ...new Set(
        itens.map((item) => item[key]).filter((value): value is string => value !== undefined)
      ),
    ]
  }

  function filterProducts(category?: string, seller?: string, sport?: string) {
    let filtered = allProducts
    if (category) filtered = filtered.filter((product) => product.type === category)
    if (seller) filtered = filtered.filter((product) => product.seller === seller)
    if (sport) filtered = filtered.filter((product) => product.sport === sport)
    setFilteredProducts(filtered)
  }

  const categories = useMemo(() => extractUniqueValues(allProducts, 'type'), [allProducts])
  const sports = useMemo(() => extractUniqueValues(allProducts, 'sport'), [allProducts])
  const sellers = useMemo(() => extractUniqueValues(allProducts, 'seller'), [allProducts])

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        products: filteredProducts,
        loading,
        sellers,
        categories,
        sports,
        fetchProducts,
        filterProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductsContext)
  if (!context) {
    throw new Error('useProducts deve ser usado dentro de um ProductsProvider')
  }
  return context
}

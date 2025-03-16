import { useProducts } from '~/context/ProductsContext'
import { useEffect } from 'react'
import { Product } from '../../types/product'
import { ButtonAction } from '~/components/Buttons/Actions'

export default function Admin() {
  const { fetchProducts, products } = useProducts()
  useEffect(() => {
    if (products.length === 0) {
      fetchProducts()
    }
  }, [])

  return (
    <div className="my-10 mx-5 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="p-4">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Produto
            </th>
            <th scope="col" className="px-6 py-3">
              Preço
            </th>
            <th scope="col" className="px-6 py-3">
              Marca
            </th>
            <th scope="col" className="px-6 py-3">
              Tipo
            </th>
            <th scope="col" className="px-6 py-3">
              Ação
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Product, index) => (
            <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
              <td className="px-6 py-4">{index + 1}</td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
              >
                <img className="w-10 h-10 rounded-full" src={product.imageUrl} alt="Jese image" />
                <div className="ps-3">
                  <div className="text-base font-semibold">{product.name}</div>
                  <div className="font-normal text-gray-500">{product.sport}</div>
                </div>
              </th>
              <td className="px-6 py-4">R$ {product.price?.toFixed(2)}</td>
              <td className="px-6 py-4">{product.seller}</td>
              <td className="px-6 py-4">{product.type}</td>

              <td className="flex flex-row px-6 py-4">
                <div>
                  <ButtonAction variant="edit" onClick={() => {}} />
                </div>
                <div className="ml-2">
                  <ButtonAction variant="remove" onClick={() => {}} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

import { useState } from 'react'
import { useProducts } from '~/context/ProductsContext'
import { ButtonDefault } from '../Buttons/Default'
import { FaFilter } from 'react-icons/fa'

export function Sidebar({ children }: any) {
  const { sellers, categories, sports, filterProducts } = useProducts()
  const [selectedCategories, setSelectedCategories] = useState<string | null>(null)
  const [selectedSports, setSelectedSports] = useState<string | null>(null)
  const [selectedSeller, setSelectedSeller] = useState<string | null>(null)

  function cleanFilter() {
    setSelectedCategories(null)
    setSelectedSeller(null)
    setSelectedSports(null)
    filterProducts()
  }

  function handleCategories(value: string | null) {
    setSelectedCategories(value)
    filterProducts(
      value !== null ? value : undefined,
      selectedSeller !== null ? selectedSeller : undefined,
      selectedSports !== null ? selectedSports : undefined
    )
  }

  function handleSeller(value: string | null) {
    setSelectedSeller(value)
    filterProducts(
      selectedCategories !== null ? selectedCategories : undefined,
      value !== null ? value : undefined,
      selectedSports !== null ? selectedSports : undefined
    )
  }

  function handleSport(value: string | null) {
    setSelectedSports(value)
    filterProducts(
      selectedCategories !== null ? selectedCategories : undefined,
      selectedSeller !== null ? selectedSeller : undefined,
      value !== null ? value : undefined
    )
  }

  return (
    <>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 4.75A.75.75 0 013.75 4h12.5a.75.75 0 01.53 1.28L12 10.06V15a.75.75 0 01-1.2.6l-2-1.5a.75.75 0 01-.3-.6v-3.94L3.22 5.28A.75.75 0 013 4.75z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full w-64 px-4 py-6 bg-sand-3 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold text-center text-gray-800 mb-2">Filtros</h2>
          <p className="text-sm text-center text-gray-600 mb-4">
            Utilize os filtros abaixo para encontrar produtos.
          </p>
          <hr className="my-4"></hr>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700">Categorias</h3>
              <select
                onChange={(e) => handleCategories(e.target.value || null)}
                className="w-full mt-1 p-2 border rounded-md text-gray-700 focus:ring focus:ring-sand-5"
              >
                <option value="">Selecione</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700">Marca</h3>
              <select
                onChange={(e) => handleSeller(e.target.value || null)}
                className="w-full mt-1 p-2 border rounded-md text-gray-700 focus:ring focus:ring-sand-5"
              >
                <option value="">Selecione</option>
                {sellers.map((seller) => (
                  <option key={seller} value={seller}>
                    {seller}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700">Esportes</h3>
              <select
                onChange={(e) => handleSport(e.target.value || null)}
                className="w-full mt-1 p-2 border rounded-md text-gray-700 focus:ring focus:ring-sand-5"
              >
                <option value="">Selecione</option>
                {sports.map((sport) => (
                  <option key={sport} value={sport}>
                    {sport}
                  </option>
                ))}
              </select>
            </div>

            <hr></hr>
            <div className="flex items-center justify-end">
              <ButtonDefault
                variant="warning"
                onClick={() => cleanFilter()}
                icon={<FaFilter size={15} />}
              >
                Limpar filtros
              </ButtonDefault>
            </div>
          </div>
        </div>
      </aside>

      <div className=" sm:ml-64">{children}</div>
    </>
  )
}

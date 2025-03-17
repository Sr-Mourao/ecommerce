import type { Product } from '../../../types/product'
import { ButtonAction } from '../Buttons/Actions'
import { StarHalfSvg, StarSvg } from '../Svgs/Star'
import { FaExclamationTriangle } from 'react-icons/fa'

interface CardsProps {
  product: Product
  onClick: () => void
}

export function ModalViewProduct({ product, onClick }: CardsProps) {
  function applyDiscount(originalPrice: number, discountPercentage: number) {
    if (discountPercentage < 0 || discountPercentage > 100) {
      throw new Error('The discount percentage must be between 0 and 100.')
    }

    const discountAmount = (originalPrice * discountPercentage) / 100
    const finalPrice = originalPrice - discountAmount

    return finalPrice.toFixed(2)
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="relative bg-white rounded-2xl shadow-sm w-full md:w-3/4 lg:w-1/2 max-h-[95vh] overflow-y-auto">
        <article className="relative p-4 md:p-6 group flex flex-col md:flex-row gap-4 md:gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={product.imageUrl}
              alt="card"
              className="w-full max-w-[300px] h-auto object-contain"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-lg md:text-xl font-semibold pr-2">{product.name}</h2>
              <ButtonAction variant="close" onClick={onClick} />
            </div>

            <div className="text-sm md:text-base">
              {product.sport} | {product.seller}
            </div>

            <div className="flex items-center">
              {[...Array(4)].map((_, i) => (
                <StarSvg key={i} />
              ))}
              <StarHalfSvg />
            </div>

            <div className="space-y-2">
              <p className="text-lg md:text-xl text-primary-600">
                R$ {applyDiscount(product.price || 0, 28)} no Pix{' '}
                <span className="line-through text-sm">R$ {product.price?.toFixed(2)}</span>
                <span className="text-green-500 text-sm ml-2">28% off</span>
              </p>

              <p className="text-sm md:text-base">
                ou <span className="font-bold">R$ {applyDiscount(product.price || 0, 24)}</span> em
                4x <span className="line-through">R$ {product.price?.toFixed(2)}</span>
                <span className="text-green-500 text-sm ml-2">24% off</span>
              </p>
            </div>

            <hr />
            <div className="space-y-4">
              <h3 className="font-medium">Tamanhos Disponíveis:</h3>

              <div className="border border-gray-300 p-3 rounded-lg flex gap-2 bg-gray-50 text-sm">
                <FaExclamationTriangle className="mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-black">Atenção! Compre um tamanho maior:</strong>
                  <p className="text-gray-700 mt-1">
                    Recomendamos escolher um tamanho maior que o usual para um ajuste mais
                    confortável.
                  </p>
                </div>
              </div>

              <div className="p-2">
                {(product?.availableSizes || []).length === 0 ? (
                  <p className="text-red-500">Não há tamanhos disponíveis</p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {(product?.availableSizes || []).map((size: any, index: number) => (
                      <div
                        key={index}
                        className="px-3 py-2 border rounded-lg min-w-[50px] text-center border-black bg-gray-200 text-sm"
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <hr />

            <div className="space-y-2">
              <h3 className="font-medium">Mais detalhes:</h3>
              <p className="text-sm text-gray-600">{product.details}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

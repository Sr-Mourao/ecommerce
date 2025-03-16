import type { Product } from '../../types/product'

interface CardsProps {
  product: Product
  onClick: () => void
}

export function Cards({ product, onClick }: CardsProps) {
  return (
    <>
      <article
        onClick={onClick}
        className="row-span-3 relative p-6 shadow-sm hover:shadow border border-sand-7 hover:border-sand-8 rounded-2xl transition ease-in-out duration-700 group flex flex-col gap-8"
      >
        <div className="relative opacity-80">
          <img src={product.imageUrl} alt="card" className="w-full h-full object-cover" />

          <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-b from-white/0 to-white"></div>
        </div>

        <div className="flex flex-row gap-4">
          <div className="shrink-0 w-10 h-10 bg-primary/20 rounded-md flex justify-center items-center">
            <svg className="h-6 w-6 fill-primary" viewBox="0 0 256 256">
              <path
                fill="currentColor"
                d="M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m-88 16h48v72l-19.21-14.4a8 8 0 0 0-9.6 0L120 112Zm80 144H72a31.8 31.8 0 0 0-16 4.29V56a16 16 0 0 1 16-16h32v88a8 8 0 0 0 12.8 6.4L144 114l27.21 20.4A8 8 0 0 0 176 136a8 8 0 0 0 8-8V40h16Z"
              />
            </svg>
          </div>

          <div className="space-y-1">
            <h2 className="text-lg font-semibold">
              <div>
                <span>{product.name}</span>
                <span className="absolute inset-0"></span>
              </div>
            </h2>

            <p className="text-sm text-sand-11 group-hover:text-sand-12 transition ease-in-out duration-700">
              {product.sport}
            </p>
            <p className="text-xl font-bold text-primary-600">R$ {product.price?.toFixed(2)}</p>
          </div>
        </div>
      </article>
    </>
  )
}

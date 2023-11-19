import Link from 'next/link'
import type { Dimension, Image, Producer, Product } from '@prisma/client'
import { twMerge } from 'tailwind-merge'

import { TableSizes } from '~ui/TableSizes'
import { generateProductPrice } from '~utils/product'

type Props = {
  product: Product & {
    images: Image[]
    dimensions: Dimension[]
    producer: Producer
  }
}

export const ProductDetails = ({ product }: Props) => {
  const price = generateProductPrice(product.price)

  return (
    <Link href={`/product/${product.id}`} className="z-10 flex h-full flex-col items-center gap-2">
      <div
        className={twMerge(
          'absolute inset-0 border border-transparent opacity-0 transition-opacity duration-300',
          'hover:border-slate-200 hover:opacity-100'
        )}
      />
      <span className="text-slate-500">{product.producer.name}</span>
      <h2 className="mb-4 text-center text-lg">{product.name}</h2>
      <div className="mt-auto flex flex-col items-center">
        <span className="text-green-600">{price}</span>
        <TableSizes product={product} />
      </div>
    </Link>
  )
}

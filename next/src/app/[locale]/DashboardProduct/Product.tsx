import type { Dimension, Image, Producer, Product } from '@prisma/client'

import { ProductDetails } from './ProductDetails'
import { ProductImage } from './ProductImage'

type Props = {
  product: Product & {
    images: Image[]
    dimensions: Dimension[]
    producer: Producer
  }
}

export function DashboardProduct({ product }: Props) {
  return (
    <div className="relative grid w-80 grid-rows-[repeat(2,200px)] flex-col p-4">
      <ProductImage leadImage={product.images[0]} width={240} height={180} />
      <ProductDetails product={product} />
    </div>
  )
}

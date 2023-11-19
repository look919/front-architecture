import type { Dimension, Product } from '@prisma/client'

import { getProductSizes } from '~utils/product'

interface TableSizesProps {
  product: Product & {
    dimensions: Dimension[]
  }
}

export const TableSizes = ({ product }: TableSizesProps) => {
  const sizes = getProductSizes(product)

  return (
    <div className="flex justify-evenly">
      {sizes.map((size) => (
        <span
          className="mx-1 mt-2 flex h-8 w-8 items-center justify-center border border-slate-600"
          key={size}
        >
          {size}
        </span>
      ))}
    </div>
  )
}

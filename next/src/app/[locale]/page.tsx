import { db } from '~lib/db'
import { isDefined } from '~utils/valueChecks'

import { DashboardProduct } from './DashboardProduct'
import { Filters } from './Filters'

type HomePageProps = {
  searchParams: {
    name: string
    producer: string
    dimensions: string[]
    minPrice: string
    maxPrice: string
    colors: string[]
  }
}

const getItemsArrayConditions = (dimensions?: string[]) => {
  if (!isDefined(dimensions)) {
    return undefined
  }

  return Array.isArray(dimensions) ? dimensions : [dimensions]
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const products = await db.product.findMany({
    include: {
      images: true,
      dimensions: true,
      producer: true,
    },
    where: {
      name: {
        contains: searchParams.name,
      },
      producer: {
        name: {
          contains: searchParams.producer,
        },
      },
      dimensions: {
        some: {
          value: {
            in: getItemsArrayConditions(searchParams.dimensions),
          },
        },
      },
      price: {
        gte: parseInt(searchParams.minPrice, 10) || 0,
        lte: parseInt(searchParams.maxPrice, 10) || 10000,
      },
      colors: {
        some: {
          id: {
            in: getItemsArrayConditions(searchParams.colors),
          },
        },
      },
    },
  })

  const colors = await db.color.findMany()

  return (
    <main className="flex">
      <Filters colors={colors} />
      <section className="grid w-full grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] justify-items-center gap-8 px-4">
        {products.map((product) => (
          <DashboardProduct product={product} key={product.name} />
        ))}
      </section>
    </main>
  )
}

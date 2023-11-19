import Image from 'next/image'

import { getImagePath } from '~utils/getImagePath'

type ProductImageProps = {
  leadImage: {
    url: string
  }
  width: number
  height: number
}

export const ProductImage = ({ leadImage, ...props }: ProductImageProps) => {
  const src = getImagePath(leadImage)

  return (
    <div className="relative flex w-full items-center justify-center">
      <Image
        src={src}
        className="z-10 aspect-[4/3] h-auto w-60 overflow-visible brightness-75"
        alt="product photo"
        priority
        {...props}
      />
    </div>
  )
}

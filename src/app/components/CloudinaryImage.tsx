'use client'

import { CldImage } from 'next-cloudinary'

type Props = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export default function CloudinaryImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: Props) {
  return (
    <CldImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      format="auto"
      quality="auto"
    />
  )
}

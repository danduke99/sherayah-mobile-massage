'use client'

import { CldImage } from 'next-cloudinary'
import Image from 'next/image'

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
  const isLocal = src.startsWith('local:')

  if (isLocal) {
    const localPath = src.replace('local:', '')
    return (
      <Image
        src={localPath}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
      />
    )
  }

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

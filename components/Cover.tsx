import Image from 'next/image'

// components/Cover.tsx
type CoverProps = { src: string; alt?: string }

export default function Cover({ src, alt }: CoverProps) {
  return (
    <Image
      src={src}
      alt={alt || 'Cover'}
      className="w-full rounded-xl"
      width={640}
      height={360}
    />
  )
}

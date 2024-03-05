import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

interface PropsType extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  className?: string
}

function Image({ className, ...props }: PropsType) {
  return <img {...props} loading="lazy" className={`pointer-events-none relative z-[2] select-none ${className}`} />
}

export default Image

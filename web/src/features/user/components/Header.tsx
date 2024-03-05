type LinkItemProps = {
  to: string
  children: React.ReactNode
}

const LinkItem = ({ to, children }: LinkItemProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    const target = document.querySelector(to)
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 text-lg font-medium text-white transition-all duration-300 hover:underline"
    >
      {children}
    </button>
  )
}

export default function Header() {
  return (
    <div className="absolute top-0 z-[8] flex w-full items-center justify-center py-4 text-white backdrop-blur-sm">
      <LinkItem to="#sale">Khuyến mãi</LinkItem>

      <LinkItem to="#info">Thông tin</LinkItem>

      <LinkItem to="#footer">Liên hệ</LinkItem>
    </div>
  )
}

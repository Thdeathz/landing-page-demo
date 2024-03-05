type Props = {
  className?: string
  id: string
  title: React.ReactNode
  subTitle: React.ReactNode
  children: React.ReactNode
}

export default function Section({ className, title, id, subTitle, children }: Props) {
  return (
    <div id={id} className={`flex h-screen w-screen items-baseline justify-center ${className}`}>
      <div className="m-auto max-w-[1600px]">
        <div className="mb-12 flex flex-col items-center justify-center">
          <h2 className="text-center text-4xl font-bold text-[#094067]">{title}</h2>

          <div className="my-2 h-[3px] w-[6rem] bg-[#3da9fc]" />

          <h5 className="text-center text-lg text-[#5f6c7b]">{subTitle}</h5>
        </div>

        {children}
      </div>
    </div>
  )
}

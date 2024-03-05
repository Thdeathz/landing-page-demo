import Image from '@/components/Image'
import Section from '@/components/Section'

import Info1 from '@/assets/landing-1.png'
import Info2 from '@/assets/landing-2.png'
import Info3 from '@/assets/landing-3.png'

type InfoItemProps = {
  image: string
  index: string
  title: string
  description: string
}

function InfoItem({ image, index, title, description }: InfoItemProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <div className="flex items-center justify-center gap-8">
        <Image src={image} alt="info-item" className="aspect-square w-[6rem] object-contain" />

        <p className="text-6xl font-bold opacity-30">{index}</p>
      </div>

      <p className="mt-2 text-3xl font-semibold text-[#094067]">{title}</p>

      <p className="text-base text-[#5f6c7b]">{description}</p>
    </div>
  )
}

export default function AppInformation() {
  return (
    <Section
      id="info"
      className="bg-orange-100"
      title={
        <span>
          Bạn có thể tìm thấy gì ở <span className="text-orange-600">Amazingtrip</span>?
        </span>
      }
      subTitle={
        <span>
          Đây là nơi bạn có thể chia sẻ, giao lưu, tìm bạn đồng hành,
          <br />
          tất cả những gì bạn cần cho chuyến đi sắp tới.
        </span>
      }
    >
      <div className="mt-24 grid grid-cols-3 gap-12 px-72">
        <InfoItem
          image={Info1}
          index="01"
          title="Bạn đồng hành"
          description="Nơi những người cô đơn gặp nhau, cùng trải qua những chuyến du lịch thú vị."
        />

        <InfoItem
          image={Info2}
          index="02"
          title="Tiết kiệm tiền"
          description="Nơi tìm được những chuyến đi giá rẻ những cuộc vui bất tận."
        />

        <InfoItem
          image={Info3}
          index="03"
          title="Chia sẻ"
          description="Nơi những khoảng khắc thú vị về chuyến đi của bạn được chia sẻ tới mọi người."
        />
      </div>
    </Section>
  )
}

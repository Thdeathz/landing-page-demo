import Image from '@/components/Image'
import Section from '@/components/Section'
import { LeftOutlined, PercentageOutlined, RightOutlined } from '@ant-design/icons'
import Slider from 'react-slick'

const data = [
  {
    name: 'Đà Nẵng',
    image:
      'https://images.pexels.com/photos/3355788/pexels-photo-3355788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: '70'
  },
  {
    name: 'Quảng Ninh',
    image:
      'https://images.pexels.com/photos/9578724/pexels-photo-9578724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: '60'
  },
  {
    name: 'Hội An',
    image:
      'https://images.pexels.com/photos/9839859/pexels-photo-9839859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: '50'
  },
  {
    name: 'Huế',
    image:
      'https://images.pexels.com/photos/3889928/pexels-photo-3889928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: '30'
  },
  {
    name: 'Nha Trang',
    image:
      'https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: '10'
  }
]

type ArrowProps = {
  className?: string
  onClick?: () => void
}

function NextArrow({ className, onClick }: ArrowProps) {
  return (
    <div
      className={`group z-50 flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-white ${className}`}
      onClick={onClick}
      id="landing-arrow"
      style={{ right: '-25px' }}
    >
      <button
        type="button"
        className="flex aspect-square h-[3.3rem] items-center justify-center rounded-full bg-orange-600 transition-all duration-200 active:scale-95 group-hover:translate-x-[3px] group-hover:bg-orange-500"
      >
        <RightOutlined className="text-white" />
      </button>
    </div>
  )
}

function PrevArrow({ className, onClick }: ArrowProps) {
  return (
    <div
      className={`group z-50 flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-white ${className}`}
      onClick={onClick}
      id="landing-arrow"
      style={{ left: '-25px' }}
    >
      <div className="flex aspect-square h-[3.3rem] items-center justify-center rounded-full bg-orange-600 transition-all duration-200 active:scale-95 group-hover:translate-x-[-3px] group-hover:bg-orange-500">
        <LeftOutlined className="text-white" />
      </div>
    </div>
  )
}

export default function SaleBanner() {
  if (!data) return <p>Loading...</p>

  return (
    <Section
      id="sale"
      title="Đang giảm giá"
      subTitle={
        <span>
          Những khuyến mãi cực khủng
          <br />
          đang chờ đón bạn, còn ngại ngần gì mà không đăng ký ngay !
        </span>
      }
    >
      <Slider
        infinite
        lazyLoad="ondemand"
        pauseOnHover={false}
        autoplay
        speed={500}
        autoplaySpeed={2000}
        slidesToShow={4}
        slidesToScroll={1}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        {data.map((each, index) => (
          <div className="relative h-[35rem] p-3" key={index}>
            <Image src={each.image} alt="landing-banner" className="h-full w-full rounded-2xl object-cover" />

            <div className="absolute bottom-8 left-0 z-[5] w-full text-center text-white">
              <h5 className="text-2xl font-semibold">{each.name}</h5>

              <span className="text-lg font-medium">
                {each.discount}
                <PercentageOutlined />
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </Section>
  )
}

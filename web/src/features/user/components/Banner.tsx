import Image from '@/components/Image'
import { Carousel } from 'antd'
import Typerwriter from 'typewriter-effect'

const data = [
  {
    address_name: 'Hội An',
    address_follow: 60,
    address_image:
      'https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    address_name: 'Đà Nẵng',
    address_follow: 90,
    address_image:
      'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    address_name: 'Huế',
    address_follow: 30,
    address_image:
      'https://images.pexels.com/photos/1310788/pexels-photo-1310788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    address_name: 'Quảng Ninh',
    address_follow: 10,
    address_image:
      'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
]

export default function Banner() {
  if (!data) return <p>Loading...</p>

  return (
    <div className="relative h-screen w-screen snap-start">
      <Carousel className="" fade dots={false} speed={500} autoplay autoplaySpeed={2500} pauseOnHover={false}>
        {data.map((item, index) => (
          <Image key={index} src={item.address_image} alt="landing-banner" className="h-screen w-screen object-cover" />
        ))}
      </Carousel>

      <div className="absolute left-banner-center-w top-banner-center-h z-[100] h-[10rem] w-[45rem] text-center text-6xl font-bold text-white opacity-80">
        <span>Cùng</span>
        <div className="my-4 text-orange-600">
          <Typerwriter
            options={{
              strings: ['AmazingTrip', 'Bạn bè'],
              autoStart: true,
              loop: true
            }}
          />
        </div>
        <span>Khám phá thế giới !!!</span>
      </div>
    </div>
  )
}

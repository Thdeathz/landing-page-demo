import Slider from 'react-slick'
import Typerwriter from 'typewriter-effect'

const data = [
  {
    address_name: 'Đà Nẵng',
    address_follow: 90,
    address_image:
      'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    address_name: 'Hội An',
    address_follow: 60,
    address_image:
      'https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
    <div className="relative h-screen w-screen">
      <p className="top-banner-center-h left-banner-center-w absolute z-[100] h-[10rem] w-[45rem] text-center text-5xl font-medium text-white">
        <span>Cùng</span>
        <span>
          <Typerwriter
            options={{
              strings: ['AmazingTrip', 'Bạn bè'],
              autoStart: true,
              loop: true
            }}
          />
        </span>
        <span>Khám phá thế giới !!!</span>
      </p>

      <Slider
        autoplay
        autoplaySpeed={2500}
        fade
        infinite
        slidesToShow={1}
        speed={500}
        slidesPerRow={1}
        pauseOnHover={false}
        nextArrow={<></>}
        prevArrow={<></>}
        className="absolute left-0 top-0 z-[-10] h-full w-full"
      >
        {data.map((each, index) => (
          <img key={index} className="z-[-10] h-full w-full object-cover" src={each.address_image} />
        ))}
      </Slider>
    </div>
  )
}

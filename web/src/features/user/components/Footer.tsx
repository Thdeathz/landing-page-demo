import Image from '@/components/Image'
import { FacebookFilled, GithubFilled, MailFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import AppLogo from '@/assets/app-logo.png'
import ContactModal from './ContactModal'

export default function Footer() {
  return (
    <footer id="footer" className="relative p-4 text-white">
      <section className="bg-footer absolute left-0 top-0 z-[-10] h-full w-full bg-cover bg-center bg-no-repeat text-white brightness-50" />

      <div className="flex items-start justify-center gap-96 p-12">
        <div className="flex basis-1/2 flex-col items-center justify-center">
          <p>
            A web application development <br /> for the project development <br /> special course.
          </p>

          <Link to="/">
            <Image className="w-[12rem]" src={AppLogo} alt="app-logo" />
          </Link>
        </div>

        <div className="basis-1/2">
          <ContactModal />

          <ul className="mt-4 px-2">
            <li>
              <a href="#">成長 Team</a>
            </li>
            <li>
              <a href="#">Email: abc@gmail.com</a>
            </li>
            <li>
              <a href="#">Facebook: ABC</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between border-t">
        <p className="pt-2">&copy; Copyright AmazingTrip - By 成長 Team</p>

        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link to="/">
              <FacebookFilled />
            </Link>
          </li>
          <li>
            <Link to="/">
              <MailFilled />
            </Link>
          </li>
          <li>
            <Link to="/">
              <GithubFilled />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

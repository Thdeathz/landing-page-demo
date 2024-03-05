import { Modal } from 'antd'
import { useState } from 'react'
import ContactForm from './ContactForm'

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <button
        className="whitespace-nowrap rounded-full bg-orange-600 font-medium text-white shadow-md transition-all duration-200 hover:translate-y-[-3px] hover:bg-orange-500 active:scale-95"
        onClick={() => setIsOpen(true)}
      >
        <input
          className="cursor-pointer select-none rounded-s-full px-4 py-2 outline-none"
          placeholder="Thông tin liên hệ..."
        />
        <span className="pl-2 pr-4">Liên hệ chúng tôi</span>
      </button>

      <Modal centered open={isOpen} onCancel={() => setIsOpen(false)} footer={<></>}>
        <ContactForm setIsOpen={setIsOpen} />
      </Modal>
    </>
  )
}

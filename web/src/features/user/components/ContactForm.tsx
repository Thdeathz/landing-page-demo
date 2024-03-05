import { Button, Form, Input, message } from 'antd'
import { fullnameRegex, phoneRegex } from '@/logic/regex'

import { useCreateUserContactMutation } from '../store/userService'

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ContactForm({ setIsOpen }: Props) {
  const [form] = Form.useForm<UserContact>()
  const [createUserContact, { isLoading }] = useCreateUserContactMutation()

  const onFinish = async (values: UserContact) => {
    try {
      const result = await createUserContact(values).unwrap()

      if (result.status === 'success') {
        form.resetFields()
        setIsOpen(false)
        message.success('Thêm thông tin liên hệ thành công!')
      }
    } catch (error) {
      setIsOpen(false)
      message.error('Có lỗi xảy ra, vui lòng thử lại sau!')
    }
  }

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <p className="mb-4 text-2xl font-medium">Thông tin liên hệ</p>

      <Form.Item
        name="fullname"
        label="Họ và tên"
        required
        rules={[
          { required: true, message: 'Vui lòng nhập họ và tên!' },
          {
            pattern: fullnameRegex,
            message: 'Họ và tên không hợp lệ!'
          }
        ]}
      >
        <Input id="fullname" placeholder="Nguyen Van A" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        required
        rules={[
          { required: true, message: 'Vui lòng nhập email!' },
          {
            type: 'email',
            message: 'Email không hợp lệ!'
          }
        ]}
      >
        <Input id="email" placeholder="example@mail.com" />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Số điện thoại"
        required
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập số điện thoại!'
          },
          {
            pattern: phoneRegex,
            message: 'Số điện thoại không hợp lệ!'
          }
        ]}
      >
        <Input id="phone" placeholder="0987654321" />
      </Form.Item>

      <Form.Item
        name="address"
        label="Địa chỉ"
        required
        rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
      >
        <Input.TextArea id="address" placeholder="số 1, Ta Quang Buu, ..." />
      </Form.Item>

      <div className="flex items-center justify-end gap-4">
        <Button onClick={() => setIsOpen(false)}>Hủy</Button>

        <Button className="bg-[#1677ff]" type="primary" htmlType="submit" loading={isLoading}>
          Gửi thông tin
        </Button>
      </div>
    </Form>
  )
}

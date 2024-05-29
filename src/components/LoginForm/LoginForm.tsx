import { Button, Form, Input, Space } from 'antd';
import { ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Form: {
                        labelFontSize: 30,
                    },
                    Button: {
                        colorPrimaryBg: "#9333ea",
                        colorPrimaryHover: "#a658ed",
                        colorPrimary: "#9333ea",
                        primaryShadow: "0 0 0 2px rgba(147, 51, 234, 0.1)"
                    },
                    Input: {
                        activeBorderColor: "#9333ea",
                        hoverBorderColor: "#9333ea",
                        activeShadow: "0 0 0 2px rgba(147, 51, 234, 0.1)"
                    }
                },
            }}>
            <div className='flex flex-col items-center mx-auto my-56 gap-y-16'>
                <div className="text-5pxl">
                    <p>👋<span className='font-bold text-purple-600'>Login</span>Time</p>
                </div>
                <Form name='Signin'
                    onFinish={onFinish}
                    initialValues={{ remember: true }}
                    style={{ maxWidth: 500, minWidth: 230 }}>
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your email!" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item className="text-center">
                        <Space>
                            <Button
                                className="text-white font-bold px-8"
                                size='large'
                                htmlType='submit'
                                type="primary">
                                Submit
                            </Button>
                            <Button
                                className="text-[#d9d9d9] font-bold px-8"
                                size='large'
                                type="default">
                                <Link to={`/`}>Back</Link>
                            </Button>
                        </Space>
                    </Form.Item>

                </Form>
            </div>
        </ConfigProvider >
    )
}
// RegistrationForm.tsx
import { Button, Form, Input, Space } from 'antd';
import { ConfigProvider } from 'antd';
import axios from 'axios';
import JSConfetti from 'js-confetti';
import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

export const RegistrationForm = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const { login } = useUser();

    const onFinish = async (values: any) => {
        confettiRef.current.addConfetti();
        try {
            const response = await axios.post('http://localhost:3000/auth/register', values);
            login(response.data.email); // Виклик функції login після успішної реєстрації
            form.resetFields();
            navigate('/');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    const confettiRef = useRef<any>(null);
    useEffect(() => {
        const jsConfetti = new JSConfetti();
        confettiRef.current = jsConfetti;
    }, []);

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
                    <p>👋<span className='font-bold text-purple-600'>Register</span>Time</p>
                </div>
                <Form name='Signin'
                    onFinish={onFinish}
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
    );
}

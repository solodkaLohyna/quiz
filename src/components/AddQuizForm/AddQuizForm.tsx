import { PlusOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Form, Input, Space, notification } from "antd"
import { useState } from "react";
import { DefaultQuestionForm } from "../DefaultQuestionForm/DefaultQuestionForm";
import axios from "axios";

export const AddQuizForm = () => {
    const [questionsNumber, setQuestionsNumber] = useState<number[]>([]);
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    type NotificationType = 'success';

    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
            message: 'Success',
            description:
                'You have successfully add quiz!',
        });
    };

    const onFinish = async (values: any) => {
        const quiz = {
          title: values['quiz topic'],
          questions: questionsNumber.map((number, index) => ({
            text: values[`question text ${index}`],
            correctAnswerId: index + 1, // Assuming the correct answer ID is based on the order
            answers: [
              { text: values[`answer text ${index}-0`] },
              { text: values[`answer text ${index}-1`] },
              { text: values[`answer text ${index}-2`] },
            ]
          }))
        };
    
        try {
          await axios.post('http://localhost:3000/quiz', quiz);
          openNotificationWithIcon('success');
          form.resetFields();
          setQuestionsNumber([]);
        } catch (error) {
          console.error('Failed to add quiz:', error);
        }
      };

    const onHandleQuestionNumber = () => {
        setQuestionsNumber([...questionsNumber, questionsNumber.length + 1])
    }

    return (
        <>
            <ConfigProvider>
                {contextHolder}
                <Form
                    name="AddQuiz"
                    onFinish={onFinish}>
                    <Form.Item label="Quiz topic" name="quiz topic">
                        <Input />
                    </Form.Item>
                    {questionsNumber.map((number => (
                        <DefaultQuestionForm key={number} id={number} />)))}
                    <Form.Item className="text-center">
                        <Space>
                            <Button
                                onClick={onHandleQuestionNumber}
                                className="text-purple-600 font-bold px-8"
                                icon={<PlusOutlined style={{ color: '#9333ea' }} />}
                                size='large' type="primary">
                                Add Question
                            </Button>
                            <Button
                                className="text-white font-bold px-8"
                                size='large'
                                htmlType='submit'>
                                Submit
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </ConfigProvider>
        </>
    )
}
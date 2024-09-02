// SecurityQuestions.tsx
import { Button, Form, Input, Space } from 'antd';
import { useState } from 'react';

const questions = [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is the color of the sky?", answer: "Blue" }
];

export const SecurityQuestions = ({ onSuccess }: { onSuccess: () => void }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleInputChange = (index:any , value:any) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const isAllCorrect = questions.every((q, index) => q.answer.toLowerCase() === answers[index].toLowerCase());
    if (isAllCorrect) {
      onSuccess();
    } else {
      alert("Some answers are incorrect. Please try again.");
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      {questions.map((q, index) => (
        <Form.Item label={q.question} key={index}>
          <Input value={answers[index]} onChange={(e) => handleInputChange(index, e.target.value)} />
        </Form.Item>
      ))}
      <Form.Item className="text-center">
        <Space>
          <Button className="text-white font-bold px-8" size='large' htmlType='submit' type="primary">
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

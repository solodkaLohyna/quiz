import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Collapse, CollapseProps, List, Space } from "antd";

type QuizProps = {
  id: number;
  topic: string;
  questions: QuestionProps[];
};

type QuestionProps = {
  id: number;
  question: string;
  answers: AnswerProps[];
  correctAnswer: number;
};

type AnswerProps = {
  id: number;
  answer: string;
};

export const quizToTabItem = ({ questions, id, topic }: QuizProps) => {
  const genExtra = () => (
    <Space>
      <EditOutlined style={{ color: '#9333ea' }} onClick={(event) => { event.stopPropagation(); }} />
      <DeleteOutlined style={{ color: '#9333ea' }} onClick={(event) => { event.stopPropagation(); }} />
    </Space>
  )

  const items: CollapseProps["items"] = questions.map((item) => {
    const answers = item.answers.map((answerItem => {
      return answerItem.answer
    }))
    console.log(answers)
    return {
      key: item.id,
      label: item.question,
      extra: genExtra(),
      children: <List
        bordered
        dataSource={answers}
        renderItem={(item) => <List.Item extra={genExtra()}>{item}</List.Item>}
      />
    };
  });

  return {
    key: id,
    label: topic,
    children: <Collapse size="large" items={items} />,
    extra: genExtra()
  };
};

import { Button, Collapse, ConfigProvider } from "antd";
import QuizTabItem from "../QuizTabItem/QuizTabItem";
import { quizesArray } from "../quizesArray";
import { PlusOutlined } from "@ant-design/icons";
import { AddQuizForm } from "../AddQuizForm/AddQuizForm";
import { useState } from "react";

export const QuizesTab = () => {
  const [isCLicked, setIsClicked] = useState(false)

  const items = quizesArray.map((item) => {
    return QuizTabItem(item);
  });

  const onHandleClick = () => {
    setIsClicked(true)
  }

  const addQuiz = () => {
    return isCLicked ? <AddQuizForm /> : ""
  }

  return (
    <ConfigProvider>
      {{ quizesArray }.quizesArray.length != 0 ? <Collapse size="large" items={items} defaultActiveKey={['1']} /> : <><p className="text-center">There are no quizes. You can create the first one!</p><br /></>}
      {addQuiz()}
      <Button onClick={onHandleClick} block className="px-8 bg-white" size={'large'} icon={<PlusOutlined style={{ color: '#9333ea' }} />} />
    </ConfigProvider >
  );
};

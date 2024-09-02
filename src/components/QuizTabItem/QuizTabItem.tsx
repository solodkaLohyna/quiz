import { DeleteOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";
import { Collapse, List, Space, Input, notification } from "antd";
import { useState } from "react";

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

export const QuizTabItem = ({ id, topic, questions }: QuizProps) => {
    const [isEditingTopic, setIsEditingTopic] = useState(false);
    const [editedTopic, setEditedTopic] = useState(topic);

    type NotificationType = 'success';
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
            message: 'Success',
            description:
                'You have successfully changed the title',
        });
    };

    const handleEditTopic = () => {
        setIsEditingTopic(true);
    };

    const handleSaveTopic = () => {
        setIsEditingTopic(false);
        openNotificationWithIcon('success')
        console.log("Saving topic:", editedTopic);
    };

    const genExtra = (onEdit: () => void, onSave: () => void, isEditing: boolean) => (
        <Space>
            {isEditing ? (
                <SaveOutlined style={{ color: '#9333ea' }} onClick={(event) => { event.stopPropagation(); onSave(); }} />
            ) : (
                <EditOutlined style={{ color: '#9333ea' }} onClick={(event) => { event.stopPropagation(); onEdit(); }} />
            )}
            <DeleteOutlined style={{ color: '#9333ea' }} onClick={(event) => { event.stopPropagation(); }} />
            {contextHolder}
        </Space>
    );

    const questionItems = questions.map((question) => {
        const [isEditingQuestion, setIsEditingQuestion] = useState(false);
        const [editedQuestion, setEditedQuestion] = useState(question.question);

        const handleEditQuestion = () => {
            setIsEditingQuestion(true);
        };

        const handleSaveQuestion = () => {
            setIsEditingQuestion(false);
            // Save the edited question (you might want to call an API here)
            console.log("Saving question:", editedQuestion);
        };

        const answers = question.answers.map((answerItem, index) => {
            const [isEditingAnswer, setIsEditingAnswer] = useState(false);
            const [editedAnswer, setEditedAnswer] = useState(answerItem.answer);

            const handleEditAnswer = () => {
                setIsEditingAnswer(true);
            };

            const handleSaveAnswer = () => {
                setIsEditingAnswer(false);
                // Save the edited answer (you might want to call an API here)
                console.log("Saving answer:", editedAnswer);
            };

            return (
                <List.Item key={index} extra={genExtra(handleEditAnswer, handleSaveAnswer, isEditingAnswer)}>
                    {isEditingAnswer ? (
                        <Input value={editedAnswer} onChange={(e) => setEditedAnswer(e.target.value)} />
                    ) : (
                        editedAnswer
                    )}
                </List.Item>
            );
        });

        return {
            key: question.id,
            label: isEditingQuestion ? (
                <Input value={editedQuestion} onChange={(e) => setEditedQuestion(e.target.value)} />
            ) : (
                editedQuestion
            ),
            extra: genExtra(handleEditQuestion, handleSaveQuestion, isEditingQuestion),
            children: <List bordered>{answers}</List>,
        };
    });

    return {
        key: id,
        label: isEditingTopic ? (
            <Input value={editedTopic} onChange={(e) => setEditedTopic(e.target.value)} />
        ) : (
            editedTopic
        ),
        extra: genExtra(handleEditTopic, handleSaveTopic, isEditingTopic),
        children: <Collapse items={questionItems} />,

    };
};

export default QuizTabItem;

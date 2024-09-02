import { Form, Input } from "antd"


export const DefaultQuestionForm = ({id}: {id:number}) => {
    
    const answerInputList = [
        <Form.Item label='Answer no. 1' name='answer text'><Input /></Form.Item>,
        <Form.Item label='Answer no. 2' name='answer text'><Input /></Form.Item>,
        <Form.Item label='Answer no. 3' name='answer text'><Input /></Form.Item>
    ]
    
    const defaultQuestionLabel = `Question no. ${id}`
    return (
        <>
            <Form.Item label={defaultQuestionLabel} name="question text">
                <Input />
            </Form.Item>
            {answerInputList}
            <Form.Item label='Correct answer' name='correct answer' >
                <Input />
            </Form.Item>
        </>
    )
}
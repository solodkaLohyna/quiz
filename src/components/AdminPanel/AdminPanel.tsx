import { ConfigProvider, Tabs } from 'antd';
import { QuizesTab } from '../QuizesTab/QuizesTab';

const tabsArray = new Array(
    { id: 1, title: 'Quizes', content: <QuizesTab /> },
    { id: 2, title: 'Users', content: "users" });

export const AdminPanel = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontSize: 20
                },
                components: {
                    Tabs: {
                        cardPaddingLG: '10px',
                        itemHoverColor: '#9333ea',
                        itemActiveColor: '#9333ea',
                        itemSelectedColor: '#9333ea'
                    }
                }
            }}>
            <div className='w-3/4 mx-auto my-16'>
                <Tabs
                    type='card'
                    centered
                    size='large'
                    items={tabsArray.map((tabItem) => {
                        return {
                            label: tabItem.title,
                            key: (String)(tabItem.id),
                            children: tabItem.content
                        }
                    })}>
                </Tabs>
            </div>
        </ConfigProvider>
    )
}
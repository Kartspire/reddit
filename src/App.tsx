import React, { useState } from 'react';
import './styles/main.global.css';
import { Layout } from './components/Layout/Layout';
import { Header } from './components/Header/Header';
import { Content } from './components/Content';
import { CardsList } from './components/CardsList';
import { Dropdown } from './components/Dropdown';
import { Card } from './components/CardsList/Card';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
    console.log(count);
  };

  return (
    <div className='App'>
      <Layout>
        <Header />
        <Content>
          <CardsList />
          <div style={{ padding: '20px' }}>
            <br />
            {/* <Dropdown
              onOpen={() => console.log('open')}
              onClose={() => console.log('closed')}
              button={<button>Test</button>}
            >
              <ul>
                <li>Комментарии</li>
                <li>Поедлиться</li>
                <li>Скрыть</li>
                <li>Сохранить</li>
                <li>Пожаловаться</li>
                <li>Закрыть</li>
              </ul>
            </Dropdown> */}
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;

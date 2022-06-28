import React, { useState } from 'react';
import './styles/main.global.css';
import { Layout } from './components/Layout/Layout';
import { Header } from './components/Header/Header';
import { Content } from './components/Content';
import { CardsList } from './components/CardsList';

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
        </Content>
      </Layout>
    </div>
  );
}

export default App;

//必須
import React from 'react';
import { createRoot } from 'react-dom/client';

//コンポーネント読み込み
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 1. 라우트 관련
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'

// 2. BrowserRouter로 전체 설정
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

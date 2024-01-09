import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './login'

function App() {

  return (
    <>
      ReactDOM.createRoot(document.getElementById("root")).render(<LoginForm />);
    </>
  )
}

export default App

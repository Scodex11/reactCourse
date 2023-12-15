import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusSreen } from './04-ref/FocusSreen'
import { MemoHook } from './06-memos/MemoHook'
import { CallbackHook } from './06-memos/CallBackHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <CallbackHook />
  //</React.StrictMode>
)

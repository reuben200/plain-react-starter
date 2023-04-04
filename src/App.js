import React from 'react'
import './App.css'
import Navigation from './components/navigation/Navigation'
import State from './components/UsestateHook/State'
import Reducer from './components/UsereducerHook/Reducer'
import Refhook from './components/useref/Refhook'
import Effect from './components/UseeffectHook/Effect'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Callback from './components/otherhooks/Callback'
import Context from './components/otherhooks/Context'
import Memo from './components/otherhooks/Memo'
import LayoutEffect from './components/otherhooks/LayoutEffect'
import UseId from './components/otherhooks/useId'

const App = () => {
  return (
    <div className='main-container App'>Hello World</div>
  )
}

export default App
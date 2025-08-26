import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Landing from './components/Landing'
import Header from './components/Header'
import Authentication from './components/Authentication'




function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/authentication" element={<Authentication />}/>
    </Routes>
    </>
  )
}

export default App

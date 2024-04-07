import React from 'react'
import './App.css';

import { Hero, Navbar, About, Hover_CTA, Thesis, BookCall, Footer, IRA, News, Message } from '../components';

const App = () => {
  return (
    <div className="App">
      
      <Navbar />
      <Hero />
      <About />
      <Hover_CTA />
      <Thesis />
      <Message />
      <IRA /> 
      <News />
      <BookCall />
      <Footer />
    </div>
  )
}

export default App

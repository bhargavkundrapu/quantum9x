
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence}  from 'framer-motion'
import  {ThemeProvider}  from './Components/ThemeProvider'
import  GlobalCSS  from './Components/GlobalCSS'
import  ThemeSmokeTest  from './Components/ThemeSmokeTest'
import  ScrollToTop  from './Components/ScrollToTop'
import  Navbar  from './Components/Navbar'
import PageWrap from  './Components/PageWrap'
import  HomePage  from './Components/Home'
import {CoursesPage} from './Components/Courses'
import ContactPage from './Components/ContactUs'
import React from 'react'
import './App.css'

function App() {
  

  return (
      <>
        <GlobalCSS />
        <BrowserRouter>
          
          <ScrollToTop />
          <Navbar />
          <AnimatePresence initial={false}>
            <Routes >
              <Route path="/" element={<PageWrap><HomePage /></PageWrap>} />
              <Route path="/courses" element={<PageWrap><CoursesPage /></PageWrap>} />
              <Route path="/contact" element={<PageWrap><ContactPage /></PageWrap>} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </>
  )
}

export default App

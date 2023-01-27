import React, { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contacts"
import SocialLinks from './Components/social'
import Projects from './Components/Projects'


export default function App() {
  const [menu, setMenu] = useState('close')
  const [pages, setPages ] = useState([
      {page: <Home />, path: '/'}, 
      {page: <About />, path: '/about'}, 
      {page: <Projects />, path: '/projects'},
      {page: <Contact />, path: '/contact'} 
  ])

const btnRef = useRef()
const location = useLocation()
const path = location.pathname

const toggleNav = () => {
    setMenu(prev => prev === 'close' ? 'open' : 'close')     
}

useEffect(() => {
  let updatePages = []
  pages.map((page) => {
    if(path === page.path) {
      updatePages.unshift(page)
    } else {
      updatePages.push(page)
    }
  })
  setPages( updatePages )
}, [path])

useEffect(() => {
  if( btnRef.current.className.includes('hidden') ) {
    btnRef.current.classList.remove('hidden')
  } else {
    btnRef.current.classList.add('hidden')
  }
}, [menu])

const className = path => {
  if(path === '/' ) {
    return 'bg-blue-500 text-gray-200'
  } else if(path === '/about') {
    return 'bg-gray-100'
  } else if(path === '/projects') {
    return 'bg-white'
  } else {
    return 'bg-blue-500 text-gray-200'
  }
}

const showPages = pages.map((page, idx) => 
  <div key={idx} 
    className={`${className(page.path)} ${idx === 0 ? 'pt-28' : []} border-b-5` }
  > 
    {page.page} 
  </div>)

  return (
    <div className='font-sans-serif m-auto text-gray-500 scroll-smooth '>
        <Navbar 
          menu={menu}
          toggleNav={toggleNav}
          btnRef={btnRef}
        />
        { showPages }   
        <SocialLinks />
    </div>
  )
}
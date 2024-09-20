import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'


function root() {
  return (
    <>
    <header>
        <Header />
    </header>
    <main>
        <Outlet />
    </main>
    <footer>
        <Footer />
    </footer>
    </>
  )
}

export default root
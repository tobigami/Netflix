import React, { useState } from 'react'
import Footer from 'src/Components/Footer'
import Header from 'src/Components/Header'
import Modal from 'src/Components/Modal'

interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

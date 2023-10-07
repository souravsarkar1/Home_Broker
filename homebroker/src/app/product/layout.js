"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
const Layout = ({children}) => {
    const path = usePathname();
  return (
    <div>
      <h1>common layout for product</h1>
      {children}
    </div>
  )
}

export default Layout

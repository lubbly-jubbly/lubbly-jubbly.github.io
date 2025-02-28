import 'bootstrap/dist/css/bootstrap.css'
import { Metadata } from 'next'
import { Inconsolata, Roboto } from 'next/font/google'
import React, { ReactNode } from 'react'
import '../../styles/globals.css'
import Links from '../components/links'
import Navbar from '../components/navbar'
import styles from './layout.module.css'

export const metadata: Metadata = {
  title: 'Libby',
  description: 'Generated by create next app',
}

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </head>
      <body className={`${styles.layout}`}>
        <Navbar />
        <div className="my-5">{children}</div>
        <Links />
      </body>
    </html>
  )
}

export default Layout

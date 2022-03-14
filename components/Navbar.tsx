import React from 'react'
import styles from './navbar.module.css'
import { ActiveLink } from './ActiveLink'

export const Navbar = () => {
  const menuItems = [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'About',
      href: '/about'
    },
    {
      text: 'Contact',
      href: '/contact'
    },
    {
      text: 'Pricing',
      href: '/pricing'
    }
  ]
  return (
    <nav className={styles.menuContainer}>
      {menuItems.map(m => <ActiveLink key={m.href} text={m.text} href={m.href} />)}

    </nav>
  )
}

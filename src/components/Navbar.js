import React, { useState } from 'react'
import { Link } from 'gatsby'
import { MdMenu } from 'react-icons/md'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import logo from '../images/bistro.svg'

import styles from '../sass/navbar.module.scss'

const Navbar = () => {
  const [isOpen, setNav] = useState()
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo" class={styles.logo} />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <MdMenu className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index} onClick={toggleNav}>
                <Link to={item.pathS}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

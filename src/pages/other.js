import React from 'react'
import * as menuStyles from '../styles/modules/menu.module.less'
import Navbar from './navbar'
import Menu from './menu'
import Footer from './footer'
import OtherRight from './otherRight'
import Dropdown from './dropdown'

function Print() {
  return (
    <div className={menuStyles.container}>
      <div className={menuStyles.leftContainer}>
        <Navbar />
        <Menu />
      </div>
      <div className={menuStyles.rightContainer}>
        <Dropdown />
        <OtherRight />
        <Footer />
      </div>
    </div>
  )
}

export default Print
export const Head = () => (
  <>
    <title>Other– Stephanie Zhu</title>{' '}
    <link
      rel="icon"
      href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"
    ></link>
  </>
)
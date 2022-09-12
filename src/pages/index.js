import * as React from "react"
import "../styles/styles.less"
import * as menuStyles from "../styles/modules/menu.module.less"
import Menu from "./menu"
import Right from "./homeRight"
import Navbar from "./navbar"

const IndexPage = () => {
  return (
    <main>
      <div className={menuStyles.container}>
        <div className={menuStyles.leftContainer}>
          <Navbar/>
          <Menu/>
        </div>
        <div className={menuStyles.rightContainer}>
          <Right/>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

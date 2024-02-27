import * as React from "react"
import "../styles/styles.less"
import * as menuStyles from "../styles/modules/menu.module.less"
import Menu from "./menu"
import Right from "./homeRight"
import Navbar from "./navbar"
import Footer from "./footer"
import Dropdown from "./dropdown"

const Home = () => {
    return (
      <main>
        <div className={menuStyles.container}>
          <div className={menuStyles.leftContainer}>
            <Navbar active="work"/>
            <Menu/>
          </div>
          <div className={menuStyles.rightContainer}>
            <Dropdown/>
            <Right/>
            <Footer/>
          </div>
        </div>
      </main>
    )
  }
  
  export default Home
  
  export const Head = () => <><title>Stephanie Zhu</title> <link rel="icon" href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"></link></>
import { Outlet } from "react-router-dom"
import Header from "../components/public/Header"

const layoutpublic = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default layoutpublic
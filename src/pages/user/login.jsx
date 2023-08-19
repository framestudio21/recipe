import Navbar from "../../component/navbar"
import Footer from "../../component/footer"
import Sign from "../../component/sign"

export default function login() {
  return (
    <>
    {/* <Navbar/> */}
    <Sign title="Log In" name={false} repass={false} reset={true} btn="Log In"/>
    {/* <Footer/> */}
    </>
  )
}
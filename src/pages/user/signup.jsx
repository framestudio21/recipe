import Navbar from "../../component/navbar"
import Footer from "../../component/footer"
import Sign from "../../component/sign"

export default function signup() {
  return (
    <>
      {/* <Navbar/> */}
      <Sign title="Join Us" name={true} repass={true} reset={false} btn="Join Now"/>
      {/* <Footer/> */}
    </>
  )
}
import dynamic from 'next/dynamic';
import Navbar from "../../component/navbar"
import Footer from "../../component/footer"
import Sign from "../../component/sign"

export default dynamic(() => Promise.resolve(Login), { ssr: false });
function Login() {
  return (
    <>
    {/* <Navbar/> */}
    <Sign title="Log In" name={false} repass={false} reset={true} btn="Log In"/>
    {/* <Footer/> */}
    </>
  )
}
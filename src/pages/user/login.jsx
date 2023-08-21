import dynamic from "next/dynamic";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Sign from "./components/sign";

export default dynamic(() => Promise.resolve(Login), { ssr: false });
function Login() {
  return (
    <>
      {/* <Navbar/> */}
      <Sign
        title="Log In"
        name={false}
        repass={false}
        reset={true}
        url="signup"
        urltext="Create account"
        btn="Log In"
      />
      <Footer/>
    </>
  );
}

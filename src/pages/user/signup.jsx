import dynamic from "next/dynamic";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Sign from "./components/sign";

export default dynamic(() => Promise.resolve(Signup), { ssr: false });
function Signup() {
  return (
    <>
      {/* <Navbar/> */}
      <Sign
        title="Join Us"
        name={true}
        repass={true}
        reset={false}
        url="login"
        urltext="Login here"
        btn="Join Now"
      />
      <Footer/>
    </>
  );
}

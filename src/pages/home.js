import dynamic from "next/dynamic";

import styles from "../styles/home.module.css"

import Navbar from "../component/navbar";
import Searchbox from "../component/searchbox";
import Bottomnavbar from "../component/bottomnavbar";
import Notificationbox from "../component/notificationbox";
import Sidenavbar from "../component/sidenavbar";
import Popsidenavbar from "../component/popsidenavbar";
import Blogcarousel from "../component/blogcarousel";
import Gallerycarousel from "../component/gallerycarousel";
import Footer from "../component/footer"

export default dynamic(() => Promise.resolve(Home), { ssr: false });
const Home = () => {
  return (
    <>
    <Navbar/>
    <Bottomnavbar/>
    {/* <Searchbox/> */}
    <Blogcarousel/>
    <Gallerycarousel/>
    <Footer/>
    </>
  )
}
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./home"

export default dynamic(() => Promise.resolve(Index), { ssr: false });
function Index() {
  return (
    <>
      <Head>
        <title>RECIPE DAIRY</title>
        <meta name="description" content="Generated & Created by Frame Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
    </>
  )
}

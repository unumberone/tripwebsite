import React from "react";
import "./app.css"
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Popular from "./Components/Popular/Popular";
import Offers from "./Components/Offers/Offers";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";


const App = () => {
    return(
        <>
        <Navbar></Navbar>
        <Home></Home>
       <Popular></Popular>
        {/*<Offers></Offers>
        <About></About>
        <Blog></Blog>
        <Footer></Footer>*/}
        </>
    )
}

export default App
import React from "react";
import { motion } from "framer-motion";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Popular from "./Components/Popular/Popular";
import Offers from "./Components/Offers/Offers";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <>
            <Navbar />

            {/* Apply motion.div to animate each section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }} // Start animation with opacity 0 and move up 20px
                animate={{ opacity: 1, y: 0 }}  // End animation with opacity 1 and original position
                transition={{ duration: 0.8 }}  // Animation duration 0.8 seconds
            >
                <Home />
                <Popular />
                <Offers />
                <About />
                <Blog />
                <Footer />
            </motion.div>
        </>
    );
};

export default App;
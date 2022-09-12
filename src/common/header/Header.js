import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";
import React from "react"

function Header({cartItem}) {
    return ( 
        <>
            <Head />
            <Search cartItem={cartItem} />
            <Navbar />
        </>
     );
}

export default Header;
import logo from "../../components/assets/images/logo.png"
import './Search.css';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import React from "react";
import AuthContext from "../../Store/auth-context";

function Search({ cartItem}, props) {

    //function
    window.addEventListener('scroll', function () {
        const search = document.querySelector('.search');
        search.classList.toggle('active', window.scrollY > 100);
    });

    //context
    const ctx = React.useContext(AuthContext);

    return ( 
        <>
            <section className='search'>
                <div className='container c_flex'>
                    <div className='logo width'>
                        {/* logo */}
                       <a href='/'> <img  src={logo} alt='logo'/></a>
                    </div>

                    <div className='search-box f_flex'>
                        <i className='fa fa-search'></i>
                        <input type='text' placeholder='Search hear...' />

                        {/* icon clear */}
                        {/* <button className='btn-clear'>
                        <i class="fa-solid fa-circle-xmark"></i>
                        </button> */}

                        {/* icon loading */}
                        {/* <button className='btn-loading'>
                        <i class="fa-solid fa-spinner"></i>
                        </button> */}

                        <span>All Categories</span>
                    </div>  

                    <div className='icon f_flex width'>
                        {/* <i className='fa fa-user icon-circle'></i> */}

                        {/* if value = true thì value đằng sau thực thi còn bằng false value đằng sau k thực thi */}                        

                        <Button color='secondary' onClick={ctx.onLogout}>Logout</Button>

                        <div className='cart'>
                            {/* function cart */}
                            <Link to='/cart'>
                                <i className='fa fa-shopping-bag icon-circle'></i>
                                {/* data */}
                                <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            </>
     );
}

export default Search;
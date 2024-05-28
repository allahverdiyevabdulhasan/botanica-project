import React, { useState } from 'react';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import logo from '../assets/images/logo.png';
import { AiOutlineUser } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { FaBasketShopping } from "react-icons/fa6";
import { TfiClose } from "react-icons/tfi";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { GoChevronRight } from "react-icons/go";
import { FaFacebookF, FaTiktok, FaTwitter, FaInstagram } from "react-icons/fa";
import { Button, Modal } from 'antd';


const Header = () => {
    

    const location = useLocation();
    if (
        location.pathname !== "/404" &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/reset_password"
    ) {

        return (
            <>
                <header className="xl_header d-none d-xl-block d-xxl-block d-lg-block">
                    <nav className='container'>
                        <div className='px-3 d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center gap-4'>
                                <HiOutlineMenuAlt1 data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" className='menu' />

                                <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                    <div className="offcanvas-header d-flex justify-content-end">
                                        <TfiClose data-bs-dismiss="offcanvas" className='close_btn' aria-label="Close" />
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className='d-block'>

                                            <NavLink
                                                to="/"
                                                className='nav-link d-block d-flex justify-content-between align-items-center'
                                                activeclassname="active"
                                            >Home
                                                <GoChevronRight />
                                            </NavLink>

                                            <NavLink to="/about" className='nav-link d-flex justify-content-between align-items-center'>About
                                                <GoChevronRight />
                                            </NavLink>

                                            <NavLink to="/shop" className='nav-link d-flex justify-content-between align-items-center'>Shop
                                                <GoChevronRight />
                                            </NavLink>
                                            <NavLink to="/blog" className='nav-link d-flex justify-content-between align-items-center'>Blog
                                                <GoChevronRight />
                                            </NavLink>

                                            <NavLink to="/pages" className='nav-link d-flex justify-content-between align-items-center'>Pages
                                                <GoChevronRight />
                                            </NavLink>
                                            <NavLink to="/contact" className='nav-link d-flex justify-content-between align-items-center'>Contact
                                                <GoChevronRight />
                                            </NavLink>
                                        </ul>
                                    </div>



                                    <div className='nav_footer p-4'>
                                        <div>
                                            <p><span>Email:</span> +0123-456-789</p>
                                        </div>
                                        <div className='pt-2'>
                                            <p><span>Call Us:</span> example@domain.com</p>
                                        </div>

                                        <div className='d-flex  gap-3 pt-3'>
                                            <div className='icons'>
                                                <FaFacebookF />
                                            </div>
                                            <div className='icons'>
                                                <FaTwitter />
                                            </div>
                                            <div className='icons'>
                                                <FaInstagram />
                                            </div>
                                            <div className='icons'>
                                                <FaTiktok />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className='nav-search d-flex align-items-center gap-2'>
                                    <FiSearch className='search' />
                                    <input type="text" placeholder='Enter Your Keyword' />
                                </div>
                            </div>
                            <div className='logo'>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className='nav-right' >
                                {/* data-bs-toggle="modal" data-bs-target="#exampleModal" */}
                                <Link to='/login' className='icon '>
                                    <AiOutlineUser className='' />
                                </Link>

                       
                              
                              


                                <div className='icon position-relative'>
                                    <GoHeart />
                                    <span className='position-absolute top-0 translate-middle badge rounded-pill'>0</span>
                                </div>

                                <div className='icon position-relative' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    <FaBasketShopping />
                                    <span className='position-absolute top-0 translate-middle badge rounded-pill'>0</span>

                                </div>
                                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                    <div className="offcanvas-header">
                                        <h6 className="offcanvas-title" id="offcanvasRightLabel">SHOPPİNG CART</h6>

                                    </div>
                                    <div className="offcanvas-body">
                                        ...
                                    </div>
                                </div>

                            </div>
                        </div>
                    </nav>
                </header>

                <header className='sm_header d-xl-none d-xxl-none d-lg-none'>
                    <nav className="container">
                        <div className='d-flex justify-content-between align-items-center py-3'>
                            <div className='d-flex align-items-center gap-3'>
                                <HiOutlineMenuAlt1 data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" className='res_menu' />
                                <FiSearch />

                            </div>

                            <div className='logo'>
                                <img src={logo} alt="" />
                            </div>

                            <div className='nav-right'>
                                <div className='icon '>
                                    <AiOutlineUser className='' />
                                </div>

                                <div className='icon position-relative'>
                                    <GoHeart />
                                    <span className='position-absolute top-0 translate-middle badge rounded-pill'>0</span>
                                </div>

                                <div className='icon position-relative'>
                                    <FaBasketShopping />
                                    <span className='position-absolute top-0 translate-middle badge rounded-pill'>0</span>
                                </div>

                            </div>

                            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div className="offcanvas-header d-flex justify-content-end">
                                    <TfiClose data-bs-dismiss="offcanvas" aria-label="Close" className='close_btn' />

                                </div>
                                <div className="offcanvas-body">
                                    <ul className='d-block'>

                                        <NavLink
                                            to="/"
                                            className='nav-link d-block d-flex justify-content-between align-items-center'
                                            activeclassname="active"
                                        >Home
                                            <GoChevronRight />
                                        </NavLink>

                                        <NavLink to="/about" className='nav-link d-flex justify-content-between align-items-center'>About
                                            <GoChevronRight />
                                        </NavLink>

                                        <NavLink to="/shop" className='nav-link d-flex justify-content-between align-items-center'>Shop
                                            <GoChevronRight />
                                        </NavLink>

                                        <NavLink to="/blog" className='nav-link d-flex justify-content-between align-items-center'>Blog
                                            <GoChevronRight />
                                        </NavLink>

                                        <NavLink to="/pages" className='nav-link d-flex justify-content-between align-items-center'>Pages
                                            <GoChevronRight />
                                        </NavLink>
                                        <NavLink to="/contact" className='nav-link d-flex justify-content-between align-items-center'>Contact
                                            <GoChevronRight />
                                        </NavLink>
                                    </ul>

                                </div>

                                <div className='nav_footer p-4'>
                                    <div>
                                        <p><span>Email:</span> +0123-456-789</p>
                                    </div>
                                    <div className='pt-2'>
                                        <p><span>Call Us:</span> example@domain.com</p>
                                    </div>

                                    <div className='d-flex  gap-3 pt-3'>
                                        <div className='icons'>
                                            <FaFacebookF />
                                        </div>
                                        <div className='icons'>
                                            <FaTwitter />
                                        </div>
                                        <div className='icons'>
                                            <FaInstagram />
                                        </div>
                                        <div className='icons'>
                                            <FaTiktok />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        )
    } else {
        return null;
    }
}

export default Header
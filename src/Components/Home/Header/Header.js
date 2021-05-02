import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const cpName = {
        fontWeight : "700",
        color: "darkGreen",
        marginTop: "20px",
        textShadow: "2px 2px 5px lightGray"
    }
    return (

        <section class="background-color">
            <nav class="navbar navbar-expand-lg navbar-light sticky-sm-top ml-end">
                <div class="container mt-4">
                    <a class="navbar-brand" href="#"><h1 style={cpName} className="cp-name">Naimur Rahman</h1>
                        <img class="logo border" src="logo/logo.jpg" alt="" />
                    </a>
                    <button class="navbar-toggler mt-4 border" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse margin ms-5" id="navbarNav">
                        <ul class="navbar-nav m-auto fw-bold">
                            <li class="nav-item">
                                {/* <a class="nav-link" aria-current="page" href="/home">Home</a> */}
                                <Link class="nav-link" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="/orders">Orders</a> */}
                                <Link class="nav-link" to="/Blog">Blog</Link>
                            </li><li class="nav-item">
                                {/* <a class="nav-link" href="/orders">Orders</a> */}
                                <Link class="nav-link" to="/about">About Me</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="/deals">Deals</a> */}
                                <Link class="nav-link " to="/project">Projects</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="/deals">Deals</a> */}
                                <Link class="nav-link " to="/resume">Resume</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Header;
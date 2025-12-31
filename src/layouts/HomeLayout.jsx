import React from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const HomeLayout = () => {

    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;
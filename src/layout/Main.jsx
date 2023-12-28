
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Share/Footer';
import Header from '../Component/Share/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;
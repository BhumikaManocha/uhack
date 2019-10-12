import React from 'react';
import Navbar from '../Navbar';
import './header.css';


const Header = (props)=>{
    return(
        <>
        <Navbar/>
        <div className="container-fluid ">
            <div className="row justify-content-center align-items-center max-height">
            <div className="col-6 text-center">
                <h1 className="text-white mb-0">Welcome to out housing app</h1>
            </div>
            <div className="col-4">
                <div className="card">
                    
                </div>
            </div>
            </div>
            
        </div>
        </>

    )
}

export default Header;
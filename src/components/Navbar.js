import React from 'react';
import logo from '../assets/images/nova logo2.png'; 
import regislogo from '../assets/images/Regis Logo14white.png'
import countrylogo from '../assets/images/logo.svg';
import imagescam from '../assets/images/imagescam.png';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar = () => {
  return (
    <>
        <div className="sticky-top nav-sticky">
            <nav className="navbar navbar-expand-lg py-3 shadow-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-lg-5" to="/"><img src={regislogo} width={60} alt="" className='imglogo'/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* Features */}
                            <li className="nav-item dropdown px-1">
                                <p className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false"> <b>Features</b></p>
                                <ul className="dropdown-menu border-0 shadow-sm">
                                    <li className='py-1'><Link to="/card" className="dropdown-item"><i className='material-icons' style={{transform:"translateY(7px)"}} width={25}>credit_card</i>&nbsp;&nbsp;&nbsp;Credit Card</Link></li>
                                    <li className='py-1'><Link to="/spend" className="dropdown-item"><i className='material-icons' style={{transform:"translateY(7px)"}} width={25}>payments</i>&nbsp;&nbsp;&nbsp;Spend</Link></li>
                                    <li className='py-1'><Link to="/save" className="dropdown-item"><i className='material-icons' style={{transform:"translateY(7px)"}} width={25}>savings</i>&nbsp;&nbsp;&nbsp;Save</Link></li>
                                    <li className='py-1'><Link to="/budget" className="dropdown-item"><i className='material-icons' style={{transform:"translateY(7px)"}} width={25}>add_card</i>&nbsp;&nbsp;&nbsp;Budget</Link></li>
                                    <li className='py-1'><Link to="/borrow" className="dropdown-item"><i className='material-icons' style={{transform:"translateY(7px)"}} width={25}>attach_money</i>&nbsp;&nbsp;&nbsp;Borrow</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                            <Link className="nav-link" to="/*">Business&nbsp;<Link to='/*' className='border rounded text-decoration-none shadow-sm'><span className='Beta'>Beta</span></Link></Link>
                            </li>
                            
                            {/* Company */}
                            <li className="nav-item dropdown px-1">
                                <p className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" ><b>Company</b></p>
                                <ul className="dropdown-menu border-0 shadow-sm">
                                    <li className='py-1'><Link to="/*" className="dropdown-item">Blog</Link></li>
                                    <li className='py-1'><Link to="/*" className="dropdown-item">Press</Link></li>
                                    <li className='py-1'><Link to="/*" className="dropdown-item">Join our team</Link></li>
                                    <li className='py-1'><Link to="/*" className="dropdown-item">About us</Link></li>
                                </ul>
                            </li>

                            {/* Get Help */}
                            <li className="nav-item dropdown px-1">
                                <p className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" ><b>Help</b></p>
                                <ul className="dropdown-menu border-0 shadow-sm">
                                    <li className='py-1'><Link to="/*" className="dropdown-item">Get Help</Link></li>
                                    <li className='py-1'><Link to="/*" className="dropdown-item">FAQs</Link></li>
                                    <li className='py-1'><Link to="/*" className="dropdown-item">Security</Link></li>
                                    <li className='py-1'><Link to="/*" className="dropdown-item">Contact us</Link></li>
                                </ul>
                            </li>
                        </ul>

                        <ul className='navbar-nav' id='navbar-nav2'>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light rounded px-4" to="/signup" id='getKuda'>Get Regis</Link>
                            </li>
                            <li className="nav-item dropdown" id='imagescammer'>
                                <Link className="nav-link " to=""><img src={countrylogo} alt="" /></Link>
                                <ul className='dropdown-menu border-0 rounded'>
                                    <li id='imagescam'><Link to="" className="dropdown-item"><img src={imagescam} alt="" /></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar
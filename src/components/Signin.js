import React, { useState } from 'react';
import Navbar from './Navbar';
import signinimage2 from '../assets/images/Mobile login.gif';
import signinimage from '../assets/images/login3.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios" ;
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import * as yup from 'yup'

const Signin = () => {
    let url = "https://bankappserver.onrender.com/user/signin"
    //let url = "http://localhost:7001/user/signin" https://node-bankappserver.onrender.com
    let resetURL= "https://bankappserver.onrender.com/user/resetpassword"
    let mailURL = "https://bankappserver.onrender.com/user/resetpassword"
    
    const Navigate = useNavigate();
    const [email, setemail] = useState("");
    const [accountnumber, setaccountnumber] = useState("");
    const[phonenumber, setphonenumber] = useState("")
    const[name, setname] = useState("")
    const [password, setpassword] = useState("");
    const [resetaccountnumber, setresetaccounnumber] = useState("")
    const [resetemail, setresetemail] = useState("")

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let novaStyle = {textDecoration:"underline", textDecorationColor:"#192943", textDecorationStyle: "double"}
    //let lower = new RegExp(`(?=.*[a-z])`); let upper = new RegExp(`(?=.*[A-Z])`); let number = new RegExp(`(?=.*[0-9])`); let length = new RegExp(`(?=.{8,})`);

    const signin = () =>{ 
        axios.post (url,{email, password})
        .then((response)=>{
        if(!response.data.status){alert(response.data.message); console.log(response)}
        else{   console.log(response);
                localStorage.token = response.data.token; //localStorage.currentemail = email
                
                setemail(response.data.user.email); setname(response.data.user.name); setphonenumber(response.data.user.phonenumber); setaccountnumber(response.data.user.accountnumber)
                //let name = response.data.user.name; let currentemail = response.data.user.email; let accountnumber = response.data.user.accountnumber; let phonenumber = response.data.user.accountnumber
                console.log(name, email, accountnumber, phonenumber);     
                Navigate("/dashboard") 
            }
        })
    }

    const resetpassword = ()=>{ console.log(resetemail, resetaccountnumber);
        axios.post(resetURL,{resetemail, resetaccountnumber})
        .then((response)=>{
            if(!response.data.status){alert(response.data.message) }
            else{alert(response.data.message)}
    })
    }
    const mail = ()=>{
        
    }

  return (
    <>
    <Navbar/>
    <div className='container-fluid mt-5 mt-lg-0'>
        <div className="row mx-auto mt-5 mt-lg-0">
            <div className="col-12 mt-5 col-lg-4 px-lg-5">
                <div className="border mt-0 p-3 shadow-sm rounded mt-lg-3">
                    Please, check your browser’s address bar to be sure you’re on <span style={{color:"#4DC5DA"}} className="fw-bold">https://app.regisbank.com</span>
                </div>

                <div className="border rounded mt-5 p-3 shadow-sm mb-3">
                    <h4>Sign in to your <span style={novaStyle}>Regis</span> account now</h4>
                    <p>To sign in, please type in your registered email address</p>
                    <p>
                        <b className="text-danger">{Error}</b>
                    </p>

                    {/* <form action="" onSubmit={formik.handleSubmit}> */}
                        <label htmlFor="email address" className='fw-bold' style={{color:"#4DC5DA"}} >Email Address:</label>
                        <input 
                            type="email" className='form form-control'
                            //className= {formik.errors.email ? "form-control my-2 is-invalid" : "form-control my-2"}
                            placeholder='example@gmail.com'
                            name='email'
                            onChange= {(e)=>setemail(e.target.value)}/>

                        <label htmlFor="password" className='fw-bold' style={{color:"#4DC5DA"}} >Password:</label>
                        <input 
                            type="password" className='form form-control'
                            //className= {formik.errors.password ? "form-control my-2 is-invalid" : "form-control my-2"}
                            placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                            name='password'
                            onChange= {(e)=>setpassword(e.target.value)}/>

                    <p>Forgot password? <button onClick={handleShow} style={{color:"#4DC5DA", border:"none", backgroundColor:"white", textDecoration:"underline"}}>Reset it</button></p>
                    <p>New to <span style={novaStyle}>Regis</span>, Sign up <Link to='/signup' className='fw-bold' style={{color:"#4DC5DA"}}>here</Link></p>
                    <button type='submit' onClick={signin} className="btn my-2 p-2 text-light w-100" style={{backgroundColor:"#192943"}}>Sign in</button>
                    {/* </form> */}

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Reset Password</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <input type="Number" placeholder='Enter Account Number' className='form form-control' onChange={(e)=>setresetaccounnumber(e.target.value)} />
                            <input type="email" className='form form-control' placeholder='example@gmail.com' name='email' onChange={(e)=>setresetemail(e.target.value)} />
                        </Modal.Body>
                        
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}> Close</Button>
                            <Button variant="primary" onClick={resetpassword}> Reset Password </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <div className="col-lg-5 mx-auto">
            <img src={signinimage} width={600} alt="" className="img-fluid img-responsive" id='signupimage' style={{marginTop:"15%",}}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signin
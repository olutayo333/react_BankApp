import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import signupimage from '../assets/images/Mobile login-pana.svg';
import signupimage2 from '../assets/images/signup2.png'
import '../assets/css/Signup.css'
import axios from 'axios'

const Signup = () => { let red = "2px solid red"
    const Navigate = useNavigate();
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState ("")
    const [phonenumber, setphonenumber] = useState("")
    const[accountnumber, setaccountnumber] = useState("")
    const [validname, setvalidname] = useState(true);
    const [validemail, setvalidemail] = useState(true);
    const [validpassword, setvalidpassword] = useState(true)
    const [validphonenumber, setvalidphonenumber] = useState(true)

    let url = "https://bankappserver.onrender.com/user/signup"
    let novaStyle = {textDecoration:"underline", textDecorationColor:"#192943", textDecorationStyle: "overline"}
    const borderline ={border:"2px solid red"}


    const handleEmailChange =(e)=>
       {    const emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            const enteredEmail = e.target.value; 
            setemail(enteredEmail); 
            setvalidemail(emailRegex.test(enteredEmail));
       }
       const handlenameChange =(e)=>
       {    const nameRegEx = /^([a-zA-Z]{3,15})+([\s][a-zA-Z]{3,15})+$/  
            const enteredname = e.target.value; 
            setname(enteredname); 
            setvalidname(nameRegEx.test(enteredname));
       }
       const handlePasswordChange =(e)=>
       {    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            const enteredpassword = e.target.value; 
            setpassword(enteredpassword); 
            setvalidpassword(passwordRegExp.test(enteredpassword));
       }
    //    const handlePhonenumberChange =(e)=>
    //    {    const phoneRegEx =   
    //         const enteredphonenumber = e.target.value; 
    //         setphonenumber(enteredphonenumber); 
    //         setvalidphonenumber(phoneRegEx.test(enteredphonenumber));
    //    }


   useEffect(()=>{  setaccountnumber( Math.floor((Math.random()*100000000000)+1)); }, [])

    const signup = () => {
        axios.post(url, {name, email, password, accountnumber, phonenumber, balance:0})
        .then((response)=>{console.log(response)
        if (response.data.status)
        {alert("HURRAY SignUp Successful"); Navigate("/signin"); console.log(response.data.message);  }
        else{alert(response.data.message)}
        // else if (!response.data.status) {alert(response.data.message); setresponsemessage("SigUp Failed" + "/n" + response.data.message); setstatus(false); setresponsemessage(response.data.message); console.log(response.data.message); }
        })
        }

  return (
    <>
    <Navbar/>
    <div className='container-fluid mt-5 mt-lg-0'>
        <div className="row mx-auto mt-5 mt-lg-0">
            <div className="col-12 col-lg-4 px-lg-5 mt-5">
                <div className="border p-3 shadow-sm rounded mt-lg-3">
                    Please, check your browser’s address bar to be sure you’re on <span style={{color:"#4DC5DA"}} className="fw-bold">https://app.regisbank.com</span>
                </div>

                <div className="border rounded mt-4 p-3 shadow-sm mb-3">
                    <h4>Get a <span style={novaStyle}>Regis</span> account now</h4>
                    <p>To sign up, please type in a valid email address</p>

                    {/* <form  > */}               
                        <label htmlFor="full name" className='fw-bold' style={{color:"#4DC5DA"}} >Full Name:</label>
                        <input type="text" className='form form-control' id='nameID' value={name} onChange={handlenameChange} placeholder='firstname&nbsp;&nbsp;lastname' name='fullname'/>
                        {validname? null : <p><small className='text-danger'>Please enter a valid name</small></p> }
                        
                        <label htmlFor="phone number" className='fw-bold mt-1' style={{color:"#4DC5DA"}} >Phone Number:</label>
                        <input type="number" className='form form-control' placeholder='enter phone number' onChange={(e)=>setphonenumber(e.target.value)} name='phone' />
                        {/* {validphonenumber? null : <p><small className='text-danger'>Please enter a valid phonenumber</small></p>} */}
                        
                        <label htmlFor="email address"  className='fw-bold mt-1' style={{color:"#4DC5DA"}} >Email Address:</label>
                        <input type="email" id='emailID' className='form form-control' placeholder='example@gmail.com' name='email' value={email} onChange={handleEmailChange} />
                        {validemail? null : <p><small className='text-danger'>Please enter a valid email address</small></p>}
                        

                        <label htmlFor="password" className='fw-bold mt-1 ' style={{color:"#4DC5DA"}} >Password:</label>
                        <input type="password" id='passwordID' className='form form-control mb-2' onChange={handlePasswordChange} placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' name='password'/>
                        {validpassword? null : <p><small className='text-danger'>Enter a strong password</small></p>}
                        
                    {/* <p>Forgot password? <span style={{color:"#4DC5DA"}}><b>Reset it</b></span></p> */}
                    <p>Already have an account? Sign in <Link to='/signin' className='fw-bold' style={{color:"#4DC5DA"}}>here</Link></p>
                    <button onClick={signup} disabled={!validname || !validemail || !validpassword || !email || !name || !password || !phonenumber} type='submit' id='submit' className="btn my-2 p-2 text-light w-100" style={{backgroundColor:"#192943"}}>Create Account</button>
                    
                    {/* </form> */}
                </div>
            </div>
            <div className="col-lg-5 mx-auto">
                <img src={signupimage2} width={600} alt="" className="img-fluid img-responsive" id='signupimage'/>
            </div>
        </div>
    </div>
    </>
  )

}

export default Signup
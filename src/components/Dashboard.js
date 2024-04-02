import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
 import { increament, incrementByNumber } from '../redux/counterSlice';
 import { useState } from 'react';
 import axios from 'axios'; import Navbar from './Navbar';
 import Button from 'react-bootstrap/Button';
 import Offcanvas from 'react-bootstrap/Offcanvas'; 
 import Modal from 'react-bootstrap/Modal';

 
 const Dashboard = () => {
    const Navigate = useNavigate();
    const [email, setemail] = useState("");
    const [accountnumber, setaccountnumber] = useState("");
    const[phonenumber, setphonenumber] = useState("")
    const[name, setname] = useState(""); 
    const[balance, setbalance] = useState("")
    const [depositamount, setdepositamount] = useState("")
    const[withdrawamount, setwithdrawamount] = useState("")
    const [izloading, setizloading] = useState()
    const [newpassword, setnewpassword] = useState("")
    const [oldpassword, setoldpassword] = useState("")
    const [history, sethistory] = useState([])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [showmodal, setShowmodal] = useState(false);
    const handleClosemodal = () => setShowmodal(false);
    const handleShowmodal = () => setShowmodal(true);

    let url = "https://bankappserver.onrender.com/user/dashboard"
    //let url = "http://localhost:7001/user/dashboard"
    let depositurl = "https://bankappserver.onrender.com/user/deposit"
    let withdrawURL = "https://bankappserver.onrender.com/user/withdraw"
    let resetpasswordURL = "https://bankappserver.onrender.com/user/accountresetpassword"
    let token = localStorage.token;
    //http://localhost:7001
    
    //REDUX 
    let dispatch = useDispatch()  //calling functions
    let reduxname = useSelector((state)=>state.counterReducer.name)
    let count = useSelector((state)=>state.counterReducer.count)
    console.log(reduxname);

    useEffect(()=>{
        axios.get(url,{ headers: { "Authorization": `Bearer ${token}`,  "Content-Type": "application/json", "Accept": "application/json" } })
        .then((response)=>{
            if(!response.data.status){Navigate("/signin")}
            else if (response.data.status){
                console.log(response);
                setemail(response.data.user.email); setname(response.data.user.name); 
                setphonenumber(response.data.user.phonenumber); setbalance(response.data.user.balance)
                setaccountnumber(response.data.user.accountnumber); 
                //setusers([...users, response.data.message])
                //sethistory([...history, response.data.user.history]); console.log(history);
            }
        })
    }, [])

    const signout = ()=>{ Navigate("/signin"); localStorage.token=""; }
    const deposit = ()=>{
             alert('Are you sure want to make the deposit of' + " " + "#" + depositamount) 
            {    
                let intermediatbalance = Number(balance) + Number(depositamount)
                //history.push(depositamount); console.log(history);
                let depositdate = new Date().toLocaleString();
                //name, email, password, accountnumber, phonenumber, balance:0
                axios.post(depositurl, {name, email, accountnumber, phonenumber, intermediatbalance})
                .then((response)=>{console.log(response)
                  if (response.data.status)
                  {alert("#" + depositamount + " " + 'Deposit Successful'); setbalance(intermediatbalance); console.log(response.data.message);  }
                  else{alert(response.data.message)}
                })
                
            //     let history = [];  history.length=0; let d = new Date().toLocaleString(); let name = users[index].name; 
            //     let hisObj = { amount, d, name } 
               
            //     let oldHistory = JSON.parse(localStorage.getItem('history'))
            //     if (localStorage.getItem('history')){history = oldHistory}

            //     history.unshift(hisObj); 
            //     localStorage.setItem('history', JSON.stringify(history))
            //     console.log(history)

            //     oldusers = JSON.parse(localStorage.getItem("users"));
            // if (oldusers){users = oldusers}
            }
    }

    const withdraw = ()=>{
      alert("Are You sure you want to Withdraw " + " "+"#"+withdrawamount)
      {
        let intermediatbalance = Number(balance) - Number(withdrawamount)
        axios.post(withdrawURL, {name, email, accountnumber, phonenumber, intermediatbalance})
        .then((res)=>{console.log(res);
        if (res.data.status) {
          alert("#" + withdrawamount + " " + "Withdrawn Sucessfully"); setbalance(intermediatbalance); console.log(res.data.message);}
          else{alert(res.data.message)}
        })
      }    
  }

  const resetpassword = ()=>{
    axios.post(resetpasswordURL, {oldpassword, newpassword, balance, name, resetemail:email})
    .then((res)=>{console.log(res);
    if(res.data.status){alert(res.data.message)}
    else{alert(res.data.message)}
    })
  }

  return ( 
    <div className='container-fluid' >
      <div className='mb-5 pb-5' > <Navbar/> </div> <hr />
        <div className='mt-5 md-5 shadow-lg ps-2 rounded' style={{backgroundColor:"#192943", color:"white", marginTop:"50vh"}}> 
          <h5 className='mt-4' style={{marginTop:"20%"}}> {name} </h5>
          <p> <h1>NGN {balance}</h1> </p>
          <p style={{marginBottom:"1%"}}> <small > Savings Account: <b>{accountnumber}</b></small> </p> <br />
        </div>
        
            <div className='row my-5 mx-5'>
              <div className='col-6'><button onClick={handleShow} className=' btn btn-lg btn-info text-white type="button" ' > Deposit</button> </div> 
              <div className='col-6'><button onClick={handleShow2} className=' btn btn-info btn-lg text-white type="button"' > Withdraw </button></div>
            </div> <hr />
        
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Make Deposit</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <input type="number" placeholder="Enter the amount you want to deposit" onChange={(e)=>setdepositamount(e.target.value)} class="form-control" /> 
                <button onClick={deposit} class="btn btn-info mt-3"> Confirm Deposit</button>
            </Offcanvas.Body>
        </Offcanvas>

        <Offcanvas show={show2} onHide={handleClose2}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Make Withdrawer</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <input type="number" onChange={(e)=>setwithdrawamount(e.target.value)} placeholder='Enter Withdrawer Amount' class="form-control" /> 
                <button onClick={withdraw} class="btn btn-info mt-3"> Confirm Withdrawer</button>
            </Offcanvas.Body>
        </Offcanvas>

        {/* <button onClick={()=>dispatch(increament())}>increament</button>
        <button onClick={()=>dispatch(incrementByNumber(10))}>Increament by payload</button> */}

        <button className='col-12 mt-5 btn btn-sm btn-secondary' onClick={handleShowmodal}> Reset Password </button>

        <Modal show={showmodal} onHide={handleClosemodal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Reset Password</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <input type="text" className='form form-control' placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' name='password' onChange={(e)=>setoldpassword(e.target.value)} />
                            <input type="text" className='form form-control' placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' name='password' onChange={(e)=>setnewpassword(e.target.value)} />
                        </Modal.Body>
                        
                        <Modal.Footer>
                            <Button  onClick={handleClosemodal}> Close</Button>
                            <Button  onClick={resetpassword}> Reset Password </Button>
                        </Modal.Footer>
          </Modal>

       <button className='btn btn-lg btn-outline-danger mx-auto align-center mt-5 col-12' onClick={signout}>Sign Out</button>
    </div>
  )
}

export default Dashboard

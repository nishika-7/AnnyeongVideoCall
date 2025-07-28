import React from 'react';
import "../App.css";
import { Link , useNavigate } from 'react-router-dom'


export default function LandingPage() {


const router = useNavigate();

 return (
    <div className='landingPagecontainer'>
      
       <nav>
        <div className = "navHeader"> 
          <h1>ANNYEONG</h1>
        </div>
        <div  className = "navList">
          {/* <p onClick ={()=>{router("")}}>Join as Guest</p> */}
          <p onClick={() => {router("/auth")}}>Register</p>
          <div onClick={() =>{
            router("/auth")
          }} role = "button"> <p>login</p>
          </div>
        </div>
      </nav>

      <div className="Maincontainer">
        <div>
          <h1> Connect with your loved Ones</h1>
          <p> Forget distance || Its more than just a call || Its an Experience</p>
        
        <div role = "button"> 
          { < Link to = {"/auth"}> Get Started!!</Link>  }
          </div>

        <div role = "button">
            {<Link to={"/home"}> Join As Guest</Link>}
        </div>
          </div>
        <div>
          <img src = "../public/mobile.png" style = {{position:"absolute" , bottom:"20px" , right:"20px" , width:"250px" ,height :"auto"  }}></img>
        </div>
        </div>
         
    </div>
 

)
}

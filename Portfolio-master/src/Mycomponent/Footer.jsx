import React from 'react'
import { AiFillLinkedin, AiFillFacebook, AiFillGithub, AiFillInstagram } from "react-icons/ai";


const Footer = () => {
    return (
       
        <div className='container-fluid bg-secondary  justify-content-center'>
            <div className='d-flex justify-content-center  '>
                <a href=" https://www.linkedin.com/in/laxman-pache-9a99601a0" style={{fontSize:"30px" , margin: "10px 10px" , color:"black" }}><AiFillLinkedin /></a>
                <a href='https://github.com/laxmanpache'  style={{ fontSize:"30px" , margin: "10px 10px"  , color:"black"}}><AiFillGithub /></a>
                <a href='https://www.instagram.com/laxman_pache/' style={{fontSize:"30px" , margin: "10px 10px"  , color:"black" }}><AiFillInstagram></AiFillInstagram></a>
             
            </div>
        </div>
    
    )
}

export default Footer
import React from 'react'
import chat from '../imge/realtimechatapp.png'
import Flipcart from '../imge/Flipcart.png'
import Covid from "../imge/Covid.png"
import CurdOp from '../imge/CurdOp.png'
import blog from '../imge/blog.PNG'
import './Project.css'


const Project = () => {
    return (

        <div className='container mt-2 pt-5 mb-5 '   >
            <h2 className='text-center Heading mb-5'>Recent Projects</h2>
            <div className="row "> 
                <div className=" col-lg-6 col-md-6 col-sm-12  card1 mb-3">
                    <div className="card " style={{ width: "100%" }}>
                        <img src={Flipcart} className="card-img-top" alt="..." width="100%" />
                        <div className="card-body">
                            <h4 className="card-text">Flipkart Clone</h4>
                            <p>Technology : React js , React-Redux , React-Routing, Redux,  NodeJs , MongoDB ,Mongoose HTML ,CSS , Bootstrap , JavaScript</p>
                            <a href='https://laxmanecommerceflipkart.herokuapp.com/'>Click here to open Project</a>
                        </div>
                    </div>

                </div>
                <div className=" col-lg-6 col-md-6 col-sm-12 card1  mb-3">
                    <div className="card " style={{ width: "100%" }}>
                        <img src={CurdOp} className="card-img-top" alt="..." width="100%" />
                        <div className="card-body">
                            <h4 className="card-text">Claim Management Sys.</h4>
                            <p >Technology : React js, Ant Design, NodeJs , MongoDB  , HTML ,CSS  , JavaScript</p>
                            <a href='https://laxmanclaim.herokuapp.com/'>Click here to open Project</a>
                        </div>
                    </div>

                </div>
                <div className=" col-lg-6 col-md-6 col-sm-12 card1 mb-3 ">
                    <div className="card " style={{ width: "100%" }}>
                        <img src={Covid} className="card-img-top" alt="..." width="100%" />
                        <div className="card-body">
                            <h4 className="card-text">Covid-19-Tracker</h4>
                            <p>Technology : React js , axios,HTML, CSS</p>
                            <a href='https://laxmancovid-19tracker.herokuapp.com/'>Click here to open Project</a>
                        </div>
                    </div>
                

                </div>    
                <div className=" col-lg-6 col-md-6 col-sm-12 card1 mb-3 ">
                    <div className="card " style={{ width: "100%" }}>
                        <img src={blog} className="card-img-top" alt="..." width="100%" />
                        <div className="card-body">
                            <h4 className="card-text">Nloger</h4>
                            <p>Technology : next js , firebase,HTML, CSS</p>
                            <a href='https://nextblog-bay-beta.vercel.app/'>Click here to open Project</a>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Project
import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="container mt-4  pt-2 mb-5 ">
      <div className="about_section mx-auto ">
        <div className="row ">
          {/* personal detail */}
          <div className="col-md-12 col-lg-7 col-sm-12 mb-3">
            <div className="card">
              <div className="card-body main_detail">
                <h3 className="Personal_Heading">Personal Detail &#8669;</h3>
                <p>
                  <strong>Name</strong>&nbsp;:&nbsp;Laxman Pache
                </p>
                <p>
                  <strong>Address</strong>&nbsp;:&nbsp;Balewadi, pune.{" "}
                </p>
                <p>
                  <strong>Education</strong>&nbsp;:&nbsp;B.E (computer
                  Engineering)
                </p>
                <p>
                  <strong>Email</strong>&nbsp;:&nbsp;pachelaxman22@gmail.com
                </p>
                <p>
                  <strong>Mobile No</strong>&nbsp;:&nbsp; 9075873087
                </p>
              </div>
            </div>
          </div>
          {/* prpject experiance */}
          <div className="col-md-12 col-lg-5 col-sm-12 text-center ">
            <div className="conatiner-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6   ">
                  <div className="card ">
                    <div className=" box1">
                      <Link
                        to="/project"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <h3 className="Personal-Heading">Projects</h3>
                        <p className="Project">
                          3+ <br />
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 text-cenetr    ">
                  <div className="card ">
                    <div className=" box1">
                      <h3 className="Personal-Heading">Certificate </h3>
                      <p className="Project1">
                        Full Stack Web-develepoment Intership{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>Experience</h1>
          </div>
          <div className="row"  >
            <div className=" col-sm-12  col-md-6 col-lg-6 mb-3">
              <div className="card">
                <div className="card-body main_detail">
                  <h3 className="Personal_Heading">Red Software (Fulstack Developer / MERN) &#8669;</h3> <strong> 11 March 2022 to Present </strong>
                  <p>
               Worked on Holocene Project &nbsp; (Holocene is used for tracking all container shipment and its details)
                  </p> 
                  <p>
                  <strong>Tech stack</strong>: Next js , FrontEgg, tailwind css
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="  col-sm-12 col-md-12 col-lg-6  mb-3">
              <div className="card">
                <div className="card-body main_detail">
                  <h3 className="Personal_Heading">
                    Solytics Partners (React Dev Consultant) &#8669;<strong> 4 Jan 2022 to 28 Feb 2022 </strong>
                  </h3>
                  <p>
               Worked on Nimbus Project &nbsp; (Nibus is AI based Project which is used in banks)
                  </p>
                  <p>
                  <strong>Tech stack</strong>: React js , Material UI
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="col-md-12 col-lg-6 col-sm-12 mb-3">
              <div className="card">
                <div className="card-body main_detail">
                  <h3 className="Personal_Heading">Edureka (Internship) &#8669;</h3><strong> 15 aug 2021 to 12 dec 2021 </strong>
                  <p>
               Worked on  Ecommerce Project &nbsp; (Develop Flipcart clone Project)
                  </p>
                  <p>
                  <strong>Tech stack</strong>: React js , Material UI , node js  , Express js , MongoDB.
                  </p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

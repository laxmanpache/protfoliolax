import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import "./Skill.css"
import { useHistory ,useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation()
  
    // useEffect(() => {
    //   console.log(location.pathname)
    // }, [location])
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container w-75">
                <Link to="/">
                <h4 className="navbar-brand brand"  >Port<span style={{color:"orange"}}>Folio</span></h4>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link to='/' className="nav-item">
                            <div className={` nav-link ${location.pathname==='/'?"active":"" } `} aria-current="page" href="#">Home</div>
                        </Link>
                        <Link to="/about" className="nav-item">
                            <div className={` nav-link  ${location.pathname==='/about'?"active":"" }`}  >About</div>
                        </Link>
                        <Link to='/skill' className="nav-item">
                            <div className={` nav-link ${location.pathname==='/skill'?"active":"" } `}   >Skills</div>
                        </Link>
                        <Link to="/project" className="nav-item">
                            <div className={`nav-link  ${location.pathname==='/project'?"active":"" }`}   >Projects</div>
                        </Link>
                        <Link to="/contact" className="nav-item">
                            <div className={` nav-link ${location.pathname==='/contact'?"active":"" } `}    >Contact</div>
                        </Link>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;
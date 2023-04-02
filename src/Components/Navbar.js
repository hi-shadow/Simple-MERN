import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mx-0 px-0 d-flex justify-content-center">
                <div className="container mx-0 px-0 ">
                    <Link className="navbar-brand me-2" to="/">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                            height="16"
                            alt="MDB Logo"
                            loading="lazy"
                            style={{ marginTop: "-1px" }}
                        />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarButtonsExample">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>

                        <div className="d-flex align-items-center">
                            <Link to='/' className='nav-link mx-2 link-dark'  >Home</Link>
                            <Link to='/About' className='nav-link mx-2 link-dark'  >About</Link>
                            <Link to='/Contact' className='nav-link mx-2 link-dark'  >Contact</Link>
                            <Link to='/SignIn' className='mx-2 btn btn-dark btn-sm '  >Login </Link>
                            <Link to='/SignUp' className=' mx-2 btn btn-sm btn-dark'  >Register</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

import React from "react"
import { NavLink} from "react-router-dom"

export default function Navbar(){
    return(
        <>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a href="" className='navbar-brand'><img src="/images/logo.png" alt="" width="60%" /></a>

                <ul className='nav navbar-nav mx-auto'>
                  <li className='nav-item'>
                    <NavLink className='nav-link header-item ' to="/">HOME</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link header-item ' to="/collection">COLLECTION</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link header-item '>ABOUT</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link header-item '>CONTACT</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link header-item admin px-3' to={`http://localhost:5000/manage-product`} target="_blank">Admin Panel</NavLink>
                  </li>
                </ul>

                <ul className='nav navbar-nav ms-auto'>
                  <li className='nav-item mt-1'><i class="bi bi-search fs-5  mx-2"></i></li>
                  <li className='nav-item'><i class="bi bi-person fs-4 mx-2"></i></li>
                  <li className='nav-item'><i class="bi bi-bag fs-4 mx-2"></i></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        </>
    )
}
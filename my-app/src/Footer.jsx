import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <img src="images/logo.png" alt="" width="25%" />
                        <p className="mt-3" style={{ fontSize: ".875rem" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="col-lg-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h5 className="text-black">COMPANY</h5>
                                <ul className="list-unstyled">
                                    <li><Link className="text-decoration-none" style={{ fontSize: ".875rem" }}>Home</Link></li>
                                    <li><Link className="text-decoration-none" style={{ fontSize: ".875rem" }}>About</Link></li>
                                    <li><Link className="text-decoration-none" style={{ fontSize: ".875rem" }}>Delivery</Link></li>
                                    <li><Link className="text-decoration-none" style={{ fontSize: ".875rem" }}>Privacy Policy</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <h5 className="text-black">GET IN TOUCH</h5>
                                <ul className="list-unstyled">
                                    <li><Link className="text-decoration-none" style={{ fontSize: ".875rem" }}>+1-000-000-0000</Link></li>
                                    <li><Link className="text-decoration-none" style={{ fontSize: ".875rem" }}>greatstackdev@gmail.com</Link></li>
                                    <li><Link className="text-decoration-none" style={{ fontSize: ".875rem" }}>Instagram</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container border border-start-0 border-end-0 border-bottom-0 py-3">
                <div className="row text-center">
                    <p>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
                </div>
            </div>
        </>
    )
}
import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <>
            {props.data?.map((item, index) => (
                <div className="col-lg-3" style={{ width: props.wid }} key={index}>
                    <div className="card border-0">
                        <Link to={`/product/${item._id}`} className="text-decoration-none text-dark">
                            <div className="card-img">
                                <img
                                    src={`http://localhost:5000/${item.image}`}
                                    className="img-fluid"
                                    alt={item.title}
                                />
                            </div>
                            <div className="card-content">
                                <p style={{ fontSize: ".875rem" }} className="mt-2">
                                    {item.title}
                                </p>
                                <p>$ {item.price}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}

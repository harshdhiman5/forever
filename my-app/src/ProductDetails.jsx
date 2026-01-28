import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error("Error fetching product details:", err));
    }, [id]);

    if (!product) return <div className="text-center mt-5">Loading...</div>;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <img
                        src={`http://localhost:5000/${product.image}`}
                        alt={product.title}
                        className="img-fluid"
                    />
                </div>
                <div className="col-lg-6">
                    <h2>{product.title}</h2>
                    <p className="mt-2">${product.price}</p>
                    <p className="mt-3">{product.description || "No description available."}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Type:</strong> {product.type}</p>
                    <button className="btn btn-dark text-white mt-3">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

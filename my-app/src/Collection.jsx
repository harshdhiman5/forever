import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Collection() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);

    // Fetch all products
    useEffect(() => {
        fetch("https://forever-backend-lplg.onrender.com/api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
            })
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    // Filter when selection changes
    useEffect(() => {
        if (products.length > 0) {
            filterProducts(selectedCategories, selectedTypes);
        }
    }, [selectedCategories, selectedTypes, products]);

    const handleCategoryChange = (category) => {
        const updated = selectedCategories.includes(category)
            ? selectedCategories.filter((c) => c !== category)
            : [...selectedCategories, category];
        setSelectedCategories(updated);
    };

    const handleTypeChange = (type) => {
        const updated = selectedTypes.includes(type)
            ? selectedTypes.filter((t) => t !== type)
            : [...selectedTypes, type];
        setSelectedTypes(updated);
    };

    const filterProducts = (categories, types) => {
        const filtered = products.filter((product) => {
            const category = product.category?.toLowerCase();
            const type = product.type?.toLowerCase();

            const matchesCategory = categories.length === 0 || categories.includes(category);
            const matchesType = types.length === 0 || types.includes(type);

            return matchesCategory && matchesType;
        });

        setFilteredProducts(filtered);
    };

    return (
        <div className="container border border-start-0 border-end-0 border-bottom-0 pt-5">
            <div className="row">
                {/* Sidebar filters */}
                <div className="col-lg-3">
                    <h4 className="text-black text-light">FILTERS</h4>

                    {/* Category Filter */}
                    <ul className="list-unstyled mt-4 border p-4">
                        <li className="text-black mb-2">CATEGORIES</li>
                        {["men", "women", "kids"].map((category) => (
                            <li key={category}>
                                <input
                                    type="checkbox"
                                    className="form-check-input me-2"
                                    onChange={() => handleCategoryChange(category)}
                                    checked={selectedCategories.includes(category)}
                                />
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </li>
                        ))}
                    </ul>

                    {/* Type Filter */}
                    <ul className="list-unstyled mt-4 border p-4">
                        <li className="text-black mb-2">TYPE</li>
                        {["topwear", "bottomwear", "winterwear"].map((type) => (
                            <li key={type}>
                                <input
                                    type="checkbox"
                                    className="form-check-input me-2"
                                    onChange={() => handleTypeChange(type)}
                                    checked={selectedTypes.includes(type)}
                                />
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Products display */}
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center my-0 justify-content-start">
                                <h4>
                                    <span className="custom-text-color">ALL</span> COLLECTIONS
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-3 ms-auto">
                            <select className="form-select rounded-0 border-3">
                                <option>Sort by: Relevant</option>
                                <option>Sort by: Low to High</option>
                                <option>Sort by: High to Low</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-lg-12 d-flex">
                        <div className="row justify-content-between">
                            <Card wid="23%" data={filteredProducts} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

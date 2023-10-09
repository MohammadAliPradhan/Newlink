import React from "react";
import "../cssfolder/MainSec1.css";

export default function () {
    const images = [
        "https://images.unsplash.com/photo-1682687221213-56e250b36fdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1682687221213-56e250b36fdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1682687221213-56e250b36fdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1682687221213-56e250b36fdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",


        // Add URLs for your other images here
    ];

    const description = [
        "something",
        "nothing",
        "everything is for the good of something ",
        "there are people who do always good for "
        
    ]

    return (
        <>
            <h2>New Arrivals</h2>

            <div className="parentMainSec">
                {images.map((image,index) => (
                    <div className="childMainSec1" key={index}>
                        <img className="imgDiv" src={image} alt={`Image ${index}`} />
                        <p>{description[index]}</p>
                    </div>
                ))}
            </div>

        </>
    );
}

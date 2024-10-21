import React from "react";
import '../../index.css';
import ButtonRoot  from '../ButtonRoot';


export default function Card({title, description,  image, date, label, link}) {

    return (
        <div className="sm:max-w-sm max-w-fit rounded-lg shadow-lg overflow-hidden bg-white m-4 scaling">
            <img
                src={image || "https://via.placeholder.com/300x200"}
                alt="Card Image"
                className="w-full h-40 object-fill"
            />
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2  text-black">{title || "Some Title"}</h3>
                <p className="text-gray-700 text-base">
                    {description || "Some description about the card content. This is where you can add more details"} <br />
                    <div className="font-semibold">
                        {date || "Already Concluded"}
                    </div>

                </p>
                <div className="mt-4">
                    {/* <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Learn More
                    </button> */}
                    <a href={link}><ButtonRoot label={label}/></a>
                </div>
            </div>
        </div>
    )
}
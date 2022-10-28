import React from 'react'
import { Link } from 'react-router-dom'

function Card({title, icon, alt, children}) {
    return (
        <div className="Card w-2/5 h-fit px-12 py-16 bg-[#1d1d1d] rounded-2xl text-center flex flex-col justify-evenly items-center">
            <div className="flex items-center justify-center gap-2 pb-6">
                <img src={`${icon}`} alt={`${alt}`} draggable="false" />
                <h1 className="text-2xl font-extrabold">{title}</h1>
            </div>
            {children}
        </div>
    )
}

export default Card

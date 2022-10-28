import React from 'react'

function Button({title, icon, alt, onClick}) {
    return (
        <button 
            className="Button bg-[#0077ff] flex justify-start items-center gap-3 py-4 px-6 rounded-full"
            onClick={onClick}    
        >
            <span>{title}</span>
            <img src={`${icon}`} alt={`${alt}`} draggable="false" />
        </button>
    )
}


export default Button

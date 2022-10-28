import React from 'react'
import { Link } from "react-router-dom"
function Navigation() {
    return (
        <div className="Navigation container mx-auto py-6 px-16">
            <Link to="/" className="text-white font-bold text-xl flex items-center gap-3 cursor-pointer">
                <img src="/assets/images/logo/logo__codershouse-32x32.png" alt="logo" draggable="false" />
                <span>Codershouse</span>
            </Link>
        </div>
    )
}


export default Navigation

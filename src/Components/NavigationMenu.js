import React from 'react'
import { Link } from "react-router-dom"

function NavigationMenu(props){            // Separate Component to make it easier to make bigger menu. It has a props that is a function to close menu 
    return (
        <div>
            <div className="font-bold py-3">
                AppName
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 py-3 border-t border-b block"   // are displayed as block level elements. They are not overlapping 
                        onClick={props.closeMenu} 
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu
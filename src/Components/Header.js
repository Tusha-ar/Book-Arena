import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Components/css/header.css'

class Header extends Component {
    render() {
        return (
            <nav>
                <ul className="navv">
                    <li className="">
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/addBook">
                        ADD BOOK
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/showBooks">
                            Show Books
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header

import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import { Link } from 'react-router-dom'

export default function NavBar({ onSearch }) {
  return (
    <div className="nav-bar" >
        <Link to="/">
          <Logo />
        </Link>
        <Search onSearch={onSearch}/>
    </div>
  )
}

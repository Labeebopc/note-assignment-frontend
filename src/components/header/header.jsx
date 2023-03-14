import React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <>
            <section className="header-container">
                <Link className="header-heading" to="/"><h3>Notes</h3></Link>
                <div className="add-note-btn-div">
                    <Link to="/addnote"><button>Add Note</button></Link>
                </div>
            </section>
        </>
    )
}
export default Header;
import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";

export default props =>
    <React.Fragment>
        <Link to={props.href}>
            <i className={`${props.className}`}></i> {props.texto}
        </Link>
    </React.Fragment>
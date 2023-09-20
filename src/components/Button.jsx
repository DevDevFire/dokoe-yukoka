import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {
    const {buttonFlag, onClickRandomButton} = props;
    return (
        <a className="btn" onClick={() => onClickRandomButton()}>
            <span className="btn-text">{buttonFlag === null ? 'スタート': 'ストップ'}</span>
            <FontAwesomeIcon icon={faPlay} className="btn-icon"/>
        </a>
    );
}
export default Button;
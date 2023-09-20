import React, { useEffect, useLayoutEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const TagWidget = (props) => {
    const {urlList} = props;
    return (
        <div className="widget">
            <h4 className="widgettitle">
                インスタグラムでタグを検索
                <FontAwesomeIcon icon={faInstagram} className="after-icon"/>
            </h4>
            <div className="tagcloud">
                <ul>
                    {urlList.map((url, i) => 
                        <li key={i}>
                            <a 
                                href={url.url}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="hashtag"
                            >
                                {url.word}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}
export default TagWidget;
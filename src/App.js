
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import jsonData from './station_list_tokyo.json';

function App() {

    useEffect(() => {
        setStationList(jsonData);
    }, []);

    const [station, setStation] = useState('ボタンを押してね。');
    const [stationList, setStationList] = useState([]);
    const [buttonFlag, setButtonFlag] = useState(null);// off
    // 駅をランダムで選ぶ
    const randomStation = () => {
        setStation(`${stationList[Math.floor(Math.random() * stationList.length)].station_name}駅`);
    }
    // ランダム起動/停止
    const  onClickRandomButton= () => {
        if (buttonFlag === null) {
            setButtonFlag(setInterval(randomStation, 30));
        }
        else {
            clearInterval(buttonFlag);
            setButtonFlag(null);
        }
    };

    return (
        <>
            <header>
                <h1>どこへゆこうか</h1>
            </header>
            <div className="container">
                <div className="body-wrapper">
                    <p className="station-name">{station}</p>
                </div>

                <div className="footer-wrapper">
                    <a className="btn" onClick={() => onClickRandomButton()}>
                        <span className="btn-text">{buttonFlag === null ? 'スタート': 'ストップ'}</span>
                        <FontAwesomeIcon icon={faPlay} className="btn-icon"/>
                    </a>
                </div>
            </div>
        </>
    );
}
export default App;
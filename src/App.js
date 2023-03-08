import React, { useEffect, useLayoutEffect, useState } from "react";
import "./styles.css";
import jsonDataList from './station_list_tokyo.json';

import Button  from "./components/Button";
import TagWidget  from "./components/TagWidget";

function App() {

    useEffect(() => {
        setStationList(jsonDataList);
    }, []);

    const [station, setStation] = useState('スタートを押してね。');
    const [stationList, setStationList] = useState([]);
    const [buttonFlag, setButtonFlag] = useState(null);// off
    const [urlList, setURLList] = useState();

    // 駅をランダムで選ぶ
    const randomStation = () => {
        setStation(stationList[Math.floor(Math.random() * stationList.length)]);
    }
    // ランダム起動/停止
    const  onClickRandomButton= () => {
        if (buttonFlag === null) {
            setButtonFlag(setInterval(randomStation, 30));
            setURLList();// ランダムで選んでいる時は表示しないので空にする
        }
        else {
            clearInterval(buttonFlag);
            setButtonFlag(null);
            setURLList([
                { word:station.station_name, url: `https://www.instagram.com/explore/tags/${station.station_name}` },
                { word:'ランチ', url: `https://www.instagram.com/explore/tags/${station.station_name}ランチ` },
                { word:'ディナー', url: `https://www.instagram.com/explore/tags/${station.station_name}ディナー` },
                { word:'居酒屋', url: `https://www.instagram.com/explore/tags/${station.station_name}居酒屋` },
                { word:'喫茶店', url: `https://www.instagram.com/explore/tags/${station.station_name}喫茶店` },
                { word:'カフェ', url: `https://www.instagram.com/explore/tags/${station.station_name}カフェ` },
                
                // { word:'飲食店', url: `https://www.google.com/maps/search/飲食店/@${station.lat},${station.lon},17z` },
                // { word:'居酒屋', url: `https://www.google.com/maps/search/居酒屋/@${station.lat},${station.lon},17z` },
                // { word:'カフェ', url: `https://www.google.com/maps/search/カフェ/@${station.lat},${station.lon},17z` },
                // { word:'喫茶店', url: `https://www.google.com/maps/search/喫茶店/@${station.lat},${station.lon},17z` },
            ]);
        }
    };

    return (
        <>
            <header>
                <h1>どこへゆこうか</h1>
            </header>
            <div className="container">
                <div className="body-wrapper">
                    <div className="body-center">
                        <span className="station-name">
                            {station == 'スタートを押してね。' ? station : `${station.station_name}駅`}
                        </span>
                        {urlList && <TagWidget urlList={urlList}/>} 
                    </div>
                </div>
                <div className="footer-wrapper">
                    <Button
                        buttonFlag={buttonFlag}
                        onClickRandomButton={onClickRandomButton}
                    />
                </div>
            </div>
        </>
    );
}
export default App;
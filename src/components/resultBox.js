import './resultBox.scss';
import BusLineIcon from "./busLineIcon"
import positionIcon from '../images/positionIcon.png'
import React from 'react';



function resultBox(){
    const stopDetails=[
        {
            "stop" :"Le Planet",
            "stopTime":"23:30"
        },
        {
            "stop" :"L'Epalud",
            "stopTime":"23:32"
        },
        {
            "stop" :"Edelweiss",
            "stopTime":"23:34"
        },
        {
            "stop" :"ATC",
            "stopTime":"23:36"
        },
        {
            "stop" :"Roc Noir / Mairie",
            "stopTime":"23:38"
        },
        {
            "stop" :"Les Longues",
            "stopTime":"23:40"
        },
        {
            "stop" :"La Madeleine",
            "stopTime":"23:42"
        },
        {
            "stop" :"La Lauzière",
            "stopTime":"23:44"
        }
    ];
    
    return (
        <div className='component'>
            <div className='mainbox'>
                <BusLineIcon className="BusLineIcon" line="A"></BusLineIcon>
                <p className="infos">
                    <p className="times">
                        <p className="time">23:14 - 23:28</p>
                        <p className="duration">14 minutes</p>
                    </p>
                    <p className="direction">Direction: La Lauzière</p>
                </p>
            </div>
            <div className="expandedPart">
                <div className="icons">
                    <div className="startItem"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    {Array.from({ length: stopDetails.length-2 },() => //display the correct amount of stops in the icons
                        <React.Fragment>
                            <div className="stopIcon"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </React.Fragment>
                        )}
                    <img className='positionIcon' src={positionIcon} alt="" />
                </div>
                <div className="text">
                    {stopDetails?.map(stopDetail => //display the info of each item of stopDetails
                        <div className="stopAndTime">
                            <p className="stop">{stopDetail["stop"]}</p>
                            <p className="timeStop">{stopDetail["stopTime"]}</p>
                        </div>
                    )} 
                    
                </div>
            </div>
        </div>
    );
}

export default resultBox;
import './resultBox.scss';
import BusLineIcon from "./busLineIcon"
import positionIcon from '../images/positionIcon.png'
import React, { useState } from 'react';



function ResultBox(stopDetails) {
    stopDetails=Object.values(stopDetails)[0]; //transform object to array

    const [expanded, setExpanded] = useState(false);

    
    function handleClick() {
        setExpanded(!expanded);
    }
    //console.log(expended);
    return (
        <div className='component'>
            <div className='mainbox' onClick={handleClick}>
                <BusLineIcon className="BusLineIcon" line="A"></BusLineIcon>
                <p className="infos">
                    <p className="times">
                        <p className="time">23:14 - 23:28</p>
                        <p className="duration">14 minutes</p>
                    </p>
                    <p className="direction">Direction: La Lauzière</p>
                </p>
            </div>


            {/*The expended part is a grid with all necessary informations */}

            {expanded ? //the complementary info are displayed when clicked
            <div style={{ gridTemplateRows: "23px repeat("+(stopDetails.length-2).toString()+", 15px 15px 20px) 15px 15px 45px" }} className="expandedPart2"> {/*Define curtom row for the start icon, the repeat for every stop and then the last two dots and the position icon*/}
                <div className="startItem"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                {Array.from({ length: stopDetails.length - 2 }, () => //display the correct amount of stops in the icons
                    <React.Fragment>
                        <div className="stopIcon"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </React.Fragment>
                )}
                <img className='positionIcon' src={positionIcon} alt="" />
                {stopDetails?.map((stopDetail,index) => //display the info of each item of stopDetails
                    <React.Fragment>
                        <p className="stop">{stopDetail["stop"]}</p>
                        {index!==stopDetails.length-1 ? <div className="filler"></div> : ""}  {/*this div fill the 2 rows corresponding to black dots to that the text is centered */}
                        {/* no filler for the last since there is no dot after */}
                    </React.Fragment>
                )}
                {stopDetails?.map((stopDetail) => //display the info of each time of stopDetails
                    <React.Fragment>
                        <p className="timeStop">{stopDetail["stopTime"]}</p>
                        <div className="filler"></div> {/*no need to remove the filler */}
                    </React.Fragment>
                )}
            </div>
            : "" /*to end the bloc to expend or result*/} 

        </div>
    );
}

export default ResultBox;
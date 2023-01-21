import './choiceRide.scss';
import'./button.scss';
import positionIcon from '../images/positionIcon.png'
import clockItem from '../images/clockItem.png'

function choiceRide(){
    return (
        <div className="selectArea">
            <form>
                <div className="choice">
                    <div className="icons">
                        <div className="startPoint"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <img className='positionIcon' src={positionIcon} alt="positionIcon" />
                        <img className='clockIcon' src={clockItem} alt="clockItem" />
                    </div>
                    <div className="selects">
                        <select name="startName" id="startName" class="selectLocation" required>
                            <option value="Le Planet">Le Planet</option>
                            <option value="ATC">ATC</option>
                            <option value="La Lauzière">La Lauzière</option>
                        </select>
                        <select name="endName" id="endName" class="selectLocation" required>
                            <option value="Le Planet">Le Planet</option>
                            <option value="ATC">ATC</option>
                            <option value="La Lauzière">La Lauzière</option>
                        </select>
                        <select name="" id="dateTime" class="selectLocation" required>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>
                <input className='button' type="submit" value="Rechercher" />
            </form>
        </div>
    );
}

export default choiceRide;
import './choiceRide.scss';
import'./button.scss';
import positionIcon from '../images/positionIcon.png'
import clockIcon from '../images/clockIcon.png'
import calendarIcon from '../images/CalendarIcon.png'

import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function ChoiceRide(){
    const [date, setDate] = React.useState(null);
    const [time, setTime] = React.useState(null)
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
                        <img className='calendarIcon' src={calendarIcon} alt="CalendarIcon" />
                        <img className='clockIcon' src={clockIcon} alt="clockIcon" />
                    </div>
                    <div className="selects">
                        <select name="startName" id="startName" class="selectField" required>
                            <option value="Le Planet">Le Planet</option>
                            <option value="ATC">ATC</option>
                            <option value="La Lauzière">La Lauzière</option>
                        </select>
                        <select name="endName" id="endName" class="selectField" required>
                            <option value="Le Planet">Le Planet</option>
                            <option value="ATC">ATC</option>
                            <option value="La Lauzière">La Lauzière</option>
                        </select>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                className="datePicker selectField"
                                disableFuture
                                label="Date"
                                openTo="days"
                                views={['day']}
                                value={date}
                                onChange={(newDate) => {
                                    setDate(newDate);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <TimePicker
                                className='timePicker selectField'
                                value={time}
                                onChange={setTime}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
                <input className='button' type="submit" value="Rechercher" />
            </form>
        </div>
    );
}

export default ChoiceRide;
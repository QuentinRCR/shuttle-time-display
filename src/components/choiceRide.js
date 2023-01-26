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
import 'dayjs/locale/fr';

function ChoiceRide(){
    const [date, setDate] = React.useState(new Date());
    const [time, setTime] = React.useState(new Date())
    const [locale, setLocale] = React.useState('fr');
    console.log(date);
    return (
        <div className="selectArea">
            <form>
                <div className="choice">

                    <div className="startPoint selectFormIcon"></div>
                    <select name="startName" id="startName" class="selectField" required>
                        <option value="Le Planet">Le Planet</option>
                        <option value="ATC">ATC</option>
                        <option value="La Lauzière">La Lauzière</option>
                    </select>

                    <div className="dot selectFormIcon"></div>
                    <div className="fillIn"></div> {/* to align elements in the grid */}
                    <div className="dot selectFormIcon"></div>
                    <div className="dot selectFormIcon"></div>

                    <img className='positionIcon selectFormIcon' src={positionIcon} alt="positionIcon" />
                    <select name="endName" id="endName" class="selectField" required>
                        <option value="Le Planet">Le Planet</option>
                        <option value="ATC">ATC</option>
                        <option value="La Lauzière">La Lauzière</option>
                    </select>

                    <img className='calendarIcon selectFormIcon' src={calendarIcon} alt="CalendarIcon" />
                    <LocalizationProvider adapterLocale={locale} dateAdapter={AdapterDayjs}>
                        <DatePicker
                            className="datePicker"
                            disableFuture
                            label="Date"
                            openTo="days"
                            views={['day']}
                            value={date}
                            onChange={(newDate) => {
                                setDate(newDate);
                            }}
                            renderInput={(params) => <TextField size="small" {...params} />}
                        />
                    </LocalizationProvider>

                    <img className='clockIcon selectFormIcon' src={clockIcon} alt="clockIcon" />               
                    <LocalizationProvider adapterLocale={locale} dateAdapter={AdapterDayjs}>
                        <TimePicker
                            label="Heure"
                            className='timePicker'
                            value={time}
                            onChange={setTime}
                            renderInput={(params) => <TextField size="small" {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                <input className='button' type="submit" value="Rechercher" />
            </form>
        </div>
    );
}

export default ChoiceRide;
import './busLineIcon.scss';



function busLineIcon({line}){
    const colorToLine={
        'A': "#cf0000",
        'B': "#9dc52b"
    }
    return (
        <div style={{ backgroundColor: colorToLine[line]}} className='icon'>{line}</div> //display the provided letter and color
    );
}

export default busLineIcon;
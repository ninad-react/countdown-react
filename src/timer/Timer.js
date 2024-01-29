import {useState, useEffect} from 'react'

const Timer = ({duration}) => {

    const [time, setTime] = useState(duration);

    useEffect(()=>{
        setTimeout(()=>{
            setTime(time - 1000);
        }, 1000);
    }, [time])

    const getFormatTime = (millisec) => {

        let total_seconds = Math.floor(millisec / 1000);
        let total_minutes = Math.floor(total_seconds / 60);
        let total_hours = Math.floor(total_minutes / 60);
        let days = Math.floor(total_hours / 24);

        let seconds = total_seconds % 60;
        let minutes = total_minutes % 60;
        let hours = total_hours % 24;

        return `${days}:${hours}:${minutes}:${seconds}`;
    }

  return (
    <div>{getFormatTime(time)}</div>
  )
}

export default Timer
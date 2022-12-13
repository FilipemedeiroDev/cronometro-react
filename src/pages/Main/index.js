import './styles.css';
import PlayIcon from '../../assets/icon-play.png';
import PauseIcon from '../../assets/icon-pause.png';
import RefreshIcon from '../../assets/icon-refresh.png';
import { useEffect, useState } from 'react'

function Main() {

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const hours = ("0" + Math.floor(time / 60000)).slice(-2);
  const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const milliseconds = ("0" + ((time / 10) % 100)).slice(-2);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className='container'>
      <div className='cronometro'>
        <h1>Cronômetro</h1>
        <div className='display'>
          <div className='circle-out'>
            <div className='circle-in'>
              <div className='timer'>
                <span>{hours}:</span>
                <span>{minutes}:</span>
                <span>{seconds}:</span>
                <span>{milliseconds}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='controlers'>
          <img
            className='play-button'
            src={PlayIcon}
            alt='icon play'
            onClick={() => setRunning(true)}
          />
          <img
            className='pause-button'
            src={PauseIcon}
            alt='icon pause'
            onClick={() => setRunning(false)}
          />
          <img
            className='refresh-button'
            src={RefreshIcon}
            alt='icon refresh'
            onClick={() => setTime(0)}
          />
        </div>

      </div>

    </div>
  );
}

export default Main;

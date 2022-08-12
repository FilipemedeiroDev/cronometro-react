import './styles.css';
import PlayIcon from '../../assets/icon-play.png';
import PauseIcon from '../../assets/icon-pause.png';
import RefreshIcon from '../../assets/icon-refresh.png';

function Main() {
  return (
    <div className='container'>
      <div className='cronometro-display'>
        <h1>Cronômetro</h1>
        <div className='circle-out'>
          <div className='circle-in'>

          </div>
        </div>
        <div className='controlers'>
          <img className='pause-button' src={PauseIcon} alt='icon pause' />
          <img className='play-button' src={PlayIcon} alt='icon play' />
          <img className='refresh-button' src={RefreshIcon} alt='icon refresh' />
        </div>
      </div>

    </div>
  );
}

export default Main;

import butterfly from '../images/butterfly.png';
import basket from '../images/basket.png';
import lefRound from '../images/leftRound.png';
import middleRound from '../images/middleRound.png';
import rightRound from '../images/Vector.png';

function Landing(props) {
    return (
        <div>
            <h2 className='caption'>
            Your best guide to home gardening
            </h2>
            <p className='descr'>
            Join a community of passionate gardeners, enhance your gardening skills, and reduce your carbon footprint.
            </p>
            <img className = 'middleRound' src={middleRound} />
            <img className = 'leftRound' src={lefRound} />
            <img className = 'rightRound' src={rightRound} />

            <button className='start'>START NOW</button>
            <img className = 'butterfly' src={butterfly} width="100" height="50" />
            <img className = 'basket' src={basket} width="100" height="50" />
        </div>
    )
}
export default Landing;
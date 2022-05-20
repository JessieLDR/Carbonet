import handHeart from"../images/hand.png";
import leaf from"../images/leaf.png";
import rect from"../images/Rectangle.png";
import check from"../images/check.png";
import Container from '@mui/material/Container'


function howItWork() {
    return (
        <div className="m">
            <div className="title">
                <h2>How it Works</h2>
                <div><p>Learn more about our features</p></div>
            </div>
            <div className = 'rect'>
                    <div className="sCard">
                        <img className = 'handheart' src={handHeart} />
                        <h2>Guide your experience</h2>
                        <p>Search for your plants and interact with other gardening enthusiasts</p>
                    </div>
                    <div className="sCard">
                        <img className = 'leaf' src={leaf} />
                        <h2>Track your progress</h2>
                        <p>Record and track the growth of your plants</p>
                    </div>
                    <div className="sCard">
                        <img className = 'check' src={check} />
                        <h2>Reduce your emissions</h2>
                        <p>Make a difference in global carbon emissions reduction</p>
                    </div>
            </div>
        </div>
    )
}
export default howItWork;
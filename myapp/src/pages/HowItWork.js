import handHeart from"../images/hand.png";
import leaf from"../images/leaf.png";
import rect from"../images/Rectangle.png";
import check from"../images/check.png";


function howItWork(props) {
    return (
        <div>
            <img className = 'rect' src={rect} />

            <h2>How it Works</h2>
            <p>Learn more about our features</p>
            <img className = 'handheart' src={handHeart} />
            <h2>Guide your experience</h2>
            <p>Search for your plants and interact with other gardening enthusiasts</p>
            <img className = 'leaf' src={leaf} />
            <h2>Track your progress</h2>
            <p>Record and track the growth of your plants</p>
            <img className = 'check' src={check} />
            <h2>Reduce your emissions</h2>
            <p>Make a difference in global carbon emissions reduction</p>
        </div>
    )
}
export default howItWork;
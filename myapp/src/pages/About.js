import helen from"../images/Helen.png";
import alec from "../images/Alec.png"
import yudong from "../images/Yudong.png";
import jessica from "../images/Jessica.png"
function About(props){
    return(
        <div>
            <div className="title">
                <h2>Meet Our Team</h2>
            </div>
            <div className = 'rect'>
                    <div className="sCard">
                        <img className = 'handheart' src={helen} />
                        <h2>Helen Zhao</h2>
                        <p>Product Manager</p>
                    </div>
                    <div className="sCard">
                        <img className = 'leaf' src={alec} />
                        <h2>Alec Gao</h2>
                        <p>UX Designer</p>
                    </div>
                    <div className="sCard">
                        <img className = 'check' src={yudong} />
                        <h2>Yudong Li</h2>
                        <p>Developer</p>
                    </div>
                    <div className="sCard">
                        <img className = 'check' src={jessica} />
                        <h2>Jessica Liu</h2>
                        <p>Developer</p>
                    </div>
            </div>
        </div>
    )
}

export default About;
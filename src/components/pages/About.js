import helen from"../images/Helen.png";
import alec from "../images/Alec.png"
import yudong from "../images/Yudong.png";
import jessica from "../images/Jessica.png"
import { Box } from "@mui/material";
function About(props){
    return(
        <Box>
        <Box className="title">
            <h2>Meet Our Team</h2>
        </Box>
        <Box className = 'rect'>
                <Box className="sCard">
                    <img className = 'handheart' src={helen} />
                    <h2>Helen Zhao</h2>
                    <p>Product Manager</p>
                    <p>hzhao4@uw.edu</p>
                </Box>
                <Box className="sCard">
                    <img className = 'leaf' src={alec} />
                    <h2>Alec Gao</h2>
                    <p>UX Designer</p>
                    <p>lgao2@uw.edu</p>
                </Box>
                <Box className="sCard">
                    <img className = 'check' src={yudong} />
                    <h2>Yudong Li</h2>
                    <p>Developer</p>
                    <p>yudonl@uw.edu</p>
                </Box>
                <Box className="sCard">
                    <img className = 'check' src={jessica} />
                    <h2>Jessica Liu</h2>
                    <p>Developer</p>
                    <p>deronl@uw.edu</p>
                </Box>
        </Box>
        </Box>
    )
}

export default About;
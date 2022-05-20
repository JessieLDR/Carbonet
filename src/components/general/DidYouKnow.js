import React from "react";
import { Box } from "@material-ui/core";
import { Paper } from "@material-ui/core";



const DidYouKnow = (props) => {
    const storyList = props.list
    const randomElement = storyList[Math.floor(Math.random() * storyList.length)];

    return(
        <Box p={{ xs: 2, sm: 3, md: 5 }} sx={{ maxWidth:1000}}>
            <Paper>
                <Box color="#7C8C64" bgcolor="white" p={5}>
                    <h3>
                        <b>Did you know?</b>
                    </h3>
                    <Box pt={5}>
                        <p >{randomElement.body}</p>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}
export default DidYouKnow;

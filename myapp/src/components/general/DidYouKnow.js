import React from "react";
import { Box } from "@mui/system";

const DidYouKnow = (props) => {
    const storyList = props.list
    const randomElement = storyList[Math.floor(Math.random() * storyList.length)];

    return(
        <Box>
            <h3>{randomElement.title}</h3>
            <p>{randomElement.body}</p>
        </Box>
    )
}

export default DidYouKnow;
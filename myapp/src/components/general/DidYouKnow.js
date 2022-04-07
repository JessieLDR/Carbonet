import React from "react";
import { Box } from "@mui/system";

const DidYouKnow = (props) => {
    const title = props.title
    const body = props.body

    return(
        <Box>
            <h3>{title}</h3>
            <p>{body}</p>
        </Box>
    )
}

export default DidYouKnow;
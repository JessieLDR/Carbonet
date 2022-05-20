import React, { useState } from "react"

const raw_data = require('../../sample_data/did-you-know.json')

const didYouKnowList = []
for (var key in raw_data){
    const element = {
        'title': raw_data[key]['title'],
        'body': raw_data[key]['desc']
    }
    didYouKnowList.push(element)
}

const DidYouKnowHook = () =>{
    const [didYouKnow, setDidYouKnow] = useState(didYouKnowList)
    return {didYouKnow, setDidYouKnow}
}

export default DidYouKnowHook;
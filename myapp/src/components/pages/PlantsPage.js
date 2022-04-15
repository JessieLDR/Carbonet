import PlantList from "./PlantList"
import { useState } from "react"
import { Box } from "@mui/system"
import DidYouKnow from "../general/DidYouKnow";
import CheckList from "../general/Check";
import PlantOptionsHook from "../hooks/PlantOptionsHook";
import PlantListHook from "../hooks/PlantListHook";
import PlantDialog from "../general/PlantDialog";

const didyouknowsample = {
    'title': "This is a title",
    'body': "dmoafjdkalmklmfakdkf  naflkdnfkajdnfkandfnadlfnaldk f dnfakldnklfamdklfnadlk flk dfkdmfkdak"
  }
  
  const taskSample = [
    {'name': 'water'},
    {'name': 'b'},
    {'name': 'c'},
    {'name': 'd'}
  ]

const PlantsPage = () => {
    const {myOptions, setMyOptions} = PlantOptionsHook()
    const {myPlants, setMyPlants} = PlantListHook()
    const [myTitle, setMyTitle] = useState(didyouknowsample.title)
    const [myBody, setMyBody] = useState(didyouknowsample.body)
    return(
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'space-between',}}>
            <Box sx={{ width: '66%', minHeight:'600px', maxHeight:'1000px'}}>
                <PlantList plants={myPlants} setMyPlants={setMyPlants}/>
                <PlantDialog myOptions={myOptions} myPlants={myPlants} 
                setMyOptions={setMyOptions} setMyPlants={setMyPlants}/>
            </Box>
            <Box sx={{ width: '33%', minHeight:'600px', maxHeight:'1000px'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ height: '50%', width:'100%', border:1}}>
                        <CheckList tasks={taskSample} />
                    </Box>
                    <Box sx={{ height: '50%', mt:'50px'}}>
                    <DidYouKnow 
                        title={myTitle}
                        body={myBody}
                    />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PlantsPage
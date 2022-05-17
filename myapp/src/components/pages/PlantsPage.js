import PlantList from "../general/PlantList";
import { useState } from "react"
import { Box } from "@mui/system"
import DidYouKnow from "../general/DidYouKnow";
import CheckList from "../general/Check";
import PlantDialog from "../general/PlantDialog";
import PlantOptionsHook from "../hooks/PlantOptionsHook";
import PlantListHook from "../hooks/PlantListHook";
import DidYouKnowHook from "../hooks/DidYouKnowHook";
import Grid from "@material-ui/core/Grid";
import VerticalNavBar from "../general/VerticalNavBar";


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
    const {didYouKnow, setDidYouKnow} = DidYouKnowHook()

    return(
        <Box sx={{ display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                alignContent:'space-between',
                backgroundColor: "#FCFBF6",
            }}>
            <Box sx={{ width: '66%', minHeight:'600px', maxHeight:'1000px'}}>
                <PlantList plants={myPlants} setMyPlants={setMyPlants}/>
                <PlantDialog myOptions={myOptions} myPlants={myPlants}
                setMyOptions={setMyOptions} setMyPlants={setMyPlants}/>
            </Box>
            <Box sx={{ width: '33%', minHeight:'600px', maxHeight:'1000px'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ height: '90%', width:'100%'}}>
                        <CheckList tasks={taskSample}/>
                    </Box>
                    <Box sx={{ height: '10%', mt:'50px'}}>
                    <DidYouKnow 
                        list = {didYouKnow}
                    />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PlantsPage
import PlantList from "../general/PlantList";
import { useState } from "react"
import { Box } from "@mui/system"
import DidYouKnow from "../general/DidYouKnow";
import CheckList from "../general/Check";
import PlantDialog from "../general/PlantDialog";
import PlantOptionsHook from "../hooks/PlantOptionsHook";
import PlantListHook from "../hooks/PlantListHook";
import DidYouKnowHook from "../hooks/DidYouKnowHook";
import DailyTaskHook from "../hooks/DailyTasksHook";
import Grid from "@material-ui/core/Grid";
import VerticalNavBar from "../general/VerticalNavBar";
import { Typography } from "@mui/material";


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
    const {dailyTask, setDailyTask} = DailyTaskHook()

    return(
        <Box sx={{ display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                alignContent:'space-between',
                backgroundColor: "#FCFBF6",
            }}>
            <Box sx={{ width: '66%', minHeight:'600px', maxHeight:'1000px'}}>
                <Box sx={{flexDirection: 'row'}}>
                    <Box ml={1}>
                        <Box>
                            <Typography
                            fontFamily='Open Sans'
                            fontSize={42}
                            fontWeight='bold'
                            style={{color:'#7C8C64'}}>
                                Wellcome Back
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                            fontFamily='Open Sans'
                            fontSize={24}
                            fontWeight='regular'
                            style={{color:'#A3A3A3'}}>
                                This is where you will keep track of your activities
                            </Typography>
                        </Box>
                    </Box>
                    <Box>

                    </Box>
                    <Box >
                        <PlantList plants={myPlants} setMyPlants={setMyPlants}
                        dailyTask={dailyTask} setDailyTask={setDailyTask}/>
                        <PlantDialog myOptions={myOptions} myPlants={myPlants}
                        setMyOptions={setMyOptions} setMyPlants={setMyPlants}
                        dailyTask={dailyTask} setDailyTask={setDailyTask}/>
                    </Box>
                </Box>
                
            </Box>
            <Box sx={{ width: '33%', minHeight:'600px', maxHeight:'1000px'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ height: '90%', width:'100%'}}>
                        <CheckList dailyTask={dailyTask}/>
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
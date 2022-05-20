import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import {Box, Paper} from "@material-ui/core";

export default function CheckList(props) {
  const dailyTask = props.dailyTask
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '130%', maxWidth: 400, bgcolor: '#FCFBF6' }}>
      <Box p={{ xs: 1, sm: 2, md: 4 }} sx={{ minWidth:445}}>
        <Paper>
          <Box color="#7C8C64" p={2} >
            <h3>
              <b>Daily Checklist</b>
            </h3>
            {dailyTask.map((value) => {
              const labelId = `checkbox-list-label-${value}`;
              return (
                <ListItem
                  key={value}
                  disablePadding
                >
                  <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={value} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </Box>
        </Paper>
      </Box>
    </List>
  );
}
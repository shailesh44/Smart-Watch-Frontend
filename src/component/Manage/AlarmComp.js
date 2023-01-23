import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Switch from '@mui/material/Switch';
export default function AlarmComp() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <div className='alarms'>
      <Accordion expanded={true}>
        <div className='switch'>
      
        <AccordionSummary

          aria-controls="panel1a-content"
          id="panel1a-header"
        > 
          <Typography>Alarm 1</Typography>
          
        </AccordionSummary><Switch {...label} /></div>
        <AccordionDetails>
          <Typography>
           Summary of alarm
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}


import React, {useEffect, useState} from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import DangerousIcon from '@mui/icons-material/Dangerous';


import Section from './Section'

export default function Main(props){
    const [detections, setDetections] = useState(props.count || 0);

    useEffect(() => {
      setDetections(props.count);
    }, [props.count])

    return(
      <div>
      <Stack direction="row" spacing={2} >
      {Array.from(Array(detections + 1).keys()).map((_, index) => (
        index > 0 && 
        <Section value={index} />
      ))}
    </Stack>
    </div>
    )
}
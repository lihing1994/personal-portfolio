import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import programmingSkill from '../json/ProgrammingSkill.json';
import frameworkOrLibarySkill from '../json/FrameworkOrLibarySkill.json';
import WebDevelopment from '../json/WebDevelopment.json';
import operatingSystemSkill from '../json/OperatingSystemsSkill.json';
import applicationSkill from '../json/ApplicationSkill.json'
import communicationSkill from '../json/communicationSkill.json'
const mySkills = [programmingSkill,frameworkOrLibarySkill,WebDevelopment,operatingSystemSkill,applicationSkill,communicationSkill];
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));
  const WhiteTextTypography = withStyles({
    root: {
      color: 'black'
    }
  })(Typography);
  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: 'white',
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#009688',
    },
  }))(LinearProgress);
 

  function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <BorderLinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <WhiteTextTypography variant={props.frontSize} color="primary">
            <b>
                {`${Math.round(props.value,)}%`}
            </b>
          </WhiteTextTypography>
        </Box>
      </Box>
    );
  }
  /*
Paper elevation ={6} style={{background:'black',position:'fixed',width:'50%',left:'50%',transform:`translate(${-50}%, ${0}%)`}}>
  */
export default function skills () {
    return(
        <div style={{color:'lightGray',minHeight:'-webkit-fill-available'}}>
            <Grid container direction="row" justify="center" alignItems="center" style={{ background:'lightGray',border: "dotted 4px", borderColor:'lightGray',borderBlockStartColor:'white',borderBlockEndColor:'white',height: "100%" }}>
                {mySkills.map((tempSkill,index)=>{
                return(
                <React.Fragment>
                    <Grid item xs = {5} >
                        <h1 style ={{color:'black'}}>
                            <b>{tempSkill.Name}</b>
                        </h1>
                        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                            {
                                tempSkill.data.map((skills) =>{
                                    return(
                                        <React.Fragment>
                                            <p1 style={{color:'black'}}>
                                                <b>
                                                  <big>
                                                    {skills.name}
                                                  </big>
                                                </b>
                                            </p1>
                                            <Grid item xs ={12}>
                                                <LinearProgressWithLabel value={skills.proficiency} frontSize={"h5"}/>
                                            </Grid>
                                        </React.Fragment>
                                    );
                                })
                            }
                        </Grid>
                    </Grid>
                    {
                        index % 2 === 0 ?
                            <Grid item xs = {2}/>
                        :
                        null
                    }
                </React.Fragment>
                )})}
            </Grid>
        </div>
    );
}
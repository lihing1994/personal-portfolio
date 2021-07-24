import React from 'react'
import Chip from '@material-ui/core/Chip';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { makeStyles } from '@material-ui/core/styles';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import GitHubIcon from '@material-ui/icons/GitHub';
import ProjectJson from '../json/Projects.json';
import LinkIcon from '@material-ui/icons/Link';
import Grid from '@material-ui/core/Grid';
import KeyboardIcon from '@material-ui/icons/Keyboard';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    timeLine:{
      textAlign:'center',
      fontFamily:`"Bebas Neue", sans-serif`,
      background:'yellow'
    }
  }));


export default function Project () {
    const classes = useStyles();
    return(
      <div style={{background:'lightGray',minHeight:'-webkit-fill-available'}}>
        <React.Fragment> 
          <Grid container direction="row" justify="center" alignItems="center" style={{ background:'lightGray'}}>
            <Grid item xs ={12}  style={{border:"dotted 4px",borderColor:'lightGray',borderBlockEndColor:'white'}}>
              <h1 style={{color:'black'}}>
                <big>
                  <i>
                    {ProjectJson.Name}
                  </i>
                </big>
              </h1>
              <VerticalTimeline >
              {
                ProjectJson.data.map((tempProject)=>{
                  return(
                    <React.Fragment>
                    {
                        tempProject.index %2 === 0 ?
                        (
                            <VerticalTimelineElement className="vertical-timeline-element--work"  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} 
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date={ <Chip icon={<KeyboardIcon/>} label ={tempProject.year} color="primary" size="medium" style={{border: "solid 4px", borderColor:'white'}}/>
                                } 
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} icon={<GitHubIcon/>}
                            >
                            <h3 className="vertical-timeline-element-title">
                              <u>
                                <i>
                                  <a href={tempProject.link} style={{ textDecoration: 'none', color:'white'}}>
                                    <LinkIcon/>
                                      {tempProject.name}
                                  </a>
                                </i>
                              </u>
                            </h3>
                            <p>
                              <small>
                                {tempProject.description}
                              </small>
                            </p>
                            <p>
                              <large>
                                <u>
                                  Methodology
                                </u>
                              </large>
                            </p>
                            { 
                              tempProject.methodology.map((tempMethodology)=>{
                                return(
                                  <p1 style={{color:'white'}}>
                                    <small>
                                      <i>
                                        {tempMethodology.info}
                                      </i>
                                      <br></br>
                                    </small>
                                  </p1>
                                )
                              })
                            }
                            <p>
                              <large>
                                <u>
                                  Related Course
                                </u>
                              </large>
                            </p>
                            <p1 style={{color:'white'}}>
                              <small>
                                <i>
                                  {tempProject.relatedCourse}
                                </i>
                              </small>
                            </p1>
                          </VerticalTimelineElement>
                          )
                          :
                          (
                            <VerticalTimelineElement className="vertical-timeline-element--work"  
                              contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} 
                              contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
                              date={<Chip icon={<KeyboardIcon/>} label ={tempProject.year} color="primary" size="medium" style={{border: "solid 4px", borderColor:'white'}}/>} iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} icon={<DeveloperModeIcon/>}
                            >
                            <h3 className="vertical-timeline-element-title">
                              <u>
                                <i>
                                  <a href={tempProject.link} style={{ textDecoration: 'none', color:'black'}}>
                                    <LinkIcon />
                                      {tempProject.name}
                                  </a>
                                </i>
                              </u>
                            </h3>
                            <p style={{color:'black'}}>
                              <small>
                                  {tempProject.description}
                              </small>
                              <p>
                                <large>
                                  <u>
                                    Methodology
                                  </u>
                                </large>
                              </p>
                            </p>
                            {
                              tempProject.methodology.map((tempMethodology)=>{
                                return(
                                  <p1 style={{color:'black'}}>
                                    <small>
                                      <i>
                                        {tempMethodology.info}  
                                      </i>
                                      <br></br>
                                    </small>
                                  </p1>
                                )
                              })
                            }
                            <p style={{color:'black'}}>
                              <large>
                                <u>
                                  Related Course
                                </u>
                              </large>
                            </p>
                            <p1 style={{color:'black'}}>
                              <small>
                                <i>
                                  {tempProject.relatedCourse}
                                </i>
                              </small>
                            </p1>
                            </VerticalTimelineElement>
                          )
                    }
                </React.Fragment>
                )            
              })
            }
            </VerticalTimeline>
            </Grid>
          </Grid>
        </React.Fragment>
    </div>
    );
}
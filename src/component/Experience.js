import React from 'react';
import Grid from '@material-ui/core/Grid';
import ExperienceJson from '../json/Experience.json';
import Chip from '@material-ui/core/Chip';
import WorkIcon from '@material-ui/icons/Work';

export default function Experience() {
    return(
        <div style={{background:'lightGray',minHeight:'-webkit-fill-available'}}>
         <React.Fragment>
              <h1 style={{color:'black'}}>
                  <em>
                      {ExperienceJson.Name}
                  </em>
              </h1>
              <Grid container direction="row" justify="center" alignItems="center" style={{ background:'lightGray',border: "dotted 4px", borderColor:'lightGray'}}>  
                {
                    ExperienceJson.data.map((exp) =>{
                        return(
                          <Grid item xs={12} style={{border:"dotted 4px",borderColor:'lightGray',borderBlockEndColor:'white'}}>
                                <Grid item xs={12}>
                                  <br></br>
                                  <p1 style={{color:'black'}}>
                                    <b>
                                      <big>
                                        {exp.title}
                                      </big>
                                    </b>
                                  </p1>
                                </Grid>
                                <Grid item xs={12}>
                                    <p1 style={{color:'black'}}>
                                        <small>
                                          {exp.company}
                                        </small>
                                    </p1>
                                </Grid>
                                <Grid item xs={12}>
                                  <Chip icon={<WorkIcon style={{color:'white'}}/>} label ={exp.year} color="primary" size="medium" style={{border: "solid 4px", borderColor:'white'}}/>
                                </Grid>
                                <Grid item xs={12}>
                                  <br></br>
                                  <p1 style={{color:'black'}}>
                                        <u>
                                          <b>
                                            <big>
                                              {exp.position}
                                            </big>
                                          </b>
                                        </u>
                                      
                                  </p1>
                                </Grid>
                                {
                                  exp.detail.map((tempItem)=>{
                                    return(
                                        <Grid item xs={12}>
                                          <li style={{color:'black'}}>
                                            <big>
                                              {tempItem.info}
                                            </big>
                                          </li>
                                        </Grid>
                                      
                                    )
                                  })
                                }
                              <br></br>
                            </Grid>
                        )
                    })
                }
                </Grid>
              </React.Fragment>
        </div>
    );
}
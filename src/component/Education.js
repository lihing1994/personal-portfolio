import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EducationJson from '../json/Education.json';
import Chip from '@material-ui/core/Chip';
import SchoolIcon from '@material-ui/icons/School';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
var rootStyle = {
    backgroundColor : 'lighGray',
    color : 'white',
    height : '100vh'
  }
export default function Education() {
    return(
        <div style={{background:'lightGray',minHeight:'-webkit-fill-available'}}>
            <React.Fragment>
            <h1 style={{color:'black'}}>
                <em>
                    
                    {EducationJson.Name}
                    
                </em>
            </h1>
            <Grid container direction="row" justify="center" alignItems="center" style={{ background:'lightGray'}}>
                {
                    EducationJson.data.map((school) =>{
                        return(
                            <React.Fragment> 
                                <Paper elevation={0} style={{background:'lightGray',border:"dotted 4px",borderColor:'lightGray',borderBlockEndColor:'white',width:'100%'}}>
                                <Grid item xs={12}>
                                    <h2 style={{color:'black'}}>
                                        <b>
                                            <a href={school.link} style={{  color:'black'}}>{school.name}</a>
                                        </b>
                                        <br></br>
                                    </h2>
                                    <Chip icon={<SchoolIcon/>} label ={school.year} color="primary" size="medium" style={{border: "solid 4px", borderColor:'white'}}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <p5 style={{color:'black'}}>
                                        <b>
                                            GPA: {school.GPA} /4.0
                                        </b>
                                        <br></br>
                                    </p5>
                                </Grid>
                                <Grid item xs ={12}>
                                    <br></br>
                                    <p1 style={{color:'black'}}>
                                        <CheckCircleIcon/>
                                        <b>
                                            Related Courses
                                        </b>
                                    </p1>
                                </Grid>
                                <Grid item xs={12}></Grid>
                                {
                                    school.realtedCourses.map((courses) =>{
                                        return(
                                            <React.Fragment>
                                                <li style={{color:'black'}}>
                                                    {courses.title}
                                                </li>  
                                            </React.Fragment>
                                        )
                                    })
                                }
                                <Grid item xs ={12}>
                                    {
                                        (school.realtedCourseOnGoing.length > 0 ?
                                            <Grid item xs ={12}>
                                                <br></br>
                                                <p1 style={{color:'grey'}}>
                                                    <b>
                                                        Course about to take
                                                    </b>
                                                </p1>
                                            </Grid>
                                        :
                                            null
                                        )
                                    }
                                </Grid>
                                {
                                    school.realtedCourseOnGoing.map((courseExpectToTake)=>{
                                        return(
                                            <React.Fragment>
                                                <li style={{color:'black'}}>
                                                    {courseExpectToTake.title}
                                                    <AutorenewIcon/>
                                                </li>  
                                            </React.Fragment>
                                        )
                                    })
                                }
                                </Paper>
                                <Grid item xs={12}>
                                    <br></br>
                                </Grid>
                            </React.Fragment>
                        )
                    })
                }
            </Grid>
            </React.Fragment>
        </div>
    );
}
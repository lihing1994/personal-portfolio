import React from 'react'
import myselfImg from '../images/profileImg.png';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import personalJson from '../json/Personal.json';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import 'react-vertical-timeline-component/style.min.css';
import { makeStyles } from '@material-ui/core/styles';
  var rootStyle = {
    backgroundColor : 'lighGray',
    color : 'white',
    height : '100vh'
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
export default function Contact () {
  const classes = useStyles();
    return(
        <div style={rootStyle}>
          <Grid container direction="row" justify="center" alignItems="center" style={{background:'lightGray'}}>
            
            <Grid item >
              <Avatar alt="Hing Li" src={myselfImg} style={{alignSelf:'center',width:'200px',height:'200px'}}/>
            </Grid>
            <Grid xs ={12}>
              <h1 style={{color:'black'}}>
                <big>
                  {personalJson.name}
                </big>
              </h1>
            </Grid>
            <Grid xs ={12}>
              <br></br>
              <Link to = "#" onClick={(e) => {window.location = "mailto:"+personalJson.email; e.preventDefault();}} style={{ textDecoration: 'none' }}>
                <EmailIcon style={{color:'black',fontSize:'30'}}/>
              </Link>
              <Link to = "#" onClick={(e) => {window.location = "mailto:"+personalJson.email; e.preventDefault();}} style={{textDecoration: 'none' ,fontSize:'30px'}}>
                : Email
              </Link>
            </Grid>
            <Grid xs ={12}>
              <br></br>
              <a href={personalJson.linkedin} style={{ textDecoration: 'none' }}>
                <LinkedInIcon style={{color:'black',fontSize:'30'}}/>
              </a>
              <a href={personalJson.linkedin} style={{ textDecoration: 'none',fontSize:'30px'}}>
                : Linkedin
              </a>
            </Grid>
            <Grid xs ={12}>
              <br></br>
              <a href={personalJson.github} style={{ textDecoration: 'none' }}>
                <GitHubIcon style={{color:'black',fontSize:'30'}}/>
              </a>
              <a href={personalJson.github} style={{ textDecoration: 'none',fontSize:'30px'}}>
                : GitHub
              </a>
            </Grid>
            <Grid xs ={12}>
              <br></br>
              <a href={personalJson.ins} style={{ textDecoration: 'none' }}>
                <InstagramIcon style={{color:'black',fontSize:'30' }}/>
              </a>
              <a href={personalJson.ins} style={{ textDecoration: 'none', fontSize:'30px' }}>
              : Instagram
              </a>
            </Grid>
            <Grid xs ={12}>
              <br></br>
              <a href={personalJson.facebook} style={{ textDecoration: 'none'}}>
                <FacebookIcon style={{color:'black', fontSize:'30'}}/>
              </a>
              <a href={personalJson.facebook} style={{ textDecoration: 'none',fontSize:'30px' }}>
              : FaceBook
              </a>
            </Grid>
          </Grid>
        </div>
    );
}
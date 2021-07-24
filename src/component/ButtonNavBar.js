import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import CopyrightIcon from '@material-ui/icons/Copyright';
import personalJson from '../json/Personal.json';
const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    height: theme.spacing(5),
    color: 'white',
    fontWeight: theme.typography.fontWeightBold,
    fontSize:20,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[500],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[400], 0.12),
    },
  },
}))(Chip);

export default function ButtonNavBar() {
  return (
    <div >
    <Grid container direction="row" justify="center" alignItems="center" style={{ background:'gray'}}>
        <Grid item >          
            <Breadcrumbs separator = "   " aria-label="breadcrumb">
                <Link to = "#" onClick={(e) => {window.location = "mailto:"+personalJson.email; e.preventDefault();}} style={{ textDecoration: 'none' }}>
                    <StyledBreadcrumb label="Email" icon={<EmailIcon fontSize="large" />} />
                </Link>
                <a href={personalJson.linkedin} style={{ textDecoration: 'none' }}>
                    <StyledBreadcrumb label="Linkedin" icon={<LinkedInIcon fontSize="large" />} />
                </a>
                <a href={personalJson.github} style={{ textDecoration: 'none' }}>
                    <StyledBreadcrumb label="GitHub" icon={<GitHubIcon fontSize="large" />} />
                </a>
                <a href={personalJson.ins} style={{ textDecoration: 'none' }}>
                    <StyledBreadcrumb label="Instagram" icon={<InstagramIcon fontSize="large" />} />
                </a>   
                <a href={personalJson.facebook} style={{ textDecoration: 'none' }}>
                    <StyledBreadcrumb label="Facebook" icon={<FacebookIcon fontSize="large" />} />
                </a>
            </Breadcrumbs>
        </Grid>
        <Grid item xs ={12}/>
        <Grid item >
          <CopyrightIcon style={{color:'black'}}/>
        </Grid>
        <Grid item >
          <p1 style={{color:'black'}}>
              <big>
                  <b>
                  2021 Hing Li
                  </b>
              </big>
          </p1>
        </Grid>
    </Grid>
    </div>
  );
}

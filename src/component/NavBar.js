import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import {lightBlue } from '@material-ui/core/colors';
import PersonIcon from '@material-ui/icons/Person';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import CodeIcon from '@material-ui/icons/Code';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import BuildIcon from '@material-ui/icons/Build';
import SchoolIcon from '@material-ui/icons/School';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: 'theme.palette.grey[500]',
    height: theme.spacing(5),
    color: 'black',
    fontWeight: theme.typography.fontWeightBold,
    fontSize:20,
    '&:hover, &:focus': {
      backgroundColor: 'white',
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[400], 0.12),
    },
  },
}))(Chip);

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));
  
export default function Navbar() {

  return (
    <div>
    <Grid container direction="row" justify="center" alignItems="flex-start" style={{ background:'grey'}}>
        <Grid item xs={12}>
          <br></br>
        </Grid>
        <Grid item >          
            <Breadcrumbs separator = "   " aria-label="breadcrumb">
                <Link to ="/" style={{textDecoration:'none'}}>
                  <Avatar style={{backgroundColor:'black'}}>HL</Avatar>
                </Link>
                <Link to = "/AboutMe" style={{ textDecoration: 'none' }}>
                    <StyledBreadcrumb label="About Me" icon={<PersonIcon fontSize="small" />} />
                </Link>
                <Link to = "/Education" style={{ textDecoration: 'none' }}>
                    <StyledBreadcrumb label="Education" icon={<SchoolIcon fontSize="small" />} />
                </Link>   
                <Link to = "/Experience" style={{ textDecoration: 'none' }}>
                    <StyledBreadcrumb label="Experience" icon={<CodeIcon fontSize="small" />} />
                </Link>   
                <Link to = "/Projects" style={{ textDecoration: 'none' }}>
                    <StyledBreadcrumb label="Projects" icon={<DesktopMacIcon fontSize="small" />} />
                </Link>   
                <Link to = "/Skills" style={{ textDecoration: 'none' }}>
                    <StyledBreadcrumb label="Skills" icon={<BuildIcon fontSize="small" />} />
                </Link>
                <Link to = "/Contact" style={{ textDecoration: 'none' }}>
                    <StyledBreadcrumb label="Contact" icon={<ContactMailIcon fontSize="small" />} />
                </Link>
            </Breadcrumbs>
        </Grid>
        <Grid item xs ={12}>
          <br></br>
        </Grid>
    </Grid>
    </div>
    
  );
}

import React from 'react'
import NavBar from './NavBar.js';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import myselfImg from '../images/profileImg.png';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
export default function AboutMe () {
    return(
        <div style={{background:'lightGray',minHeight:'-webkit-fill-available'}}>
            <Grid container direction="row" justify="center" alignItems="center" style={{background:'lightGray'}}>
              <Grid item xs={6}>
                <h1 style={{fontSize: '80px'}}>Hi there, </h1>
                <p align="left" style={{fontSize: '35px'}}>
                  &nbsp;&nbsp;&nbsp;&nbsp;I am a current student who majored in Computer Science at <b>San José state university(SJSU)</b> expected to graduate in December 2021.
                  During my academic year at SJSU, I have comprehended some fundamental topics about computer science including <b>
                  data structures and algorithms</b>, <b>object-oriented programming and design</b>, and <b>operating systems</b>. 
                  <br></br>
                  <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;Besides completing fundamental courses, I have completed <b>Introduction to Computer Graphics</b>, <b>Computer Graphics Algorithms</b>, 
                  <b> Computer Game Design and Programming</b>, and <b>Machine learning</b> courses since I have a great interest in Computer Graphic, Gaming Development, and Machine Learning.
                  <br></br>
                  <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;In the Computer Graphics courses, I implemented <b>Ray-Tracing</b> and <b>Ray-Marching</b> algorithms from the scratch and used them to build my rendering system. 
                  Also, I build my personal 2D arcade fighting game without using any gaming engine when I took the Gaming Development course. 
                  During the time I was taking the Machine Learning course, I not only implemented the Hidden Markov Model(HMM) from the scratch, but also obtained some basic 
                  understanding of the concept of Neural Networks, Support Vector Machines, and KNN algorithm. 
                  Besides being a student at SJSU, I am also an Instructional Assistant for CS152 - Programming Paradigms course helping professors grading student's exams, projects, and assignments. 
                  <br></br>
                  <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp; To view my full resume, <a href="https://drive.google.com/file/d/1Pi3oz2i6dia-RxaQjEPPQ-6gEbh77dwb/view?usp=sharing" style={{color:'blue'}}> 
                  click here
                  </a>
                  !
                  
                </p>

              </Grid>
            </Grid>

        </div>
    );
}
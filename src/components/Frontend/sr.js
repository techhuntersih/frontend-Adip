import React from "react";
import $ from "jquery";
import Button from "@material-ui/core/Button";
import './sr.css'
function Sr(){
  return(
<div className="play"><Button>SCREEN READING ACCESS</Button></div>)}
 $(".play").on("click", function ()
 { var audioElement = document.createElement('audio');
 audioElement.setAttribute('src', "/Screen.mp3");  
  audioElement.setAttribute('autoplay', 'autoplay');         //audioElement.load() 
          $.get();   
                audioElement.addEventListener("load", function() 
                {         audioElement.play();         }, true);     
                $(".play").on("click", function (){
                              audioElement.play();     
                                });     
                                  }); 
export default Sr;
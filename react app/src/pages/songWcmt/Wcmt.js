import React from 'react'
import Paper from '@material-ui/core/Paper'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css'
import  { useState, useEffect } from 'react';
import logo from '../../img/wcmt.jpg';

const Wcmt = () => {
    const [markdown, setmarkdown] = React.useState("<p>[Verse 1]<br> You were the one that I found<br> Solla Vantha sollai te po<br> Why didn't you tell me enough<br> Solla Vantha sollai te po<br> <br> I ponder, In closure, Remember<br> The world that is out there for me to find<br> <br> [Chorus]<br> Let me go passing by<br> Let me go come back in time<br> Let me be who I am<br> All through this time<br> <br> Let me go passing by<br> Let me go come back in time<br> Walk in the dark<br> Barefoot in the night<br> <br> [Verse 2]<br> Walking down the way that I found<br> Intha ulakam naan suthavendum<br> Faces with smiles all around<br> Antha vaanam naan parka vendum<br> <br> I’ll run free<br> Into the sea<br> The world and me<br> I don't even know what I will find<br> <br> [Chorus]<br> Let me go passing by<br> Let me go come back in time<br> Let me be who I am<br> All through this time<br> <br> Let me go passing by<br> Let me go come back in time<br> Walk in the dark<br> Barefoot in the night<br> <br> [Outro]<br> Dil Mera khoya, jahaan<br> Dil Mera soya, wahan!<br> Dil Mera khoya, jahaan<br> Dil Mera soya, wahan!</p>");
    const [songname, setsongname] = React.useState("Khoj");
    // useEffect(() => {
    //     fetch("https://localhost:5001/Wcmt")
    //     .then(function(response) {
    //       return response.json();
    //     })
    //     .then(res=> {setmarkdown(res.data); 
    //                   setsongname(res.songName)})
    //     .catch((err)=>console.log("error"));
    //   }, [])
  

  return (
    <Paper>
        <div style={{ backgroundColor: 'white', padding: 90 }}>
        <img src={logo} style={{display: 'block',marginLeft: 'auto', marginRight: 'auto',width: '50%'}} alt="" /> <br />
        <h2>{songname}</h2>
        <ReactMarkdown
            className="markdown-body"
            source={markdown}
            escapeHtml={false}
          />
        </div>
    </Paper>
  )
}
export default Wcmt

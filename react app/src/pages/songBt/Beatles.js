import React from 'react'
import Paper from '@material-ui/core/Paper'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css'
import  { useState, useEffect } from 'react';
import logo from '../../img/beatles.jpg'

const Beatles = () => {
    const [markdown, setmarkdown] = React.useState(" Hey Jude, don't make it bad<br> Take a sad song and make it better<br> Remember to let her into your heart<br> Then you can start to make it better<br> <br> Hey Jude, don't be afraid<br> You were made to go out and get her<br> The minute you let her under your skin<br> Then you begin to make it better<br> <br> And anytime you feel the pain, hey Jude, refrain<br> Don't carry the world upon your shoulders<br></div> For well you know that it's a fool who plays it cool<br> By making his world a little colder<br> <br> Hey Jude, don't let me down<br> You have found her, now go and get her<br> Remember to let her into your heart<br> Then you can start to make it better<br> <br> So let it out and let it in, hey Jude, begin<br> You're waiting for someone to perform with<br> And don't you know that it's just you, hey Jude, you'll do<br> The movement you need is on your shoulder<br> <br> Hey Jude, don't make it bad<br> Take a sad song and make it better<br> Remember to let her under your skin<br> Then you'll begin to make it<br> Better better better better better better, oh<br> <br> Na na na nananana, nannana, hey Jude");
    const [songname, setsongname] = React.useState("hey jude");
    // useEffect(() => {
    //     fetch("https://localhost:5001/Beatles")
    //     .then(function(response) {
    //       return response.json();
    //     })
    //     .then(res=> {setmarkdown(res.data); 
    //       setsongname(res.songName)})
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
export default Beatles

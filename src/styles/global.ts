import {createGlobalStyle} from "styled-components"
import githubBackground from "../assets/github-background.svg"
export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    }
    body, input, button{
        font:16px Roboto, sans-serif;
    }
    body{
        -webkit-font-smoothing:antialiased;
        background-color:#F0F0F5 ;
    }
    #root{
        background:url(${githubBackground}) no-repeat 100% top;
        background-size: 60%;
        min-height:120vh;
        max-width:960px;
        margin:0 auto;
        padding:40px 20px;
    }
    button{
        cursor:pointer;
    }

`
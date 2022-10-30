import styled from "styled-components"

export const Header = styled.div`
    display:flex;
    align-items: center;
    
    a{
        margin-left:auto;
        display:flex;
        align-items: center;
        text-decoration:none;
        color: #a8a8a8;
        transition:color .2s;

        &:hover{
            color:#666;
        }
        svg{
            margin-right:4px;
        }
    }
` 
export const RepositoryInfo = styled.section`
    margin-top:80px;
    header{    
        display:flex;
        align-items:center;
        img{
            height:120px;
            border-radius:50%;
        }
        div{
            margin-left:24px;
            strong{
                font-size:36px;
                color:#3d3d4d;
            }
            p{
                font-size:18px;
                margin-top:8px;
                color:#737380;
            }
        }
    }
    ul{
        display:flex;
        margin-top:40px;
        li{
            list-style: none;

            & + li{
                margin-left:80px;
            }
            strong{
                display:block;
                font-size:36px;
                color:#3d3d4d;
            }
            span{
                display:block;
                margin-top:4px;
                color:#6c6c80;
            }
        }
    }
`
export const Issues = styled.div`
    margin-top:80px;
    a{
        text-decoration: none;
        background-color:#fff;
        display:flex;
        padding:24px;
        align-items: center;
        transition:transform .2s;

        & + a {
            margin-top:16px;
        }

        &:hover{
            transform:translateX(10px);
        }
        
        div{
            margin:0 16px;
            flex:1;

            strong{
                font-size:20px;
                color:#3d3d4d;
            }
            p{
                font-size:18px;
                color:#a8a8b3;
                margin-top:8px;
                
            }
        }
        svg{
            margin-left:auto;
        }
    }
`
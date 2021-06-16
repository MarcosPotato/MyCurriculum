import styled from 'styled-components'
import {  } from 'styled-components'

export const Header = styled.div`
    color: red;
    width: 100%;
    height: 40vh;
    background-color: blue;
    background-color: rgba(130, 87, 229, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        min-width: 1024px;
        height: 40vh;
        position: fixed;
        z-index: -1;
    }

    h1 {
        font-family: sans-serif;
        text-decoration: underline;
        color: #FFFFFF;
        margin-top: -55px;
    }
`

export const Profile = styled.div`
    background-color: #FFFFFF;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    img {
        margin-top: -16vh;
        border-radius: 50%;
        border: 5px solid #FFFFFF;
        width: 210px;
        height: 210px;
    }

    h1 {
        font-family: sans-serif;
        font-size: 3rem;
        margin: 3vh 0;
    }

    div.profile-info {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    fieldset {
        width: 80%;
        height: auto;
        border-radius: 10px;
        margin-bottom: 3vh;
    }

    fieldset legend{
        text-align: center;
        font-family: sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
        
    }

    fieldset p{
        font-family: sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: justify;
    }
`

export const InfoProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    margin-bottom: 5rem;

    & :first-child{
        font-size: 2rem;
        font-weight: 600;
    }

    & :last-child{
        font-size: 1.8rem;
        font-weight: 600;
    }

    & + div{
        margin-left: 20%;
    }
`

export const Certificates = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #424242;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;

    header{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 20px;
    }

    header img{
        border-radius: 50%;
        border: 2px solid rgb(130, 87, 229);
        width: 40px;
        height: 40px;
    }

    header p{
        font-family: sans-serif;
        margin-left: 10px;
        font-size: 1.5rem;
        color: #DDDDDD;
    }

    section {
        padding: 0px 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`
import styled from "styled-components"

export const ExperiencesTelevision = styled.div`
    margin: 0px auto;
    width: 100%;
    max-width: 800px;
    height: auto;
    padding-top: 10px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
        width: 100%;
        max-width: 600px;
        height: 650px;
    }
    
    .experiences-list{
        width: 100%;
        max-width: 350px;
        padding-right: 1.5px;
        height: 230px;
        position: absolute;
        margin-bottom: -170px;
        margin-left: -10%;
        overflow-y: auto;
    }

    @media (max-width: 600px){
        .experiences-list{
            max-width: 330px;
            margin-left: -13%;
        }
    }

    @media (max-width: 555px){
        .experiences-list{
            max-width: 250px;
            margin-left: -13%;
        }
    }

    @media (max-width: 500px){
        .experiences-list{
            max-width: 250px;
            margin-left: -13%;
        }
    }

    @media (max-width: 400px){
        .experiences-list{
            max-width: 200px;
            margin-left: -13%;
        }
    }
`

export const ExperienceList = styled.div`
    width: 100%;
    padding-top: 6.5px;
    padding-bottom: 6.5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    p {
        font-family: sans-serif;
        font-size: 1.5rem;
        max-width: 100px;
    }

    div{ 
        img{
            width: 25px;
            height: 25px;
            transition: 150ms;
        }

        img:hover{
            transform: scale(110%)
        }
    }

    @media (max-width: 400px){
        p{
            font-size: 1.2rem;
        }

        div{
            img {
                width: 20px;
                height: 20px;
            }
        }
    }
`
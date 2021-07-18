import styled from 'styled-components'

export const Header = styled.div`
    color: red;
    width: 100%;
    height: 40vh;
    background-color: blue;
    background-color: rgba(130, 87, 229, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    .header-info{
        width: 100%;
        max-width: 800px;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;

        .header-title{
            h1 {
                font-family: sans-serif;
                text-decoration: underline;
                color: #FFFFFF;
                margin-top: -55px;
            }
        }

        .profile-image {
            border-radius: 50%;
            border: 5px solid #FFFFFF;
            margin-top: 10px;
            width: 210px;
            height: 210px;
            margin-bottom: -90px;
        }
    }

    .backgorund-image {
        width: 100%;
        min-width: 1024px;
        height: 40vh;
        position: fixed;
        z-index: -1;
    }

    @media(min-width: 700px){
        height: 93vh;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .backgorund-image {
            height: 100vh;
        }

        .header-info {
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            
            .header-title {
                margin-right: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                h1{
                    margin-top: 0px;
                    text-decoration: none;
                }

                p {
                    font-size: 4rem;
                    color: #FFFFFF;
                    text-decoration: underline;
                    font-family: sans-serif;
                }

                &:nth-child(2) {
                    font-size: 1rem;
                }
            } 

            .profile-image {
                margin-top: 0px;
                width: 210px;
                height: 210px;
                margin-bottom: 0px;
            }
        }
    }
`

export const Profile = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: sans-serif;
        font-size: 3rem;
        margin: 4vh 0;
    }

    div.profile-header{
        display: none;

        @media(min-width: 700px){
            display: block;
            width: 100%;
            max-width: 700px;
            margin-top: -60px;
            padding-bottom: 20px;
            margin-bottom: 30px;
            border-bottom: 2px solid #737373;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
    
            & :first-child{
                font-family: Montserrat, sans-serif;
                font-weight: 800;
            }
    
            & :last-child{
                font-family: Montserrat, sans-serif;
                font-weight: 500;
                font-size: 2rem;
            }
    
        }
    }

    div.profile-info {
        width: 100%;
        max-width: 700px;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        @media(min-width: 700px){
            padding-left: 50px;
            padding-right: 50px;
        }
    }

    fieldset {
        width: 80%;
        max-width: 700px;
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

export const NameProfile = styled.div`
    display: none;

    @media(min-width: 700px){
        display: block;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-family: sans-serif;
        margin-bottom: 5rem;

        & :first-child{
            font-size: 2rem;
            font-weight: 600;
        }

        & :last-child{
            font-size: 1.8rem;
            font-weight: 400;
        }

        & + div{
            margin-left: 20%;
        }  
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

    @media(min-width: 700px){
        align-items: flex-start;

        & :first-child{
            font-size: 2rem;
            font-weight: 600;
        }

        & :last-child{
            font-size: 1.8rem;
            font-weight: 400;
        }
    }
`

export const Certificates = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: #424242;
    width: 100%;

    .certificates-section{
        display: flex;
        flex-direction: column;
        background-color: #424242;
        width: 100%;
        max-width: 800px;
    
        header {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 5px 20px;
    
            img {
                border-radius: 50%;
                border: 2px solid rgb(130, 87, 229);
                width: 40px;
                height: 40px;
            }

            p {
                font-family: sans-serif;
                margin-left: 10px;
                font-size: 1.5rem;
                color: #DDDDDD;
            }
        }

        section {
            padding: 0px 5px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;

            .change-certificate-button {
                margin: 0 2px;
                background-color: #FFFFFF00;
                border: none;
                height: 30px;
                margin: auto 0px;

                svg {
                    width: 15px;
                    height: 15px;
                    color: #FFFFFF; 
                    transition: 150ms;

                    &:hover{
                        transform: scale(150%)
                    }
                }
            }
        }
    }
`

export const Habilities = styled.div`
    width: 100%;
    background-color: #FFFFFF;
`

export const Footer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #171717;

    .link-tree{
        width: 100%;
        height: 80px;
        max-width: 800px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items:center;

        a {
            background-color: #FFFFFF;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 200ms;

            svg {
                width: 27px;
                height: 27px;
                color: #000000;
            }
        }

        a:hover{
            transform: scale(110%);
        }

        & a:last-child{
            img{
                width: 27px;
                height: 30px;
            }
        }

        
    }

`
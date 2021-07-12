import styled from 'styled-components'

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
    width: 100%;

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
        max-width: 800px;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
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
            padding: 0px 10px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;

            button {
                margin: 0 2px;
                background-color: #FFFFFF00;
                border: none;

                svg {
                    width: 30px;
                    height: 30px;
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

            svg {
                width: 27px;
                height: 27px;
            }

            img {
            }
        }
    }

`
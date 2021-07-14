import styled from 'styled-components'

export const Certificate = styled.div`
    background-color: #FFFFFF;
    margin: 30px 5px;
    width: 100%;
    max-width: 500px;
    border-radius: 25px;
    height: 720px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    overflow: hidden;

    div.card-header {
        img.background-image {
            width: 100%;;
            height: 400px;
        }
    
        img.certificate-logo-image {
            width: 110px;
            height: 110px;
            border-radius: 10px;
            border: 2px solid #FFFFFF;
            background-color: #4a4a4a;
            margin-top: -60px;
            margin-left: 30px;
        }
    }

    .certificates-info {
        width: 100%;
        display: flex;
        flex-direction: column !important;
        justify-content: flex-start !important;
        align-items: flex-start !important;    
        
        div{
            margin-top: 10px;
            width: 100%;
            padding: 10px 10px 5px 10px;
            color: #3d3d3d;

            h1 {
                font-size: 2rem;
                font-family: sans-serif;
                margin-bottom: 4vh;
            }

            p {
                font-size: 1.7rem;
                font-family: sans-serif;
                margin-top: 1.5vh;

                a {
                    text-decoration: none;
                    color: #3d3d3d;
                }
            }
        }

    }

    footer.certificate-card-footer {
        width: 95%;
        padding-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        .certificate-link {
            width: 90%;
            display: flex;
            justify-content: flex-end;
            transition: 150ms;
            margin: auto 0px 0px 0px;
    
            a {
                font-family: sans-serif;
                font-size: 1.5rem;
                font-weight: 500;
                cursor: pointer;
    
                svg {
                    margin-bottom: -4px;
                }
    
            }
            
            &:hover{
                color: #2e1885;
            }
        }
    }
`
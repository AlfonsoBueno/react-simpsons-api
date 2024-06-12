import styled from "styled-components";

const Card = styled.div`
    position: relative;
    width: 42.5em;
    height: 18em;
    background-color: rgba(255,255,255,0.3);
    backdrop-filter: calc(10px);
    border-radius: 15px;
    
    box-shadow: 0 25px 45px rgb(0 0 0 / 10%);
    border: 1px solid rgba(255,255,255,0.2);

    display: flex;
    align-items: center;
    justify-content: space-around;

    .Card--Contenido{
        position: absolute;
        width:65%;
        text-align: center;
        font-size: 1.8rem;
        letter-spacing: 0.05rem;
        font-family: 'Pacifico', cursive;
        color:#333;

    }
    
    .Card--Nombre{
        opacity: 0.7;
        text-align: center;
        position: absolute;
        bottom: 5px;
        font-weight: bold;
        text-transform: uppercase;
    }

    img{ 
        max-width: 40%;
        max-height: 25rem;
        position: absolute;
        border:0;
    }

   .derecha{
        right:0;
        }

    .izquierda{
            left:0;
        }

    .txt--derecha{
        right: 20px;
    }
    .txt--izquierda{
        left:20px;
    }
`;

const Cargador=styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    opacity: 1;
    transition;all 1s;
    border: 6px solid #ffde00;
    box-shadow: 0 25px 45px rgb(0 0 0 / 10%);
    
`;


export {Card,Cargador}
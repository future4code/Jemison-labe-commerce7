import React from "react";
import { DivPaiCarrinho } from "../style";

function Carrinho(props){


    return(
        <DivPaiCarrinho> 
            <h3>Carrinho:</h3>
            {props.itens.map(item => <p>{item.nome}</p>)}
        </DivPaiCarrinho>  
    )
}

export default Carrinho;
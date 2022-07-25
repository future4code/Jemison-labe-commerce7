import React from "react";
import { produtos } from "../MockDeDados";
import { CardContainer, DivMain, DivPai, DivPaiCard, DivSelect, FotoProduto, Label, Select} from "../style"
import { useState } from "react";
import Filtros from "./Filtros";
import Carrinho from "./Carrinho";


function Home(){

    const [itens, setItens] = useState([])
    const [cards] = useState (produtos)
    const [busca, setBusca] = useState ("")
    const [precoMin, setPrecoMin] = useState(-Infinity)
    const [precoMax, setPrecoMax] = useState(+Infinity)
    const [sortNome, setSortNome] = useState("nome")
    const [ordem, setOrdem] = useState("asc")
    

   const handleAddItem = (item)=> {
    setItens([...itens, item])
   }

    return(
        <DivPai>

            <Filtros
                busca = {busca}
                precoMin = {precoMin}
                precoMax = {precoMax}
                setBusca = {setBusca}
                setPrecoMin = {setPrecoMin}
                setPrecoMax = {setPrecoMax} 
            />

        

            <DivMain>

                <Label>Ordenar por:</Label>
                <Label>Ordenar por:</Label>
                
                <DivSelect>
                    <Select
                        value={sortNome}
                        onChange={(ev)=>{setSortNome(ev.target.value)}}>
                        <option value="nome" >Descrição</option>
                        <option value="valor" >Preço</option>
                    </Select>

                    <Select
                        value={ordem}
                        onChange={(ev)=>{setOrdem(ev.target.value)}}
                    >
                        <option value="asc">Crescente</option>
                        <option value="des">Decrescente</option>
                    </Select>
                </DivSelect>

                <DivPaiCard>
                
                    {cards.filter((card) => {
                            return (card.valor >= precoMin || precoMin === "") && 
                            (card.valor <= precoMax || precoMax === "") &&
                            (card.nome.toLowerCase().includes(busca.toLowerCase()))
                        })
                        
                        .sort((cardAtual, proximoCard) => {
                            switch(sortNome) {
                                case "valor":
                                    return cardAtual.valor - proximoCard.valor
                                default :
                                    return cardAtual.nome.localeCompare(proximoCard.nome)
                            }
                        })
                        .sort(() => {
                            if(ordem === "asc")
                                return 0
                            else
                                return -1
                        })
                        .map((card) => {
                            return (
                                <CardContainer key={card.id}>
                                <FotoProduto src={card.imagem} alt={'Imagem do produto'}/>
                                <h4>{card.nome}</h4>
                                <h2>{card.valor.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</h2>
                                <button onClick={ ()=>{handleAddItem(card)}} >Adicionar ao carrinho</button>
                                </CardContainer>
                                )
                        })
                    }
                </DivPaiCard> 
            </DivMain>
            <Carrinho itens={itens}/>
        </DivPai>   
    )
}

export default Home;
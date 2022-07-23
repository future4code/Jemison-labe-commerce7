import styled from 'styled-components'

export const Header = styled.header `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: blueviolet;
    color: white;
`

export const Main = styled.main `
    display: flex;
    flex-direction: column;
    background-color: bisque;
`

export const DivPai = styled.div `
    display: flex;
    flex-direction: row;
`
export const DivPaiFiltros = styled.div `
    
    display: flex;
    flex-direction: column;
    padding: 3vh;    
`
export const DivMain = styled.div `
    display: flex;
    flex-direction: column;
`

export const DivSelect = styled.div `
    display: grid;
    grid-template-columns: 11vw 2vw;
    grid-column-gap: 1px;
    margin-top: 2vh;

`
export const Select = styled.select `
    width: 10vw;
    margin-left: 3vw;   
`

export const Label = styled.label `
    margin-left: 3vw;
    margin-top: 40px;
    margin-bottom: 2px;
`

export const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 60vh;
    border-style: groove;
    padding: 1vh;
    border-color: blue;
`
export const DivPaiCard = styled.div `
    display: grid;
    grid-template-columns: 45vh 45vh 45vh;
    justify-content: space-between;
    padding: 5vh;
    grid-column-gap: 2vh;
    grid-row-gap: 2vh;
`

export const FotoProduto = styled.img `
    width: 40vh;
    height: 35vh;
`

export const DivPaiCarrinho = styled.div `
    display: flex;
`





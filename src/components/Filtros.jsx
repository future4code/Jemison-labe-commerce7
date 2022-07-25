import { DivPaiFiltros } from "../style";


function Filtros(props){


    return(
        <DivPaiFiltros>
            <h3>Filtros</h3>

            <label>Busca por nome</label>

            <input 
                placeholder="Pesquisa"
                value={props.busca}
                onChange={(ev)=>{props.setBusca(ev.target.value)}}
            /> 

            <label>Valor minimo</label>

            <input 
                placeholder="Valor mínimo"
                type="number"
                value={props.precoMin}
                onChange={(ev)=>{props.setPrecoMin(ev.target.value)}}
                />

            <label>Valor máximo</label>

            <input 
                placeholder="Valor máximo"
                type="number"
                value={props.precoMax}
                onChange={(ev)=>{props.setPrecoMax(ev.target.value)}}
            />       

        </DivPaiFiltros>
    )
}

export default Filtros;
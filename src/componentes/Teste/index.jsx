export default function Teste(props){
    return(
        <>
            <h1>Título do texto</h1>
            <p>Olá, {props.nome}. Você tem {props.idade} anos de idade</p>
        </>
    )
}
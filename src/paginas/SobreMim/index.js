import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim(){
    return(
        <PostModelo
            fotoCapa={fotoCapa}
            tituloPost={"Sobre mim"}
        >
            <h3 className={styles.subtitulo}>
                Olá, meu nome é Lucas
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Foto do Lucas Baptista da Silva"
                className={styles.fotoSobreMim}
            />
            
            <p className={styles.paragrafo}>Muito prazer, meu nome é Lucas Baptista da Silva, e sou desenvolvedor front-end. Desde a infância, sempre tive interesse na área de tecnologia, e esse interesse cresceu quando fui apresentado à programação. Minha primeira experiência nesse campo foi através do Curso de Python ministrado por Gustavo Guanabara.</p>

            <p className={styles.paragrafo}>Minha conexão com essa área se reforçou quando iniciei minha graduação em análise e desenvolvimento de sistemas no ano passado. Contudo, percebi que o ritmo da faculdade não estava totalmente alinhado com as demandas do mercado de trabalho. Foi nesse momento que decidi investir meu tempo estudando intensivamente na Alura.</p>

            <p className={styles.paragrafo}>No momento, estou realizando um estágio como Analista de Suporte na Softcase, enquanto aproveito meu tempo livre para estudar as tecnologias da biblioteca React. Minhas metas futuras envolvem a união do React com Typescript, o desenvolvimento de competências no uso do Next.js, a busca por um entendimento mais profundo do Node.js e a exploração de outras tecnologias que despertem meu interesse ao longo da minha jornada de estudos!</p>

            <p className={styles.curiosidade}>CURIOSIDADES</p>

            <p className={styles.paragrafo}>Meus Hobbies:</p>
            <ul className={styles.listaHobbies}>
                <li className={styles.ItensListaHobbies}>Gosto de ver vídeos sobre astronomia, ciências e teorias físicas, como os vídeos que tem no canal Ciência Todo dia, afinal quem nunca ficou imaginando se o famoso <abbr title="Schrödinger">gato</abbr> estaria vivo ou morto :D.</li>
                <li className={styles.ItensListaHobbies}>Eu me divirto muito jogando diversos jogos com meus amigos, como Rocket League, Valorant, Fifa e, é claro, o adorado CS:GO. Nesse contexto, a diversão é apenas uma parte da equação!</li>
                <li className={styles.ItensListaHobbies}>Tenho um grande amor por assistir séries e filmes com minha a minha Mãe, além de sair para me divertir ou jogar futebol com meus amigos. Essa é a minha maneira de recarregar as energias, para sempre manter a motivação de progredir e me tornar uma pessoa melhor a cada dia que se passa.</li>
            </ul>
            
        </PostModelo>
    )
}
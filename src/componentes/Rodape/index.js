import styles from "./Rodape.module.css";
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg';

export default function Rodape(){
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            <p>Site desenvolvidor por <abbr title="lucasbaptistasilva.dev@gmail.com" className={styles.dev}>Lucas Baptista</abbr> | <strong>2023</strong></p>
        </footer>
        
    )
}
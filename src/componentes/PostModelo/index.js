import styles from './PostModelo.module.css';

export default function PostModelo({ fotoCapa, tituloPost, children }) {
    return (
        <artcile className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            >
            </div>

            <h2 className={styles.titulo}>{tituloPost}</h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </artcile>
    )
}
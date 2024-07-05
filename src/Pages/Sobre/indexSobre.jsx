import styles from './sobre.module.css';
import html from './imagens/icon_html5.svg'
import css from './imagens/icon_css3.svg'
import js from './imagens/icon_js.svg'
import node_js from './imagens/icon_node_js.svg'
import sql from './imagens/icon_sql.svg'
import react from './imagens/icon_react.svg'
import avatar from './imagens/me.png'

function Sobre() {
    return (
        <section className={styles.sobre}>
            <figure>
                <img className={styles.img_home} src="../sobre.svg"></img>
            </figure>
            <div className={styles.bio}>
                <img src={avatar} className={styles.avatar}></img>
            
            <div className={styles.texto}>
                <p> Olá seja bem vindo(a). </p>

                <p>Prazer, me chamo <span> Denis Henrique Rodrigues </span>
                    um Carioca da Gema de 39 anos. <br/> Sou formado como Técnico em Mecânica Industrial e Tecnólogo em Gastronomia (Cozinhar é a minha maior paixão depois do <strong><u>Flamengo</u></strong> é claro!) </p>
                    <p> Hoje busco estudar sobre Tecnologia de forma autonoma acompanhando vídeos e outros conteúdos na busca de uma transição de carreira para área de TI.</p>
                    <p>Logo um futuro Desenvolver Fronte-end.</p>
 
            </div>
            </div>

            <div className={styles.techs}>
                <h3> Techs </h3>
                <div className={styles.icones}>
                    <img src={html}></img>
                    <img src={css}></img>
                    <img src={js}></img>
                    <img src={react}></img>
                    <img src={sql}></img>
                    <img src={node_js}></img>
                </div>

            </div>
        </section>
    )
}

export default Sobre
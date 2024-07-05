import styles from './card.module.css'
import { TiHtml5 } from "react-icons/ti";
import { TfiCss3 } from "react-icons/tfi";
import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import { TbArrowBigRightLines } from "react-icons/tb";

function Card({name, description, html_url}) {
    return(
        <section className={styles.card}>
            <h3> {name} </h3>
            <p> {description} </p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                <TiHtml5 />
                <TfiCss3 />
                <FaNodeJs />
                <RiReactjsFill />
                </div>
                
                <a href ={html_url} className={styles.botao}
                    target="_blank">
                <TbArrowBigRightLines />

                </a>
            </div>
        </section>
    )
}

export default Card
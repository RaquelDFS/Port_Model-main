
import styles from './contatos.module.css';
import { TfiEmail, TfiYoutube, TfiInstagram } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";

function Contatos() {
    return (
        <>

                <section className={styles.contatos}>
            
            <h1>Contatos</h1>
                <figure>
                    <img className={styles.img_home} src="../contato.svg"></img>
                </figure>
            <h3> Entre em Cotato Comigo! </h3>
            <div className={styles.icones}>
                <a href='denis.rodrigues@aluno.senai.br' target='_blank' rel='noopener'> 
                    <TfiEmail /> </a>
                <a href='https://x.com/?lang=pt-br' target='_blank' rel='noopener'> 
                    <FaXTwitter /> </a>
                <a href='https://github.com/' target='_blank' rel='noopener'> 
                    <FiGithub /> </a>
                <a href='https://facebook.com/' target='_blank' rel='noopener'> 
                    <SlSocialFacebook /> </a>
                <a href='https://linkedin.com/' target='_blank' rel='noopener'> 
                    <SlSocialLinkedin /> </a>
                <a href='https://www.youtube.com/' target='_blank' rel='noopener'> 
                    <TfiYoutube /> </a>
                <a href='https://www.instagram.com/' target='_blank' rel='noopener'> 
                    <TfiInstagram /> </a>
            </div>
            
            </section>    

        </>
    );
}

export default Contatos;

// _blank = abre uma nova página de navegação
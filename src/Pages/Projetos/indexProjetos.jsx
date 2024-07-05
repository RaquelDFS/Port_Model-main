import styles from './projetos.module.css';
import Card from '../../Components/Card/indexCard'
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Projetos() {
    const [repositories, setRepositories] = useState([])
    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/DHSRR/repos')

            const data = await response.json();
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])

    return (
        <section className={styles.projetos}>
            <figure>
                <img className={styles.img_home} src="../dev_ia.svg"></img>
            </figure>

            <h2> Projetos </h2>

            {repositories.length > 0 ?
                (
                <section className={styles.lista}>
                    {
                        repositories.map((repo) => (
                            <Card
                                key={repo.id}
                                name={repo.name}
                                description={repo.description}
                                html_url={repo.html_url}

                            />
                        ))
                    }
                </section>
                )
                
                : (<p>Carregando Repositórios</p>)
            }
        
        </section>
    )
}

export default Projetos

// no const response = await fetch('https://api.github.com/users/DHSRR/repos') eu poderia colocar como
//      const response = await fetch('https://api.github.com/users/DHSRR/repos?page=1&per_page=2') para limitar os projetosas página
import { useEffect, useState } from "react";
import css from "../Styles/Home.module.css";
import axios from "axios";

export function Home() {
    const [personagem, setPersonagem] = useState([]);

    async function obter_personagens() {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/v1/legos/");

            setPersonagem(response.data);
        }
        catch(error) {
            console.error("Erro ao buscar personagem.", error);
        }
    }

    useEffect(() => {
            obter_personagens();
    }, []);

    return (
        <main>
            <section>
                <h1 className={css.boasVindas}>Seja bem vindo(a) à LegoAPI!</h1>
                <p className={css.descricao}>Aqui, você pode criar, editar e deletar seus personagens de lego favoritos. 😃</p>
            </section>
            <section className={css.personagens}>
                <section className={css.fileiraCards}>
                    {personagem.map((personagem, id) => (
                        <section key={id} className={css.cardPersonagem}>  
                            <h2>Nome: {personagem.nome}</h2>
                            <p>Jogo: {personagem.jogo}</p>
                            <p>Roupa: {personagem.roupa}</p>
                            <p>Habilidade: {personagem.habilidade}</p>
                            <p>Pulo duplo: {personagem.pulo_duplo ? "Sim": "Não"}</p>
                            <p>Acessório: {personagem.acessorio}</p>
                            <p>Foto:</p>
                            <img src={personagem.foto} alt="Foto do personagem"/>
                            <div className={css.botoes}>
                                <button type="button">Editar</button>
                                <button type="button">Excluir</button>
                            </div>   
                        </section>
                    ))}
                </section>
            </section>
        </main>
    );
}
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeletarPersonagemModal } from "../Components/DeletarPersonagemModal";
import css from "../Styles/Home.module.css";
import axios from "axios";

export function Home() {
    const [personagem, setPersonagem] = useState([]); //Estado que armazena as informações dos personagens
    const [deletarPersonagem, setDeletarPersonagem] = useState(false); //Estado que armazena o estado do modal
    const [id, setId] = useState(null); //Estado que armazena o ID dos personagens

    const navigate = useNavigate(); //useNavigate permite navegações no site

    async function obter_personagens() {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/v1/legos/"); //Pegando os dados da API via GET

            setPersonagem(response.data); //Exibindo as informações de cada personagem
        }
        catch(error) {
            console.error("Erro ao buscar personagem.", error);
        }
    }

    useEffect(() => { //Chamando a função assíncrona para atualizar os personagens
            obter_personagens();
    }, []);

    return (
        <main>
            <section>
                <h1 className={css.boasVindas}>Seja bem vindo(a) à LegoAPI!</h1>
                <p className={css.descricao}>Aqui, você pode criar, editar e deletar seus personagens de lego favoritos. 😃</p>
                <div className={css.botao}>
                    <button type="button" onClick={() => navigate("/criarPersonagem")}>Criar personagem</button>
                </div>
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
                                <button type="button" onClick={() => {
                                    // Salvando os dados para enviar para os campos do formulário PUT
                                    localStorage.setItem("id", personagem.id);
                                    localStorage.setItem("nome", personagem.nome);
                                    localStorage.setItem("jogo", personagem.jogo);
                                    localStorage.setItem("roupa", personagem.roupa);
                                    localStorage.setItem("habilidade", personagem.habilidade);
                                    localStorage.setItem("pulo_duplo", personagem.pulo_duplo.toString());
                                    localStorage.setItem("acessorio", personagem.acessorio);
                                    localStorage.setItem("foto", personagem.foto);
                                    navigate("/editarPersonagem")
                                }}>
                                    Editar
                                </button>
                                <button type="button" onClick={() => {
                                    setId(personagem.id);
                                    setDeletarPersonagem(true); //Exibindo o modal após clicar no botão "sim"
                                }}>
                                    Excluir
                                </button>
                            </div>
                        </section>
                    ))}
                    {/* Gerando o modal de deletar personagem */}
                    <DeletarPersonagemModal 
                        openModal={deletarPersonagem} 
                        closeModal={() => setDeletarPersonagem(false)} 
                        atualizarCards={obter_personagens}
                        id={id}/>
                </section>
            </section>
        </main>
    );
}
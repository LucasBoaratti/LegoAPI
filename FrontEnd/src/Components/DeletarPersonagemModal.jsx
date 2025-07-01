import axios from "axios";
import css from "../Styles/DeletarPersonagemModal.module.css";
import { useNavigate } from "react-router-dom";

export function DeletarPersonagemModal({ openModal, closeModal, atualizarCards, id }) {
    if(!openModal) {
        return null;
    }

    const navigate = useNavigate();

    async function deletar_personagem() {
        const lego_id = id;

        try {
            await axios.delete(`http://127.0.0.1:8000/api/v1/legos/${lego_id}`);

            alert("Personagem excluido com sucesso!");

            closeModal();

            atualizarCards();

            navigate("/");
        }
        catch(error) {
            console.error("Erro ao deletar personagem: ", error.response?.data || error.message);
        }
    }

    return (
        <main className={css.conteudoPrincipal}>
            <section className={css.modal}>
                <p>Tem certeza que deseja excluir esse personagem?</p>
                <div className={css.botoes}>
                    <button 
                        type="submit"
                        onClick={deletar_personagem}>
                        Sim
                    </button>
                    <button 
                        type="button"
                        onClick={closeModal}>
                        Não
                    </button>
                </div>
            </section>
        </main>
    );
}
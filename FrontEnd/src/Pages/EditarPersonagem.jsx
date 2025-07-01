import css from "../Styles/EditarPersonagem.module.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Criando as regras de validações para os campos do formulário
const schemaPUT = z.object({
    nome: z.string()
        .min(1, "O campo nome não pode estar vazio."),
    jogo: z.string()
        .min(1, "O campo jogo não pode estar vazio."),
    roupa: z.string()
        .min(1, "O campo roupa não pode estar vazio."),
    habilidade: z.string()
        .min(1, "O campo habilidade não pode estar vazio."),
    pulo_duplo: z.enum(["true", "false"]),
    acessorio: z.string()
        .min(1, "O campo acessório não pode estar vazio."),
    foto: z.string()
        .min(1, "O campo foto não pode estar vazio."),
});

export function EditarPersonagem() {
    const navigate = useNavigate(); //useNavigate permite navegações no site

    const { //Configurações do formulário
        register, //Conecta os inputs no formlário
        handleSubmit, //Lida com o evento do formulário
        setValue, //Seta os valores vindo de outros campos do formulário
        formState: { errors }, //Armazena mensagens de erro no errors
    } = useForm({
        resolver: zodResolver(schemaPUT) 
    });

    async function editar_personagem(data) {
        const dados = { //Pegando todos os dados da API
            ...data,
        }

        const lego_id = localStorage.getItem("id");

        try {
            await axios.put(`http://127.0.0.1:8000/api/v1/legos/${lego_id}`, dados); //Enviando os dados para a API de legos via PUT

            alert("Personagem editado com sucesso!");

            navigate("/"); //Redireciona para a página inicial
        }
        catch(error) {
            console.error("Erro ao editar personagem: ", error.response?.data || error.mensage); //Mensagem de erro que aparece exatamente o erro em algum campo do formulário
        }
    }

    useEffect(() => { //Após gerar o componente, é colocado as informações já registradas nos campos do formulário para uma melhor visualização
        setValue("nome", localStorage.getItem("nome") || "");
        setValue("jogo", localStorage.getItem("jogo") || "");
        setValue("roupa", localStorage.getItem("roupa") || "");
        setValue("habilidade", localStorage.getItem("habilidade") || "");
        setValue("pulo_duplo", localStorage.getItem("pulo_duplo") || "false");
        setValue("acessorio", localStorage.getItem("acessorio") || "");
        setValue("foto", localStorage.getItem("foto") || "");
    }, []);

    return (
        <main className={css.conteudoPricipal}>
            <section className={css.formulario}>
                <h1>Editar personagem</h1>
                <form onSubmit={handleSubmit(editar_personagem)}>
                    <label htmlFor="nome">Nome:</label> <br />
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        {...register("nome")}
                        placeholder="Nome do personagem"/> 
                    <br />
                    {errors.nome && <p>{errors.nome.message}</p>} <br />
        
                    <label htmlFor="jogo">Jogo:</label> <br />
                    <input 
                        type="text" 
                        name="jogo"                             
                        id="jogo" 
                        {...register("jogo")}
                        placeholder="Jogo o qual personagem está"/> 
                    <br />
                    {errors.jogo && <p>{errors.jogo.message}</p>} <br />
        
                    <label htmlFor="roupa">Roupa:</label> <br />
                    <input 
                        type="text" 
                        name="roupa" 
                        id="roupa"
                        {...register("roupa")}
                        placeholder="Roupa do personagem"/>
                    <br />
                    {errors.roupa && <p>{errors.roupa.message}</p>} <br />
        
                    <label htmlFor="habilidade">Habilidade:</label> <br />
                    <input 
                        type="text" 
                        name="habilidade" 
                        id="habilidade" 
                        {...register("habilidade")}
                        placeholder="Habilidade especial do personagem (se não tiver, digite nenhuma)"/>
                    <br />
                    {errors.habilidade && <p>{errors.habilidade.message}</p>} <br />
        
                    <label htmlFor="pulo_duplo">Pulo duplo:</label> <br />
                    <select 
                        name="opcoes" 
                        id="opcoes"
                        {...register("pulo_duplo")}
                        required>
                        <option value="true">True (Sim)</option>
                        <option value="false">False (Não)</option>
                    </select>
                    <br />
                    {errors.pulo_duplo && <p>{errors.pulo_duplo.message}</p>} <br />
    
                    <label htmlFor="acessorio">Acessório:</label> <br />
                    <input 
                        type="text" 
                        name="acessorio" 
                        id="acessorio" 
                        {...register("acessorio")}
                        placeholder="Acessório do personagem"/>
                    <br />
                    {errors.acessorio && <p>{errors.acessorio.message}</p>} <br />
        
                    <label htmlFor="foto">Foto:</label> <br />
                    <input 
                        type="text" 
                        name="foto" 
                        id="foto" 
                        {...register("foto")}
                        placeholder="Cole o link da foto aqui"/>
                    <br />
                    {errors.foto && <p>{errors.foto.message}</p>} <br />
        
                    <div className={css.botao}>
                        <button type="submit">Editar</button>
                    </div>
                </form>
            </section>
        </main>
    );
}
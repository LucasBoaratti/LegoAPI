import Logo from "../assets/Images/Logo.png";
import css from "../Styles/Cabecalho.module.css";

export function Cabecalho() {
    return (
        <header>
            <section className={css.cabecalho}>
                <img src={Logo} alt="Logomarca da loja com blocos de lego das corea azul, amarelo, vermelho, verde e laranja abaixo e em cima uma carinha de lego com contorno preto e o nome da API, LegoAPI escrito em letras brancas com borda interna preta e borda externa amarela." />
                <h2>API feita por: Lucas Boaratti 😁</h2>
            </section>
        </header>
    );
}
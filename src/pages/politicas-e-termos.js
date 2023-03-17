import { Politicas } from "../components/privacity"
import { Termos } from "../components/privacity"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { BtnTop } from "../components/top-btn"
import { Helmet } from "react-helmet"

const Privacidade = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="As políticas de privacidade e termos de uso da Adas Saúde."/>
                <meta name="google-site-verification" content="LDrTgpQ7Y66GtdmjOak0Ee0pTcNblUDfxbe95dP5SnA" />
	            <title>Políticas e Termos Adas Saúde</title>
            </Helmet>
            <Header/>
            <Politicas/>
            <Termos/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { Privacidade }
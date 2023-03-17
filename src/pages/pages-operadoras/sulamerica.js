import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { BtnTop } from "../../components/top-btn"
import { SulAmericaText } from "../../components/sulamerica"
import { Helmet } from "react-helmet"

const SulAmerica = () => {
    return(
        <>
            <Helmet>
                <meta name="description" content="A SulAmérica Seguros e Previdência oferece plano de saúde, seguro de vida, previdência privada, seguro de automóvel, residencial, entre outras opções para você, sua família e empresa"/>
                <meta name="google-site-verification" content="LDrTgpQ7Y66GtdmjOak0Ee0pTcNblUDfxbe95dP5SnA" />
	            <title>Operadora SulAmérica</title>
            </Helmet>
            <Header/>
            <SulAmericaText/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { SulAmerica }
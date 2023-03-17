import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { BtnTop } from "../../components/top-btn"
import { PortoSeguroText } from "../../components/portoseguro"
import { Helmet } from "react-helmet"

const PortoSeguro = () => {
    return(
        <>
            <Helmet>
                <meta name="description" content="O Porto Seguro Saúde garante o atendimento 24 horas, assistência em viagens, atendimento nacional de urgência e emergência para os colaboradores de sua empresa."/>
                <meta name="google-site-verification" content="LDrTgpQ7Y66GtdmjOak0Ee0pTcNblUDfxbe95dP5SnA" />
	            <title>Operadora Porto Seguro</title>
            </Helmet>
            <Header/>
            <PortoSeguroText/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { PortoSeguro }
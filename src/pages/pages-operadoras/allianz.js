import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { AllianzText } from "../../components/allianz"
import { BtnTop } from "../../components/top-btn"
import { Helmet } from "react-helmet"

const Allianz = () => {
    return(
        <>
            <Helmet>
                <meta name="description" content="O Seguro Saúde da Allianz oferece uma excelente rede referenciada e um alto padrão de serviços digitais para atender as expectativas de sua empresa. Confira!"/>
                <meta name="google-site-verification" content="LDrTgpQ7Y66GtdmjOak0Ee0pTcNblUDfxbe95dP5SnA" />
	            <title>Operadora Allianz</title>
            </Helmet>
            <Header/>
            <AllianzText/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { Allianz }
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { AllianzText } from "../../components/allianz"
import { BtnTop } from "../../components/top-btn"
import { Helmet } from "react-helmet"

const Allianz = () => {
    return(
        <>
            <Helmet>
                <meta name="description" content="Sobre a opradora de planos de saúde Allianz!"/>
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
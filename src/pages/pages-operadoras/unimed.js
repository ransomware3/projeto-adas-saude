import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { BtnTop } from "../../components/top-btn"
import { UnimedText } from "../../components/unimed"
import { Helmet } from "react-helmet"

const Unimed = () => {
    return(
        <>
            <Helmet>
                <meta name="description" content="Sobre a opradora de planos de saúde Unimed!"/>
                <meta name="google-site-verification" content="LDrTgpQ7Y66GtdmjOak0Ee0pTcNblUDfxbe95dP5SnA" />
	            <title>Operadora Unimed</title>
            </Helmet>
            <Header/>
            <UnimedText/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { Unimed }
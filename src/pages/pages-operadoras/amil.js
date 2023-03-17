import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { BtnTop } from "../../components/top-btn"
import { AmilText } from "../../components/amil"
import { Helmet } from "react-helmet"

const Amil = () => {
    return(
        <>
            <Helmet>
                <meta name="description" content="Amil, cuidar de você. Esse é o plano."/>
                <meta name="google-site-verification" content="LDrTgpQ7Y66GtdmjOak0Ee0pTcNblUDfxbe95dP5SnA" />
	            <title>Operadora Amil</title>
            </Helmet>
            <Header/>
            <AmilText/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { Amil }
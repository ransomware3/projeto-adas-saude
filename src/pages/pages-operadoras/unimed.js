import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { BtnTop } from "../../components/top-btn"
import { UnimedText } from "../../components/unimed"
import { Helmet } from "react-helmet"

const Unimed = () => {
    return(
        <>
            <Helmet>
                <meta name="description" content="A Unimed é uma operadora de saúde que oferece planos de saúde para pessoas físicas e jurídicas, com foco na qualidade e humanização do atendimento médico"/>
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
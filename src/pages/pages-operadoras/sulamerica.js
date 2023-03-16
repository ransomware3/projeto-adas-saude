import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { BtnTop } from "../../components/top-btn"
import { SulAmericaText } from "../../components/sulamerica"
import { Helmet } from "react-helmet"

const SulAmerica = () => {
    return(
        <>
            <Helmet>
                <meta name="description" content="Sobre a opradora de planos de saúde SulAmérica!"/>
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
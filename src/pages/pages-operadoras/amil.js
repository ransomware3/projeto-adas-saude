import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { BtnTop } from "../../components/top-btn"
import { AmilText } from "../../components/amil"
import { Helmet } from "react-helmet"

const Amil = () => {
    return(
        <>
            <Helmet>
                <meta name="description" content="Sobre a opradora de planos de saúde Amil!"/>
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
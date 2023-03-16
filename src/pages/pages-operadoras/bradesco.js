import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { BtnTop } from "../../components/top-btn"
import { BradescoText } from "../../components/bradesco"
import { Helmet } from "react-helmet"

const Bradesco = () => {
    return(
        <>
            <Helmet>
                <meta name="description" content="Sobre a opradora de planos de saúde Bradesco Saúde!"/>
	            <title>Operadora Bradesco Saúde</title>
            </Helmet>
            <Header/>
            <BradescoText/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { Bradesco }
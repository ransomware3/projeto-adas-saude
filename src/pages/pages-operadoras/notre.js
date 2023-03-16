import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { BtnTop } from "../../components/top-btn"
import { NotreText } from "../../components/notre"
import { Helmet } from "react-helmet"

const NotreDame = () => {
    return(
        <>
            <Helmet>
                <meta name="description" content="Sobre a opradora de planos de saúde NotreDame!"/>
	            <title>Operadora NotreDame</title>
            </Helmet>
            <Header/>
            <NotreText/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { NotreDame }
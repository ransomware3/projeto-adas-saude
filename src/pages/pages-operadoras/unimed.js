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
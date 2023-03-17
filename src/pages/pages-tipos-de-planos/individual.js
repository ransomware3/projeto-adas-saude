import { Header } from "../../components/header"
import { BannerIndividual } from "../../components/individual"
import { TextIndividual } from "../../components/individual"
import { Footer } from "../../components/footer"
import { IndividualForm } from "../../components/form-individual"
import { ProdutosIndividuais } from "../../components/produtos-individuais"
import { BtnTop } from "../../components/top-btn"
import { Helmet } from "react-helmet"

const Individual = () => {
    return(
        <>
            <Helmet>
                <title>Plano de Saúde Individual</title>
                <meta name="description" content="Tendo um CNPJ você poderá aproveitar o melhor dos planos de saúde empresariais!"/>
                <meta name="google-site-verification" content="LDrTgpQ7Y66GtdmjOak0Ee0pTcNblUDfxbe95dP5SnA" />
            </Helmet>
            <Header/>
            <BannerIndividual/>
            <TextIndividual/>
            <IndividualForm/>
            <ProdutosIndividuais/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { Individual }
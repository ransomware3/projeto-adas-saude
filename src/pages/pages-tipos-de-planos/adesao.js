import { Header } from "../../components/header"
import { BannerAcession } from "../../components/acession"
import { TextAcession } from "../../components/acession"
import { AcessionForm } from "../../components/form-acession"
import { ProdutosAdesao } from "../../components/produtos-adesao"
import { Footer } from "../../components/footer"
import { Professsions } from "../../components/professions-list"
import { BtnTop } from "../../components/top-btn"
import { Helmet } from "react-helmet"

const Adesao = () => {
    return(
        <>
            <Helmet>
                <title>Plano de Saúde por Adesão</title>
                <meta name="description" content="Tendo um CNPJ você poderá aproveitar o melhor dos planos de saúde empresariais!"></meta>
            </Helmet>
            <Header/>
            <BannerAcession/>
            <TextAcession/>
            <Professsions/>
            <AcessionForm/>
            <ProdutosAdesao/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { Adesao }
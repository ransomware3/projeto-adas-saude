import { Header } from '../../components/header'
import { BannerBusiness } from '../../components/business'
import { TextBusiness } from '../../components/business'
import { BusinessForm } from '../../components/form-business'
import { ProdutosEmpresariais } from '../../components/produtos-empresariais'
import { Footer } from '../../components/footer'
import { BtnTop } from "../../components/top-btn"
import { Helmet } from 'react-helmet'

const Empresarial = () => {
    return(
        <>
            <Helmet>
                <title>Plano de Saúde Empresarial</title>
                <meta name="description" content="Tendo um CNPJ você poderá aproveitar o melhor dos planos de saúde empresariais!"/>
                <meta name="google-site-verification" content="LDrTgpQ7Y66GtdmjOak0Ee0pTcNblUDfxbe95dP5SnA" />
            </Helmet>
            <Header/>
            <BannerBusiness/>
            <TextBusiness/>
            <BusinessForm/>
            <ProdutosEmpresariais/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { Empresarial }
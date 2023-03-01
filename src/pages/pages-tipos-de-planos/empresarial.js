import { Header } from '../../components/header'
import { BannerBusiness } from '../../components/business'
import { TextBusiness } from '../../components/business'
import { BusinessForm } from '../../components/form-business'
import { ProdutosEmpresariais } from '../../components/produtos-empresariais'
import { Footer } from '../../components/footer'
import { BtnTop } from "../../components/top-btn"

const Empresarial = () => {
    return(
        <>
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
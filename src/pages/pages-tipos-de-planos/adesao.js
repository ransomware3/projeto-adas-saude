import { Header } from "../../components/header"
import { BannerAcession } from "../../components/acession"
import { TextAcession } from "../../components/acession"
import { AcessionForm } from "../../components/form-acession"
import { ProdutosAdesao } from "../../components/produtos-adesao"
import { Footer } from "../../components/footer"
import { Professsions } from "../../components/professions-list"
import { BtnTop } from "../../components/top-btn"

const Adesao = () => {
    return(
        <>
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
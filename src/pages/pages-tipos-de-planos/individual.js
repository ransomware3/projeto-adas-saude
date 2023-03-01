import { Header } from "../../components/header"
import { BannerIndividual } from "../../components/individual"
import { TextIndividual } from "../../components/individual"
import { Footer } from "../../components/footer"
import { IndividualForm } from "../../components/form-individual"
import { ProdutosIndividuais } from "../../components/produtos-individuais"
import { BtnTop } from "../../components/top-btn"

const Individual = () => {
    return(
        <>
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
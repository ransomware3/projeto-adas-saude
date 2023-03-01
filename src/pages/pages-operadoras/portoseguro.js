import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { BtnTop } from "../../components/top-btn"
import { PortoSeguroText } from "../../components/portoseguro"

const PortoSeguro = () => {
    return(
        <>
            <Header/>
            <PortoSeguroText/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { PortoSeguro }
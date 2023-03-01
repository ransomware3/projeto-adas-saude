import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { BtnTop } from "../components/top-btn"

const Contato = () => {
    return(
        <>
            <Header/>
            <h1>Página de contato</h1>
            <p>Esta também é outra página</p>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { Contato }
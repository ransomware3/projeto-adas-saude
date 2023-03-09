import { Politicas } from "../components/privacity"
import { Termos } from "../components/privacity"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { BtnTop } from "../components/top-btn"

const Privacidade = () => {
    return (
        <>
            <Header/>
            <Politicas/>
            <Termos/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { Privacidade }
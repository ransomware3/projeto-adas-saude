import { Politicas } from "../components/privacity"
import { Termos } from "../components/privacity"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

const Privacidade = () => {
    return (
        <>
            <Header/>
            <Politicas/>
            <Termos/>
            <Footer/>
        </>
    )
}

export { Privacidade }
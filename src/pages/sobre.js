import { Header } from "../components/header"
import { BannerAbout } from "../components/about"
import { TextAbout } from "../components/about"
import { Footer } from "../components/footer"
import { BtnTop } from "../components/top-btn"

const Sobre = () => {
    return(
        <>
            <Header/>
            <BannerAbout/>
            <TextAbout/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { Sobre }
import { Header } from "../components/header"
import { BannerAbout } from "../components/about"
import { TextAbout } from "../components/about"
import { Footer } from "../components/footer"
import { BtnTop } from "../components/top-btn"
import { Helmet } from "react-helmet"

const Sobre = () => {
    return(
        <>
            <Helmet>
                <meta name="description" content="Historia, missão e valores da Adas Saúde Seguros!"/>
	            <title>Sobre a Adas Saúde</title>
            </Helmet>
            <Header/>
            <BannerAbout/>
            <TextAbout/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { Sobre }
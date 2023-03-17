import { Header } from '../components/header'
import { Banner } from '../components/banner-home'
import { Produtos } from '../components/produtos-home'
import { Footer } from '../components/footer'
import { BtnTop } from '../components/top-btn'
import { AllCounters } from '../components/animated-counter'
import { TextHome } from '../components/text-home'
import { Helmet } from 'react-helmet'

const Home = () => {
    return(
        <>
            <Helmet>
                <meta name="description" content="Com a Adas Saúde sua renovação de plano de saúde é rápida e fácil, venha e faça uma cotação gratuita e personalizada!"/>
                <meta name="google-site-verification" content="LDrTgpQ7Y66GtdmjOak0Ee0pTcNblUDfxbe95dP5SnA" />
                <link rel="sitemap" type="application/xml" href="http://adassaude.com.br/sitemap.xml"/>
	            <title>Adas Saúde Seguros | Cotação Gratuita para Planos de Saúde</title>
            </Helmet>
            <Header/>
            <Banner/>
            <TextHome/>
            <Produtos/>
            <AllCounters/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { Home }
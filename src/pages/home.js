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
                <meta name="description" content="Precisa de desconto na renovação do seu seguro saúde? Venha para a Adas Saúde e faça uma cotação gratuita!"/>
	            <title>Adas Saúde Seguros</title>
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
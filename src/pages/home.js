import { Header } from '../components/header'
import { Banner } from '../components/banner-home'
import { Produtos } from '../components/produtos-home'
import { Footer } from '../components/footer'
import { BtnTop } from '../components/top-btn'
import { AllCounters } from '../components/animated-counter'
import { AlignLimiter } from '../components/about/styled'

const Home = () => {
    return(
        <>
            <Header/>
            <Banner/>
            <Produtos/>
            <AlignLimiter>
                <AllCounters/>
            </AlignLimiter>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { Home }
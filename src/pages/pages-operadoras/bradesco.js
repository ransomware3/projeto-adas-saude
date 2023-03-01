import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { BtnTop } from "../../components/top-btn"
import { BradescoText } from "../../components/bradesco"

const Bradesco = () => {
    return(
        <>
            <Header/>
            <BradescoText/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { Bradesco }
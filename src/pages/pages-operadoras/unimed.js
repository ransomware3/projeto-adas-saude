import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { BtnTop } from "../../components/top-btn"
import { UnimedText } from "../../components/unimed"

const Unimed = () => {
    return(
        <>
            <Header/>
            <UnimedText/>
            <BtnTop/>
            <Footer/>
        </>
    )
}

export { Unimed }
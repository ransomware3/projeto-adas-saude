import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./home"
import { Sobre } from "./sobre"
import { Empresarial } from "./pages-tipos-de-planos/empresarial"
import { Adesao } from "./pages-tipos-de-planos/adesao"
import { Individual } from "./pages-tipos-de-planos/individual"
import { Amil } from "./pages-operadoras/amil"
import { Bradesco } from "./pages-operadoras/bradesco"
import { NotreDame } from "./pages-operadoras/notre"
import { Unimed } from "./pages-operadoras/unimed"
import { SulAmerica } from "./pages-operadoras/sulamerica"
import { PortoSeguro } from "./pages-operadoras/portoseguro"
import { Allianz } from "./pages-operadoras/allianz"
import { ScrollToTop } from "./scrollToTop"
import { Privacidade } from "./politicas-e-termos"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/sobre" element={<Sobre/>}/>
                <Route exact path="/plano-empresarial" element={<Empresarial/>}/>
                <Route exact path="/plano-adesao" element={<Adesao/>}/>
                <Route exact path="/plano-individual" element={<Individual/>}/>
                <Route exact path="/operadora-amil" element={<Amil/>}/>
                <Route exact path="/operadora-bradesco" element={<Bradesco/>}/>
                <Route exact path="/operadora-notredame" element={<NotreDame/>}/>
                <Route exact path="/operadora-unimed" element={<Unimed/>}/>
                <Route exact path="/operadora-sulamerica" element={<SulAmerica/>}/>
                <Route exact path="/operadora-portoseguro" element={<PortoSeguro/>}/>
                <Route exact path="/operadora-allianz" element={<Allianz/>}/>
                <Route exact path="/privacidade-e-termos" element={<Privacidade/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }
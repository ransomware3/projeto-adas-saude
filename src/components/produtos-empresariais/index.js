import { Link } from "react-router-dom"
import './class-names.css'
import Amil from '../../images/amil.png'
import AmilOne from '../../images/amil-one.png'
import NotreDame from '../../images/notredamepng.png'
import Bradesco from '../../images/bradesco.png'
import Unimed from '../../images/unimed.png'
import SulAmerica from '../../images/sulamerica.png'
import CNU from '../../images/cnupng.png'
import PortoSeguro from '../../images/porto-seguro.png'
import Allianz from '../../images/allianz.png'
import {
    Section,
    HeadingTwo,
    ProductsList,
    Li,
    Img
} from './styled'

const ProdutosEmpresariais = () => {
    return(
        <>
            <Section>
                <HeadingTwo>Parceiras para plano empresarial</HeadingTwo>
                <ProductsList>
                    <Li><Link to='/operadora-amil'><Img src={Amil}></Img></Link></Li>
                    <Li><Link to='/operadora-amil'><Img src={AmilOne}></Img></Link></Li>
                    <Li><Link to='/operadora-bradesco'><Img src={Bradesco}></Img></Link></Li>
                    <Li><Link to='/operadora-notredame'><Img src={NotreDame}></Img></Link></Li>
                    <Li><Link to='/operadora-unimed'><Img src={Unimed}></Img></Link></Li>
                    <Li><Link to='/operadora-unimed'><Img src={CNU}></Img></Link></Li>
                    <Li><Link to='/operadora-sulamerica'><Img src={SulAmerica}></Img></Link></Li>
                    <Li><Link to='/operadora-portoseguro'><Img src={PortoSeguro}></Img></Link></Li>
                    <Li><Link to='/operadora-allianz'><Img src={Allianz}></Img></Link></Li>
                </ProductsList>
            </Section>
        </>
    )
}

export { ProdutosEmpresariais }
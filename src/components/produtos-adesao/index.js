import { Link } from 'react-router-dom'
import Amil from '../../images/amil.png'
import Bradesco from '../../images/bradesco.png'
import NotreDame from '../../images/notredamepng.png'
import SulAmerica from '../../images/sulamerica.png'
import Unimed from '../../images/unimed.png'
import SaoCristovao from '../../images/sao-cristovao.png'
import UnimedFesp from '../../images/unimed-fesp.png'
import UnimedNacional from '../../images/unimed-nacional.png'
import {
    Section,
    HeadingTwo,
    ProductsList,
    Li,
    Img
} from './styled'

const ProdutosAdesao = () => {
    return(
        <>
            <Section>
                <HeadingTwo>Parceiras para plano por adesão</HeadingTwo>
                <ProductsList>
                    <Li><Link to='#'><Img src={SaoCristovao}></Img></Link></Li>
                    <Li><Link to='/operadora-amil'><Img src={Amil}></Img></Link></Li>
                    <Li><Link to='/operadora-bradesco'><Img src={Bradesco}></Img></Link></Li>
                    <Li><Link to='/operadora-notredame'><Img src={NotreDame}></Img></Link></Li>
                    <Li><Link to='/operadora-sulamerica'><Img src={SulAmerica}></Img></Link></Li>
                    <Li><Link to='/operadora-unimed'><Img src={Unimed}></Img></Link></Li>
                    <Li><Link to='/operadora-unimed'><Img src={UnimedFesp}></Img></Link></Li>
                    <Li><Link to='/operadora-unimed'><Img src={UnimedNacional}></Img></Link></Li>
                </ProductsList>
            </Section>
        </>
    )
}

export { ProdutosAdesao }
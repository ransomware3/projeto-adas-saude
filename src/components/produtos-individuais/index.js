import { Link } from 'react-router-dom'
import NotreDame from '../../images/notredamepng.png'
import BioSaude from '../../images/bio-saude.png'
import BioVida from '../../images/bio-vida-2.png'
import BlueMed from '../../images/blue-med.png'
import CuidarMe from '../../images/cuidarme.png'
import Kipp from '../../images/kipp-2.png'
import MedSenior from '../../images/medsenior.png'
import PreventSenior from '../../images/prevent.png'
import SaoCristovao from '../../images/sao-cristovao.png'
import Trasmontano from '../../images/trasmontano.png'
import {
    Section,
    HeadingTwo,
    ProductsList,
    Li,
    Img
} from './styled'

const ProdutosIndividuais = () => {
    return(
        <>
            <Section>
                <HeadingTwo>Parceiras para plano individual</HeadingTwo>
                <ProductsList>
                    <Li><Link to='#'><Img src={BioSaude}></Img></Link></Li>
                    <Li><Link to='#'><Img src={BioVida}></Img></Link></Li>
                    <Li><Link to='#'><Img src={SaoCristovao}></Img></Link></Li>
                    <Li><Link to='#'><Img src={Kipp}></Img></Link></Li>
                    <Li><Link to='#'><Img src={CuidarMe}></Img></Link></Li>
                    <Li><Link to='#'><Img src={MedSenior}></Img></Link></Li>
                    <Li><Link to='/operadora-notredame'><Img src={NotreDame}></Img></Link></Li>
                    <Li><Link to='#'><Img src={PreventSenior}></Img></Link></Li>
                    <Li><Link to='#'><Img src={BlueMed}></Img></Link></Li>
                    <Li><Link to='#'><Img src={Trasmontano}></Img></Link></Li>
                </ProductsList>
            </Section>
        </>
    )
}

export { ProdutosIndividuais }
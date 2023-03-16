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
import SaoCristovao from '../../images/sao-cristovao.png'
import UnimedFesp from '../../images/unimed-fesp.png'
import UnimedNacional from '../../images/unimed-nacional.png'
import BioSaude from '../../images/bio-saude.png'
import BioVida from '../../images/bio-vida-2.png'
import BlueMed from '../../images/blue-med.png'
import CuidarMe from '../../images/cuidarme.png'
import Kipp from '../../images/kipp-2.png'
import MedSenior from '../../images/medsenior.png'
import PreventSenior from '../../images/prevent.png'
import Trasmontano from '../../images/trasmontano.png'
import {
    Section,
    HeadingTwo,
    ProductsList,
    Li,
    Img
} from './styled'


const Produtos = () => {
    return(
        <>
            <Section>
                <HeadingTwo>Parceiras Adas Saúde</HeadingTwo>
                <ProductsList>
                    <Li><Img src={NotreDame}></Img></Li>
                    <Li><Img src={Bradesco}></Img></Li>
                    <Li><Img src={SulAmerica}></Img></Li>
                    <Li><Img src={PortoSeguro}></Img></Li>
                    <Li><Img src={Allianz}></Img></Li>
                    <Li><Img src={Unimed}></Img></Li>
                    <Li><Img src={CNU}></Img></Li>
                    <Li><Img src={UnimedFesp}></Img></Li>
                    <Li><Img src={UnimedNacional}></Img></Li>
                    <Li><Img src={BlueMed}></Img></Li>
                    <Li><Img src={BioSaude}></Img></Li>
                    <Li><Img src={BioVida}></Img></Li>
                    <Li><Img src={SaoCristovao}></Img></Li>
                    <Li><Img src={Kipp}></Img></Li>
                    <Li><Img src={AmilOne}></Img></Li>
                    <Li><Img src={Amil}></Img></Li>
                    <Li><Img src={CuidarMe}></Img></Li>
                    <Li><Img src={MedSenior}></Img></Li>
                    <Li><Img src={PreventSenior}></Img></Li>
                    <Li><Img src={Trasmontano}></Img></Li>
                </ProductsList>
            </Section>
        </>
    )
}

export { Produtos }
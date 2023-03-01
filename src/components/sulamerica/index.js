import SulAmerica from '../../images/sulamerica.png'
import {
    AlignLimiter,
    SectionLimiter,
    LogoImg,
    DivLine,
    DivLogo,
    HeadingTwo,
    P
} from './styled'

const SulAmericaText = () => {
    return(
        <>
            <AlignLimiter>
                <SectionLimiter>
                    <DivLine>
                        <DivLogo>
                            <LogoImg src={SulAmerica}></LogoImg>
                        </DivLogo>
                    </DivLine>
                    <HeadingTwo>Sobre</HeadingTwo>
                    <P>A <strong>SulAmérica</strong> é uma companhia de <strong>mais de 125 anos</strong> que se dedica a entregar Saúde Integral para seus mais de <strong>7 milhões de clientes</strong> por meio de produtos e serviços de Saúde, Odonto, Vida,
                    Previdência e Investimentos.</P>
                    <P><strong>Contratações PME: mínimo de 2 vidas com 1 titular.</strong></P>
                    <P>É possível constarem dois ou mais produtos diferentes em uma mesma apólice: titulares (sócios, funcionários ou prestadores de serviço) podem ter planos diferentes entre si, mas seus respectivos dependentes são obrigados a seguirem seus planos.</P>
                    <P><strong>Há a comercialização de planos de saúde exclusivamente hospitalares.</strong></P>
                </SectionLimiter>
            </AlignLimiter>
        </>
    )
}

export { SulAmericaText }
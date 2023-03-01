import PortoSeguro from '../../images/porto-seguro.png'
import {
    AlignLimiter,
    SectionLimiter,
    LogoImg,
    DivLine,
    DivLogo,
    HeadingTwo,
    P
} from './styled'

const PortoSeguroText = () => {
    return(
        <>
            <AlignLimiter>
                <SectionLimiter>
                    <DivLine>
                        <DivLogo>
                            <LogoImg src={PortoSeguro}></LogoImg>
                        </DivLogo>
                    </DivLine>
                    <HeadingTwo>Sobre</HeadingTwo>
                    <P>A <strong>Porto Seguro</strong> é uma <strong>seguradora</strong> que oferece serviços de proteção com tecnologia embarcada. Com mais de <strong>70 anos</strong> de mercado, a atuação da companhia se concentra hoje em três classificações de negócio: <strong>Seguros, Saúde e Produtos Financeiros</strong>.</P>
                    <P><strong>Contratações PME:</strong> mínimo de 3 vidas com 1 titular.</P>
                    <P>É possível constarem <strong>dois ou mais</strong> produtos diferentes em uma mesma apólice: titulares (sócios, administradores, funcionários ou prestadores de serviço) podem ter planos diferentes entre si, mas seus respectivos dependentes são obrigados a seguirem seus planos.</P>
                    <P>Também é possível constarem em uma mesma apólice planos de saúde <strong>com e sem coparticipação</strong>.</P>
                    <P><strong>Os contratos da Porto Seguro têm vigência mínima de 24 meses</strong>.</P>
                </SectionLimiter>
            </AlignLimiter>
        </>
    )
}

export { PortoSeguroText }
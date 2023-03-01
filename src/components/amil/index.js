import Amil from '../../images/amil.png'
import AmilOne from '../../images/amil-one.png'
import {
    AlignLimiter,
    SectionLimiter,
    LogoImg,
    DivLine,
    DivLogo,
    HeadingTwo,
    P
} from './styled'

const AmilText = () => {
    return(
        <>
            <AlignLimiter>
                <SectionLimiter>
                    <DivLine>
                        <DivLogo>
                            <LogoImg src={Amil}></LogoImg>
                            <LogoImg src={AmilOne}></LogoImg>
                        </DivLogo>
                    </DivLine>
                    <HeadingTwo>Sobre</HeadingTwo>
                    <P>A <strong>Amil</strong> faz parte do <strong>UnitedHealth Group</strong>, a <strong>maior e mais diversificada empresa do setor de saúde do mundo</strong>, com sede nos Estados Unidos. O <strong>UnitedHealth Group</strong> ocupa o topo da lista das empresas mais admiradas em seu segmento, segundo ranking da revista Fortune. Além disso, <strong>oferece benefícios e serviços de saúde em mais de 130 países, para cerca de 145 milhões de pessoas</strong>.</P>
                    <P><strong>Contratações PME:</strong> mínimo de 2 vidas com 1 titular.</P>
                    <P>É possível constarem <strong>dois ou mais produtos diferentes</strong> em uma mesma apólice: titulares (sócios, administradores, funcionários ou prestadores de serviço) podem ter planos diferentes entre si, mas seus respectivos dependentes são obrigados a seguirem seus planos.</P>
                    <P>Também é <strong>possível</strong> constarem em uma mesma apólice planos de saúde <strong>com e sem coparticipação</strong>.</P>
                </SectionLimiter>
            </AlignLimiter>
        </>
    )
}

export { AmilText }
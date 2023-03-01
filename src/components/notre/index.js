import NotreDame from '../../images/notredamepng.png'
import {
    AlignLimiter,
    SectionLimiter,
    LogoImg,
    DivLine,
    DivLogo,
    HeadingTwo,
    P
} from './styled'

const NotreText = () => {
    return(
        <>
            <AlignLimiter>
                <SectionLimiter>
                    <DivLine>
                        <DivLogo>
                            <LogoImg src={NotreDame}></LogoImg>
                        </DivLogo>
                    </DivLine>
                    <HeadingTwo>Sobre</HeadingTwo>
                    <P>O <strong>Grupo NotreDame Intermédica (GNDI)</strong> é, atualmente, a maior operadora de saúde do Brasil, com <strong>7,2 milhões</strong> de beneficiários.
                    Fundado em 1968. Composto pelo grupo Notredame Intermédica e Interodonto, com mais de <strong>50 anos, 22 mil colaboradores 7,1 Milhões de beneficiários, mais de 18 mil dentistas e um corpo clínico com mais de 7 mil pessoas</strong>.</P>
                    <P><strong>Contratações PME: </strong>mínimo de 2 vidas com 1 titular.</P>
                    <P>É possível constarem <strong>dois ou mais</strong> produtos <strong>diferentes</strong> em uma mesma apólice: titulares (sócios, funcionários ou prestadores de serviço) podem ter planos diferentes entre si, mas seus respectivos dependentes são obrigados a seguirem seus planos.</P>
                </SectionLimiter>
            </AlignLimiter>
        </>
    )
}

export { NotreText }
import Bradesco from '../../images/bradesco.png'
import {
    AlignLimiter,
    SectionLimiter,
    LogoImg,
    DivLine,
    DivLogo,
    HeadingTwo,
    P
} from './styled'

const BradescoText = () => {
    return(
        <>
            <AlignLimiter>
                <SectionLimiter>
                    <DivLine>
                        <DivLogo>
                            <LogoImg src={Bradesco}></LogoImg>
                        </DivLogo>
                    </DivLine>
                    <HeadingTwo>Sobre</HeadingTwo>
                    <P>A <strong>Bradesco Saúde</strong> é uma <strong>seguradora</strong> especializada em saúde integrante do Grupo Bradesco Seguros, com <strong>atuação exclusiva no seguro-saúde médico e hospitalar</strong>.
                    Atuando <strong>desde 1984</strong> na área de seguro-saúde, a Bradesco
                    Saúde consolidou-se <strong>líder do segmento de planos coletivos</strong> devido à atenção dada às necessidades dos segurados e parceria com a rede referenciada.</P>
                    <P><strong>Contratações PME:</strong> mínimo de 3 vidas com 1 titular.</P>
                    <P>É possível constarem dois ou mais produtos diferentes em uma mesma apólice: titulares (sócios, funcionários ou prestadores de serviço) podem ter planos diferentes entre si, mas seus respectivos dependentes são obrigados a seguirem seus planos.</P>
                    <P><strong>Há a comercialização de planos de saúde exclusivamente hospitalares</strong>.</P>
                    <P>Esta seguradora é certificada pelo método de acreditação!</P>
                    <P>• Acreditação é um sistema de certificação de que práticas implementadas pelas instituições de saúde atendam a padrões de excelência. A Bradesco Saúde foi a primeira Operadora de Saúde do País a ser certificada pelo método de Acreditação conforme padrões da ANS.</P>
                </SectionLimiter>
            </AlignLimiter>
        </>
    )
}

export { BradescoText }
import Unimed from '../../images/unimed.png'
import {
    AlignLimiter,
    SectionLimiter,
    LogoImg,
    DivLine,
    DivLogo,
    HeadingTwo,
    P
} from './styled'

const UnimedText = () => {
    return(
        <>
            <AlignLimiter>
                <SectionLimiter>
                    <DivLine>
                        <DivLogo>
                            <LogoImg src={Unimed}></LogoImg>
                        </DivLogo>
                    </DivLine>
                    <HeadingTwo>Sobre</HeadingTwo>
                    <P>A <strong>CNU - Central Nacional Unimed</strong> é a operadora nacional dos planos de saúde Unimed. Comercializa assistência médica empresarial com <strong>abrangência regional e nacional</strong>, benefícios especiais e atendimento diferenciado. Nasceu
                    com a regulamentação dos planos de saúde em 1998. Atende exclusivamente empresas, sem perder o foco em cada ser humano. Seu objetivo é elevar a satisfação dos clientes Unimed.</P>
                    <P><strong>Contratações PME:</strong> mínimo de 2 vidas com 1 titular.</P>
                    <P>É possível constarem <strong>dois ou mais</strong> produtos <strong>diferentes</strong> em uma mesma apólice: titulares (sócios, funcionários ou prestadores de serviço) podem ter planos diferentes entre si, mas seus respectivos dependentes são obrigados a seguirem seus planos.</P>
                    <P>Não pode ter plano com e sem coparticipação na mesma apolice.</P>
                </SectionLimiter>
            </AlignLimiter>
        </>
    )
}

export { UnimedText }
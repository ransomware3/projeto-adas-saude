import Unimed from '../../images/unimed.png'
import styled from 'styled-components'

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

const AlignLimiter = styled.section`
    display: flex;
    justify-content: center;
`

const SectionLimiter = styled.div`
    width: 75%;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`

const LogoImg = styled.img`
    width: 80%;
`

const DivLine = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 3px solid #00995f;
    margin-bottom: 120px;
    position: relative;
`

const DivLogo = styled.div`
    width: 20%;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(55%);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const HeadingTwo = styled.h2`
    font-weight: 800;
    font-size: 35px;
    margin-bottom: 30px;
    color: #00995f;
`

const P = styled.p`
    font-size: 20px;
    margin-bottom: 30px;
`

export { UnimedText }
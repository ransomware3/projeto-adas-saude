import Scope from '../../images/mission.png'
import Vision from '../../images/vision.png'
import Trophy from '../../images/trophy.png'
import {
    DivImage,
    DivText,
    BannerH1,
    BannerH3,
    AlignLimiter,
    SectionLimiter,
    P,
    H2,
    DivBorder,
    QualityList,
    LiLeft,
    LiRight,
    QualityImg,
    Strong
} from './styled'

export const BannerAbout = () => {
    return(
        <>
            <DivImage>
                <DivText>
                    <BannerH1>SOBRE A ADAS SAÚDE</BannerH1>
                    <BannerH3>Você e sua empresa em 1° lugar.</BannerH3>
                </DivText>
            </DivImage>
        </>
    )
}

export const TextAbout = () => {
    return(
        <>
            <AlignLimiter>
                <SectionLimiter>
                    <DivBorder>
                        <P>A <Strong>Adas Saúde</Strong> consultoria de planos de saúde, é uma empresa filiada as maiores e melhores plataformas do mercado intermediando contratações em <Strong>planos de saúde</Strong>.</P>
                        <P>Aqui, você conta com um time de <Strong>especialistas em todos os setores</Strong> (planos <Strong>pessoa física</Strong>, <Strong>PME</Strong> de pequeno e grande porte, coletivos de <Strong>adesão</Strong>) buscando soluções customizadas para garantir todos os benefícios e as opções mais adequadas para você e sua empresa.</P>
                        <P>Nós da <Strong>Adas Saúde</Strong>, sempre colocamos princípios em 1° lugar, para <Strong>proteger tudo que há de mais importante para você</Strong>, com muita transparência, agilidade e segurança com os nossos clientes.
                        </P>
                        <P>Para chegar aonde estamos, trabalhamos para desenvolver um <Strong>atendimento altamente personalizado</Strong> e qualificado para cuidar de cada um de nossos clientes. Nosso maior compromisso é proporcionar a <Strong>melhor experiência</Strong> em sua contratação, renovação e <Strong>migração</Strong>.
                        </P>
                    </DivBorder>

                    <QualityList>
                        <LiLeft>
                            <div>
                                <H2>Missão</H2>
                                <P>Proporcionar segurança, confiança e transparência desde o início de uma negociação até a implantação do contrato, com todo suporte necessário ao nosso cliente.</P>
                            </div>
                            <div><QualityImg src={Scope}></QualityImg></div>
                        </LiLeft>
                        <LiRight>
                            <div>
                                <H2>Visão</H2>
                                <P>Tornar-se a corretora mais confiável do mercado de planos de saúde, sendo uma empresa de referência e reconhecida como a melhor opção para parcerias, funcionários e principalmente para nossos clientes.</P>
                            </div>
                            <div><QualityImg src={Vision}></QualityImg></div>
                        </LiRight>
                        <LiLeft>
                            <div>
                                <H2>Valores</H2>
                                <P>Satisfação pela equipe na atuação conjunta e integrada com a empresa, a todos os integrantes pela agilidade, prestação de serviço e parceria, tornando nossa empresa cada vez mais forte no ramo.</P>
                            </div>
                            <div><QualityImg src={Trophy}></QualityImg></div>
                        </LiLeft>
                    </QualityList>
                </SectionLimiter>
            </AlignLimiter>
        </>
    )
}
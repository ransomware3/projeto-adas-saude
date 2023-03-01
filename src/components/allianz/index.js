import Allianz from '../../images/allianz.png'
import {
    AlignLimiter,
    SectionLimiter,
    LogoImg,
    DivLine,
    DivLogo,
    HeadingTwo,
    P
} from './styled'

const AllianzText = () => {
    return(
        <>
            <AlignLimiter>
                <SectionLimiter>
                    <DivLine>
                        <DivLogo><LogoImg src={Allianz}></LogoImg></DivLogo>
                    </DivLine>
                    <HeadingTwo>Sobre</HeadingTwo>
                    <P>A <strong>Allianz</strong> oferece uma vasta solução de <strong>seguros</strong> e de <strong>gestão de ativos</strong>, com produtos e serviços que respondem à necessidade de mais de 85 milhões de clientes em mais de 70 países. A experiência e expertise em seguros e gestão de ativos fazem da Allianz uma das <strong>comunidades financeiras mais fortes do mundo</strong>.</P>
                    <P><strong>Contratações PME</strong>: mínimo de 3 vidas com 1 titular.</P>
                    <P>É possível constarem <strong>dois ou mais produtos diferentes em uma mesma apólice</strong>: titulares (sócios, funcionários ou prestadores de serviço) podem ter planos diferentes entre si, mas seus respectivos dependentes <strong>são obrigados a seguirem seus planos</strong>.</P>
                    <P>É uma operadora de planos de saúde que oferece uma <strong>ampla variedade de opções de cobertura médica</strong>, incluindo <strong>planos individuais, familiares e empresariais</strong>. A empresa possui uma rede credenciada de hospitais, clínicas, laboratórios e profissionais de saúde <strong>em todo o Brasil</strong>, além de contar com diversos serviços adicionais, como <strong>telemedicina, atendimento domiciliar e programas de prevenção e promoção da saúde</strong>.</P>
                    <P>A Allianz também é reconhecida por <strong>sua alta qualidade no atendimento ao cliente e pela eficiência na gestão de processos</strong>, o que garante <strong>rapidez e efetividade na resolução de eventuais problemas</strong>. Com uma forte presença global, a Allianz é uma das principais empresas de seguros e serviços financeiros do mundo, o que traz ainda mais <strong>segurança e confiabilidade para seus clientes</strong>.</P>
                </SectionLimiter>
            </AlignLimiter>
        </>
    )
}

export { AllianzText }
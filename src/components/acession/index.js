import {
    BannerImg,
    BannerText,
    BannerH1,
    BannerH3,
    AlignLimiter,
    SectionLimiter,
    P,
    Strong
} from './styled'

export const BannerAcession = () => {
    return(
        <>
            <BannerImg>
                <BannerText>
                    <BannerH1>Plano De Saúde por Adesão</BannerH1>
                    <BannerH3>Reduza a fatura do seu plano de saúde em até 30%!</BannerH3>
                </BannerText>
            </BannerImg>
        </>
    )
}

export const TextAcession = () => {
    return(
        <>
            <AlignLimiter>
                <SectionLimiter>
                    <P>Um <Strong>plano de saúde por adesão</Strong> é uma opção de plano de saúde oferecida a grupos específicos, como associações profissionais, sindicatos, conselhos e outras entidades de classe. Nesse tipo de plano, os beneficiários se unem em um grupo para ter acesso a <Strong>serviços de saúde de qualidade com preços mais acessíveis</Strong>, já que os valores são negociados em conjunto pela <Strong>entidade e a operadora de planos de saúde.</Strong></P><P>O plano de saúde por adesão oferece uma <Strong>ampla rede de médicos, hospitais e clínicas credenciados</Strong>, além de uma série de coberturas e serviços adicionais, como atendimento domiciliar, aconselhamento médico por telefone e programas de prevenção e promoção da saúde.</P>
                    <P>Na modalidade de <Strong>planos de saúde por Adesão</Strong>, você conta com as <Strong>melhores Seguradoras</Strong> disponíveis no mercado, de acordo com a sua <Strong>profissão ou formação</Strong>. Podendo contratar com sua <Strong>Carteirinha do Conselho de Classe</Strong>, seu <Strong>Certificado de Conclusão do Curso de Graduação</Strong> ou também, seu <Strong>Diploma</Strong>.</P>
                </SectionLimiter>
            </AlignLimiter>
        </>
    )
}
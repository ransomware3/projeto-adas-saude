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

export const BannerBusiness = () => {
    return(
        <>
            <BannerImg>
                <BannerText>
                    <BannerH1>Plano De Saúde Empresarial</BannerH1>
                    <BannerH3>Reduza a fatura do seu plano de saúde em até 30%!</BannerH3>
                </BannerText>
            </BannerImg>
        </>
    )
}

export const TextBusiness = () => {
    return(
        <>
            <AlignLimiter>
                <SectionLimiter>
                    <P>Um <Strong>plano de saúde empresarial</Strong> é um tipo de plano de saúde coletivo que é oferecido por empresas aos <Strong>seus funcionários</Strong>. Nesse tipo de plano, a empresa contrata uma operadora de planos de saúde para fornecer <Strong>cobertura médica e hospitalar aos seus colaboradores</Strong> e, em alguns casos, aos seus dependentes.</P> <P>Geralmente, <Strong>os custos são divididos entre a empresa e os funcionários</Strong>, e os benefícios oferecidos podem variar de acordo com o <Strong>acordo estabelecido entre a empresa e a operadora de planos de saúde</Strong>. Esse tipo de plano costuma ser uma opção mais acessível e vantajosa para os funcionários, pois os valores cobrados costumam ser<Strong> mais baixos do que em planos individuais</Strong>.</P>
                    <P>Tendo um <Strong>CNPJ</Strong> você poderá aproveitar o melhor dos <Strong>planos de saúde empresariais</Strong>, com opções que estão disponíveis a partir de <Strong>2 vidas</Strong>, podendo atender somente a <Strong>você e sua família</Strong>, como também para seus <Strong>colaboradores e sócios</Strong>.</P>
                    <P><Strong>Sendo válido para Empresário Individual, MEI, ME, ME com contrato social e empresas LTDA, EIRELLI, S/A, S/C, Epp.</Strong></P>
                </SectionLimiter>
            </AlignLimiter>
        </>
    )
}
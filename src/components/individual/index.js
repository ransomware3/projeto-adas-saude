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

export const BannerIndividual = () => {
    return(
        <>
            <BannerImg>
                <BannerText>
                    <BannerH1>Plano De Saúde Individual</BannerH1>
                    <BannerH3>Reduza a fatura do seu plano de saúde em até 30%!</BannerH3>
                </BannerText>
            </BannerImg>
        </>
    )
}

export const TextIndividual = () => {
    return(
        <>
            <AlignLimiter>
                <SectionLimiter>
                    <P>Um <Strong>plano de saúde individual</Strong> é uma modalidade de plano de saúde em que a pessoa contrata uma operadora de planos de saúde para receber <Strong>cobertura médica e hospitalar para si mesma</Strong>. Nesse tipo de plano, o beneficiário arca com os custos do plano, sem contar com a ajuda de uma <Strong>empresa</Strong> ou <Strong>associação de classe</Strong>.</P> <P>Esse tipo de plano oferece <Strong>flexibilidade na escolha do plano e dos serviços de saúde</Strong>, bem como uma cobertura mais personalizada, já que o beneficiário escolhe os serviços e benefícios que melhor atendem às suas necessidades.</P> <P>No entanto, os custos de um plano de saúde individual <Strong>costumam ser mais elevados do que em planos coletivos ou por adesão</Strong>.</P>
                    <P>Caso não possua um <Strong>CNPJ</Strong>, uma <Strong>profissão</Strong> ou uma <Strong>formação acadêmica</Strong> que seja elegível a um <Strong>plano por adesão</Strong>, temos opções incríveis em ótimas operadoras para beneficiários com este perfil, seja em um plano para <Strong>somente você</Strong> ou para <Strong>toda a sua família</Strong>.</P>
                </SectionLimiter>
            </AlignLimiter>
        </>
    )
}
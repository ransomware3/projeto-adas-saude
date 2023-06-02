import {
    Section,
    H1,
    AlignLimiter,
    SectionLimiter
} from './styled'

const TextHome = () => {
    return (
        <AlignLimiter>
            <SectionLimiter>
                <Section>
                    <H1>Precisa de desconto na renovação do seu plano de saúde? Na Adas Saúde sua cotação é gratuita e personalizada!</H1>
                </Section>
            </SectionLimiter>
        </AlignLimiter>
    )
}

export { TextHome }
import { BsWhatsapp } from 'react-icons/bs'
import { useState } from 'react'
import {
    AlignLimiter,
    SectionLimiter,
    Form,
    LimiterH1,
    FormH1,
    FormSubTitle,
    ContainerInfoList,
    ContainerInfoItem,
    GeralContainer,
    BtnContainer,
    Label,
    Input,
    Select,
    TextArea,
    BtnSubmit,
    BtnWhats,
    Div,
    DivPerson,
    Span,
    PWpp,
    Star
} from './styled'

const IndividualForm = () => {

    const [ tel, setTel] = useState('')

    function handleChange(e){
        const { value } = e.target
        const OnlyNumbers = value.replace(/[^\d]/g, '')
        setTel(OnlyNumbers)
    }

    return(
        <>
            <AlignLimiter>
                <SectionLimiter>
                    <Form>
                        <LimiterH1>
                            <FormH1 className="font-family-two">Faça uma cotação gratuíta</FormH1>
                            <FormSubTitle className="font-family-two">Nossos consultores irão entrar em contato</FormSubTitle>
                        </LimiterH1>
                        <ContainerInfoList>
                            <ContainerInfoItem>
                                <Label className="font-family-two" htmlFor='name'>Nome <Star>*</Star></Label>
                                <Input required className='outline' id='name' type='text'></Input>
                                <Span className="font-family-two">Seu nome completo</Span>
                            </ContainerInfoItem>
                            <ContainerInfoItem>
                                <Label className="font-family-two" htmlFor='tel'>Telefone <Star>*</Star></Label>
                                <Input required className='outline' id='tel' type='tel' name='tel' pattern="^\d+$" value={tel}
                                onInput={handleChange}></Input>
                                <Span className="font-family-two">Telefone para contato (insira o DDD)</Span>
                            </ContainerInfoItem>
                        </ContainerInfoList>
                        <GeralContainer>
                            <Label className="font-family-two" htmlFor='mail'>Email <Star>*</Star></Label>
                            <Input required className='outline' id='mail' type='email'></Input>
                            <Span className="font-family-two">Exemplo: user@website.com</Span>
                            <Label className="font-family-two">Qual a operadora de seu plano de saúde? <Star>*</Star></Label>
                            <Select required>
                                <option selected value=""></option>
                                <option value="Não tenho plano">Não tenho plano</option>
                                <option value="Bio Saúde">BioSaúde</option>
                                <option value="Bio Vida">BioVida</option>
                                <option value="Blue Med">BlueMed</option>
                                <option value="Cuidar.me">Cuidar.me</option>
                                <option value="Kipp Saúde">KippSaúde</option>
                                <option value="Med Sênior">MedSênior</option>
                                <option value="NotreDame">NotreDame</option>
                                <option value="Prevent Sênior">Prevent Sênior</option>
                                <option value="São Cristovão">São Cristovão</option>
                                <option value="Trasmontano">Trasmontano</option>
                                <option value="Outra">Outra</option>
                            </Select>
                            <Span className="font-family-two">Selecione seu plano de saúde</Span>
                            <Label className="font-family-two" htmlFor='txtarea'>Mensagem <Star>*</Star></Label>
                            <TextArea className='outline' id='txtarea'/>
                        </GeralContainer>
                        <BtnContainer>
                            <BtnSubmit className="font-family-two btn" type='submit'>Enviar</BtnSubmit>
                                <PWpp className="margin">ou melhor</PWpp>
                                <PWpp>Faça uma cotação gratuitamente via WhatsApp</PWpp>
                            <BtnWhats target='_blank' href="https://wa.me/5511988165363?text=Olá,%20tudo%20bem?%20Vim%20da%20aba:%20plano%20de%20saúde%20individual,%20e%20gostaria%20de%20fazer%20uma%20cotação%20gratuita!" rel="noopener noreferrer" className="font-family-two btn-wpp"><BsWhatsapp/>&nbsp;Entre em contato com um consultor!</BtnWhats>
                        </BtnContainer>
                    </Form>
                    <Div>
                        <DivPerson></DivPerson>
                    </Div>
                </SectionLimiter>
            </AlignLimiter>
        </>
    )
}

export { IndividualForm }
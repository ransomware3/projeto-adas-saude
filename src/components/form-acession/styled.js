import styled from "styled-components"
import Formando from '../../images/formando.jpg'

export const AlignLimiter = styled.section`
    display: flex;
    justify-content: center;
`

export const SectionLimiter = styled.div`
    width: 75%;
    padding: 50px 0;
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid #4cbee2;
`

export const Form = styled.form`
    width: 500px;
    height: 750px;
    padding: 0 20px;
    border-radius: 10px;
    margin-bottom: 40px;
`

export const LimiterH1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 40px;
`

export const FormH1 = styled.h1`
    font-size: 22px;
    color: #1c5c7f;
    margin-bottom: 6px;
`

export const FormSubTitle = styled.p`
    font-size: 15px;
    color: #656565;
    margin-bottom: 8px;
`

export const ContainerInfoList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const ContainerInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 47%;
`

export const GeralContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Label = styled.label`
    font-size: 18px;
    color: #1c5c7f;
    margin-bottom: 5px;
`

export const Input = styled.input`
    width: 100%;
    height: 45px;
    border: 1px solid #b9d8ff;
    border-radius: 4px;
    background-color: #edf4ff;
    padding: 0 20px;
`

export const Select = styled.select`
    width: 100%;
    height: 40px;
    border: 1px solid #b9d8ff;
    border-radius: 4px;
    background-color: #edf4ff;
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
    resize: none;
    border: 1px solid #b9d8ff;
    border-radius: 4px;
    background-color: #edf4ff;
    padding: 20px;
    margin-bottom: 30px;
`

export const BtnSubmit = styled.button`
    width: 100px;
    height: 45px;
    border: none;
    border-radius: 5px;
    background-color: #37a0cd;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
`

export const BtnWhats = styled.a`
    width: 350px;
    height: 45px;
    border: none;
    border-radius: 5px;
    background-color: #01985d;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Div = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivPerson = styled.div`
    width: 100%;
    height: 600px;
    background-image: url(${Formando});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: -370px 0;
    border-radius: 10px;
    margin-bottom: 40px;
`

export const Span = styled.span`
    margin-bottom: 30px;
    color: #888888;
    font-size: 12px;
    font-style: italic;
`

export const PWpp = styled.p`
    font-size: 15px;
    color: #656565;
    margin-bottom: 8px;
`
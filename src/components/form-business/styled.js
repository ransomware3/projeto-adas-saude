import styled from "styled-components"
import Team from '../../images/empresarial.jpg'

export const AlignLimiter = styled.section`
    display: flex;
    justify-content: center;
`

export const SectionLimiter = styled.div`
    width: 75%;
    max-width: 1400px;
    padding-top: 60px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #4cbee2;
`

export const Form = styled.form`
    width: 400px;
    height: 750px;
    padding: 0 20px;
    border-radius: 10px;
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
    font-size: 16px;
    color: #1c5c7f;
    margin-bottom: 5px;
`

export const Input = styled.input`
    width: 100%;
    height: 35px;
    border: 1px solid #b9d8ff;
    border-radius: 4px;
    background-color: #edf4ff;
    padding: 0 20px;
`

export const Select = styled.select`
    width: 100%;
    height: 30px;
    border: 1px solid #b9d8ff;
    border-radius: 4px;
    background-color: #edf4ff;
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 90px;
    resize: none;
    border: 1px solid #b9d8ff;
    border-radius: 4px;
    background-color: #edf4ff;
    padding: 20px;
    margin-bottom: 30px;
`

export const BtnSubmit = styled.button`
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #37a0cd;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
`

export const BtnWhats = styled.a`
    width: 340px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #01985d;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Div = styled.div`
    width: 500px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 1000px){
        display: none;
    }
`

export const DivPerson = styled.div`
    width: 70%;
    height: 80%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: -300px 0;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 19px 0px rgba(55,160,205,1);
    -moz-box-shadow: 0px 0px 19px 0px rgba(55,160,205,1);
    box-shadow: 0px 0px 19px 0px rgba(55,160,205,1);
    background-image: url(${Team});
`

export const Span = styled.span`
    margin-bottom: 15px;
    color: #888888;
    font-size: 12px;
    font-style: italic;
`

export const PWpp = styled.p`
    font-size: 13px;
    color: #656565;
    margin-bottom: 8px;
`

export const Star = styled.span`
    color: red;
`
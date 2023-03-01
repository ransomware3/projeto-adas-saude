import  Professor  from '../../images/professor.png'
import  Jornalista  from '../../images/jornalista.png'
import  Quimico  from '../../images/quimico.png'
import  Medico  from '../../images/medico.png'
import  Comerciante  from '../../images/comerciante.png'
import  Engenheiro  from '../../images/engenheiro.png'
import  Universitario  from '../../images/formando.png'
import  Militar  from '../../images/militar.png'
import  Dentista  from '../../images/dentista.png'
import  Estudante  from '../../images/estudante.png'
import {
    AlignLimiter,
    SectionLimiter,
    DivRow,
    Ul,
    Img,
    H2,
    Li
} from './styled'

const Professsions = () => {
    return(
        <>
            <AlignLimiter>
                <SectionLimiter>
                    <DivRow><H2>Exemplos de profissões elegíveis</H2></DivRow>
                    <DivRow>
                        <Ul>
                            <Li><Img src={Professor}></Img>Professor</Li>
                            <Li><Img src={Jornalista}></Img>Jornalista</Li>
                            <Li><Img src={Quimico}></Img>Quimico</Li>
                            <Li><Img src={Medico}></Img>Medico</Li>
                            <Li><Img src={Comerciante}></Img>Comerciante</Li>
                            <Li><Img src={Engenheiro}></Img>Engenheiro</Li>
                            <Li><Img src={Universitario}></Img>Universitario</Li>
                            <Li><Img src={Militar}></Img>Militar</Li>
                            <Li><Img src={Dentista}></Img>Dentista</Li>
                            <Li><Img src={Estudante}></Img>Estudante</Li>
                        </Ul>
                    </DivRow>
                </SectionLimiter>
            </AlignLimiter>
        </>
    )
}

export { Professsions }
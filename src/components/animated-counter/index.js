import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import Diagram from '../../images/diagram.png'
import Heart from '../../images/heart.png'
import Health from '../../images/health.png'
import {
    DivContainer,
    MiniContainer,
    Img,
    P
} from './styled'

const Counter1 = () => {

    const [count1, setCount1] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount1(prevCount => Math.min(prevCount + 1, 10))
        }, 300)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            <MiniContainer>
                <Img src={Diagram}></Img>
                <P>{count1}+</P>
                <p>Anos no mercado</p>
            </MiniContainer>
        </>
    )
}

const Counter2 = () => {

    const [count2, setCount2] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount2(prevCount => Math.min(prevCount + 21, 4500))
        }, 0.5)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <MiniContainer>
            <Img src={Heart}></Img>
            <P>{count2}+</P>
            <p>Vidas Administradas</p>
        </MiniContainer>
    )
}

const Counter3 = () => {

    const [count3, setCount3] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount3(prevCount => Math.min(prevCount + 1, 100))
        }, 20)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <MiniContainer>
            <Img src={Health}></Img>
            <P>{count3}+</P>
            <p>Consultores</p>
        </MiniContainer>
    )
}

function ShowCounter() {

    const { ref, inView } = useInView()

    return (
        <>
            <DivContainer ref={ref}>
                {inView ? <><Counter1 /><Counter2 /><Counter3 /></> : ''}
            </DivContainer>
        </>
    )
}

const AllCounters = () => {
    return (
        <>
            <ShowCounter />
        </>
    )
}

export { AllCounters }
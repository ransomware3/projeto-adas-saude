import './class-names.css'
import { useState } from "react"
import { BiUpArrowAlt } from 'react-icons/bi'
import { AnchorBtn } from "./styled"

const BtnTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    function showBtnScroll(){
        const windowTop = window.pageYOffset
        if(windowTop > 0){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }

    window.addEventListener('scroll', () => {
        showBtnScroll()
    })

    return (
        <div>
            {isVisible && <AnchorBtn className='btn-hover' href='#top'><BiUpArrowAlt/></AnchorBtn>}
        </div>
    )
}

export { BtnTop }
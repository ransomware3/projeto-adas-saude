import BannerDefault from '../../images/banner-default.png'
import styled from 'styled-components'

const Banner = () => {
    return(
        <>
            <BannerImg src={BannerDefault} alt="Banner Rodrigo Faro"></BannerImg>
        </>
    )
}

const BannerImg = styled.img`
    width: 100%;
`

export { Banner }
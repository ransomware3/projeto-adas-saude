import BannerDefault from '../../images/banner-default.png'
import BannerResponsive from '../../images/banner-responsive.jpg'
import styled from 'styled-components'

const Banner = () => {
    return(
        <>
            <picture>
                <BannerImg srcSet={BannerDefault} media="(min-width: 600px)"/>
                <BannerResponse src={BannerResponsive} alt="Imagem" />
            </picture>
        </>
    )
}

const BannerImg = styled.source`
    width: 100%;
`

const BannerResponse = styled.img`
    width: 100%;
    max-height: 500px;

`

export { Banner }
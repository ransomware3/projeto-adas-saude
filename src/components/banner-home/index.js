import BannerDefault from '../../images/banner-default.jpg'
import BannerResponsive from '../../images/banner-responsive.jpg'
import styled from 'styled-components'

const Banner = () => {
    return (
        <>
            {/* <div>
                <Video src={BannerDefault} type="video/mp4" autoPlay muted/>
            </div> */}

            <picture>
                <BannerDesktop srcSet={BannerDefault} media="(min-width:600px)"></BannerDesktop>
                <BannerResponse src={BannerResponsive} alt="Imagem" />
            </picture>
        </>
    )
}

const BannerDesktop = styled.source`
    width: 100%;
    height: 500px;
`

const BannerResponse = styled.img`
    width: 100%;
    max-height: 500px;

`

export { Banner }
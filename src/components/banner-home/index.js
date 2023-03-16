import BannerDefault from '../../images/video-banner.mp4'
import BannerResponsive from '../../images/banner-responsive.jpg'
import styled from 'styled-components'

const Banner = () => {
    return (
        <>
            <Div>
                <Video src={BannerDefault} type="video/mp4" autoPlay muted/>
                <BannerResponse src={BannerResponsive} alt="Banner Adas Saúde Seguros"/>
            </Div>
        </>
    )
}

const BannerResponse = styled.img`
    width: 100%;
    max-height: 500px;
    display: none;

    @media(max-width: 600px){
        display: block;
    }
`

const Div = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`

const Video = styled.video`
    width: 100%;
    max-width: 1920px;
    display: block;

    @media(max-width: 600px){
        display: none;
    }
`

export { Banner }
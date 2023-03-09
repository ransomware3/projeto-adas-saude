import BannerDefault from '../../images/video-banner.mp4'
// import BannerResponsive from '../../images/banner-responsive.jpg'
import styled from 'styled-components'

const Banner = () => {
    return (
        <>
            <div>
                <Video src={BannerDefault} type="video/mp4" autoPlay muted/>
            </div>

            {/* <picture>
                <BannerResponse src={BannerResponsive} alt="Imagem" />
            </picture> */}

            {/* <ContainerImg></ContainerImg> */}
        </>
    )
}

// const ContainerImg = styled.div`
//     width: 100%;
//     height: 60vh;
//     max-height: 598px;
//     border: 1px solid #000;
//     background-image: url(${BannerDefault});
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: contain;
//     // border: 1px solid blue;
// `

const Video = styled.video`
    width: 100%;
    height: 500px;
`

// const BannerResponse = styled.img`
//     width: 100%;
//     max-height: 500px;

// `

export { Banner }
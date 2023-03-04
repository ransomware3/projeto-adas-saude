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

const BannerImg = styled.source`
    width: 100%;
`

const BannerResponse = styled.img`
    width: 100%;
    max-height: 500px;

`

export { Banner }
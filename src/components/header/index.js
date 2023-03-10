import './class-names.css'
import { NavLink } from 'react-router-dom'
import { BsWhatsapp } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import Logo from '../../images/logo-2.png'
import {
    ContactBar,
    ContactDiv,
    ContactUl,
    ContactLi,
    SocialUl,
    Anchor,
    NavBar,
    HeaderContainer,
    LogoLink,
    LogoImg,
    NavList,
    NavUl,
    OptionsList,
    LinkList,
    LabelCheck,
    WppBtn,
    Facebook,
    Mail,
    Phone,
    Instagram,
    Location,
    SocialLi,
    NavLi,
    NavMobList,
    LiMobile,
    InputCkBox,
    MenuMob,
    OptionsMob,
    LinkMobList,
    WppMobBtn,
    AnchorMob,
    SocialLiMob,
    SocialMobAnchor,
    FacebookMob,
    InstagramMob,
    MobileSecretBar
} from './styled'

export const Header = () => {
    return(
        <>
            <MobileSecretBar id='top'></MobileSecretBar>

            <ContactBar>
                <ContactDiv>
                    <ContactUl>
                        <ContactLi><Location/>São Paulo/SP</ContactLi>
                        <li><Anchor href='tel:11-98816-5363'><Phone/>(11) 98816-5363</Anchor></li>
                        <li><Anchor href='mailto:contato@adasseguros.com.br'><Mail/>Email: contato@adasseguros.com.br</Anchor></li>
                    </ContactUl>

                    <SocialUl>
                        <SocialLi className='hover-social'><a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/people/Adas-Sa%C3%BAde-Seguros/100087908922191/"><Facebook className='icons'/></a></SocialLi>

                        <SocialLi className='hover-social'><a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/adassaudeseguros/'><Instagram className='icons'/></a></SocialLi>
                    </SocialUl>
                </ContactDiv>
            </ContactBar>

            <NavBar>
                <HeaderContainer>
                    <LogoLink to='/'><LogoImg src={Logo}></LogoImg></LogoLink>
                    <Nav/>
                </HeaderContainer>
            </NavBar>
        </>
    )
}

const Nav = () => {

    let activeStyle = {
        color: '#06a3da',
    }

    return(
        <>
            <NavList>
                <NavUl>
                    <NavLi><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to='/'>Início</NavLink></NavLi>

                    <NavLi>
                        <LabelCheck className='hover-contact label-check'>Planos de Saúde&nbsp;<IoIosArrowDown className='arrow'/></LabelCheck>
                        <OptionsList className='ul'>
                            <li><LinkList className='hover-list' to='/plano-empresarial'>PLANO EMPRESARIAL</LinkList></li>
                            <li><LinkList className='hover-list' to='/plano-adesao'>PLANO ADESÃO</LinkList></li>
                            <li><LinkList className='hover-list' to='/plano-individual'>PLANO INDIVIDUAL</LinkList></li>
                        </OptionsList>
                    </NavLi>

                    <NavLi><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to='/sobre'>Sobre Nós</NavLink></NavLi>

                    <NavLi><Anchor target='_blank' rel="noopener noreferrer" href='https://adassaude.blogspot.com/'>Novidades</Anchor></NavLi>
                </NavUl>
                <WppBtn target='_blank' href="https://wa.me/5511988165363?text=Olá,%20tudo%20bem?%20Vim%20do%20seu%20site:%20Adas%20Saúde%20Seguros,%20e%20gostaria%20de%20fazer%20uma%20cotação%20gratuita!" rel="noopener noreferrer"><BsWhatsapp/>&nbsp;Fale com um consultor</WppBtn>
            </NavList>

            <NavMobList>
                <InputCkBox type="checkbox" id="menu-hamburguer"></InputCkBox>
	    
	            <label htmlFor="menu-hamburguer">
                    <div class="menu">
                        <span class="hamburguer"></span>
                    </div>
	            </label>
	    
                <MenuMob className='nav-mob'>
                    <ul>
                        <LiMobile className='li-mobile'><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link nav-link-mobile' to='/'>Início</NavLink></LiMobile>

                        <LiMobile className='li-mobile'><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link nav-link-mobile' to='/sobre'>Sobre Nós</NavLink></LiMobile>

                        <LiMobile className='li-mobile'><a className='nav-link nav-link-mobile' target='_blank' rel="noopener noreferrer" href='https://adassaude.blogspot.com/'>Novidades</a></LiMobile>

                        <LiMobile className='li-mobile li-label'><LabelCheck className='hover-contact label-check label-mob nav-link-moblie'>Planos de Saúde</LabelCheck></LiMobile>
                        <li>
                            <OptionsMob className='ul'>
                                <li><LinkMobList className='hover-list' to='/plano-empresarial'>PLANO EMPRESARIAL</LinkMobList></li>

                                <li><LinkMobList className='hover-list' to='/plano-adesao'>PLANO ADESÃO</LinkMobList></li>

                                <li><LinkMobList className='hover-list' to='/plano-individual'>PLANO INDIVIDUAL</LinkMobList></li>
                            </OptionsMob>
                        </li>
                        <li>
                            <WppMobBtn target='_blank' href="https://wa.me/5511988165363?text=Olá,%20tudo%20bem?%20Vim%20do%20seu%20site:%20Adas%20Saúde%20Seguros,%20e%20gostaria%20de%20fazer%20uma%20cotação%20gratuita!" rel="noopener noreferrer"><BsWhatsapp/>&nbsp;Fale com um consultor</WppMobBtn>
                        </li>
                        <li className='location-mob'><Location/>&nbsp;&nbsp;São Paulo/SP</li>
                        <li><AnchorMob href='tel:11-98816-5363'><Phone/>(11) 98816-5363</AnchorMob></li>
                        <li><AnchorMob href='mailto:contato@adasseguros.com.br'><Mail/>Email: contato@adasseguros.com.br</AnchorMob></li>
                        <SocialLiMob>
                            <SocialMobAnchor target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/people/Adas-Sa%C3%BAde-Seguros/100087908922191/"><FacebookMob className='icons'/></SocialMobAnchor>

                            <SocialMobAnchor target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/adassaudeseguros/'><InstagramMob className='icons'/></SocialMobAnchor>
                        </SocialLiMob>
                    </ul>
                </MenuMob>
            </NavMobList>
        </>
    )
}
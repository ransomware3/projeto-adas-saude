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
    NavMob
} from './styled'

export const Header = () => {
    return(
        <>
            <ContactBar id='top'>
                <ContactDiv>
                    <ContactUl>
                        <ContactLi><Location/>São Paulo/SP</ContactLi>
                        <li><Anchor href='tel:704-555-0127'><Phone/>(704) 555-0127</Anchor></li>
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

                    <NavLi><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to='/blog'>Blog</NavLink></NavLi>
                </NavUl>
                <WppBtn target='_blank' href="https://wa.me/551130042222?text=Olá,%20tudo%20bem?%20Vim%20do%20seu%20site:%20Adas%20Saúde%20Seguros,%20e%20gostaria%20de%20fazer%20uma%20cotação%20gratuita!" rel="noopener noreferrer"><BsWhatsapp/>&nbsp;Fale com um consultor</WppBtn>
            </NavList>

            <NavMobList>
                <InputCkBox type="checkbox" id="menu-hamburguer"></InputCkBox>
	    
	            <label htmlFor="menu-hamburguer">
                    <div class="menu">
                        <span class="hamburguer"></span>
                    </div>
	            </label>
	    
                <NavMob className='nav-mob'>
                    <ul>
                        <LiMobile className='li-mobile'><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link .nav-link-moblie' to='/'>Início</NavLink></LiMobile>

                        <LiMobile className='li-mobile'><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link .nav-link-moblie' to='/sobre'>Sobre Nós</NavLink></LiMobile>

                        <LiMobile className='li-mobile'><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link .nav-link-moblie' to='/blog'>Blog</NavLink></LiMobile>

                        <LiMobile className='li-mobile'><LabelCheck className='hover-contact label-check .nav-link-moblie'>Planos de Saúde&nbsp;<IoIosArrowDown className='arrow'/></LabelCheck></LiMobile>
                    </ul>
                </NavMob>
            </NavMobList>
        </>
    )
}
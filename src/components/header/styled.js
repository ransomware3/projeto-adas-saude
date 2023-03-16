import styled from "styled-components"
import { Link } from "react-router-dom"
import { ImPhone } from 'react-icons/im'
import { HiMail } from 'react-icons/hi'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'

export const MobileSecretBar = styled.div`
    width: 100%;
    height: 1px;
`

export const ContactBar = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fafcff;

    @media(max-width: 1200px){
        height: 40px;
    }

    @media(max-width: 1000px){
        display: none;
    }
`

export const ContactDiv = styled.div`
    width: 70%;
    max-width: 1360px;
    height 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContactUl = styled.ul`
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 1500px){
        width: 60%;
    }

    @media(max-width: 1460px){
        width: 65%;
    }

    @media(max-width: 1170px){
        width: 70%;
    }

    @media(max-width: 1050px){
        width: 75%;
    }
`

export const ContactLi = styled.li`
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 10px;

    @media(max-width: 1370px){
        font-size: 14px;
    }
`

export const SocialUl = styled.ul`
    width: 5%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const SocialLi = styled.li`
    &:hover .icons{
        color: #1c5c7f;
        cursor: pointer;
    }
`

export const Anchor = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    transition: .2s ease-in-out;
    height: 100%;
    display: flex;
    align-items: center;

    &:hover{
        color: #06a3da;
        cursor: pointer;
    }

    @media(max-width: 1370px){
        font-size: 14px;
    }
`

export const AnchorMob = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    transition: .2s ease-in-out;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-top: 15px;
`

export const SocialLiMob = styled.li`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`

export const SocialMobAnchor = styled.a`
    width: 48%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7ccad6;
    border-radius: 10px;
    transition: .2s;

    &:hover{
        background-color: #37a0cd;
        cursor: pointer;
    }
`

///////////////////////////////////////

export const NavBar = styled.header`
    width: 100%;
    height: 90px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 3;

    @media(max-width: 1200px){
        height: 85px;
    }
`

export const HeaderContainer = styled.div`
    width: 70%;
    max-width: 1360px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`

export const LogoLink = styled.a`
    width: 120px;

    @media(max-width: 1000px){
        width: 90px;
    }
`

export const LogoImg = styled.img`
    width: 100%;
`

export const NavList = styled.nav`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 40px;

    @media(max-width: 1530px){
        width: 65%;
    }

    @media(max-width: 1170px){
        width: 75%;
    }

    @media(max-width: 1000px){
        display: none;
    }
`

export const NavMobList = styled.div`
    width: 30%;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    display: none;

    @media(max-width: 1000px){
        display: flex;
    }
`

export const InputCkBox = styled.input`
    display: none;
`

export const MenuMob = styled.nav`
    display: none;
    width: 400px;
    height: 550px;
    border: 1px solid #37a0cd;
    border-radius: 10px;
    position: absolute;
    background-color: #fff;
    top: 80px;
    right: 0;
    padding: 65px 0px;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;

    @media(max-width: 485px){
        width: 350px;
    }

    @media(max-width: 400px){
        width: 300px;
        padding: 55px 23px;
    }
`

export const LiMobile = styled.li`
    font-size: 20px;
    margin-bottom: 15px;
    width: 100%;

    @media(max-width: 485px){
        font-size: 16px;
    }

    @media(max-width: 400px){
        font-size: 14px;
    }
`

export const NavUl = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`

export const NavLi = styled.li`
    display: flex;
    align-items: center;
    font-size: 17px;

    @media(max-width: 1370px){
        font-size: 14px;
    }
`

export const OptionsList = styled.ul`
    width: 300px;
    position: absolute;
    top: 78%;
    right: 36.5%;
    opacity: 0;
    overflow-y: auto;
    border-radius: 10px;

    @media(max-width: 1530px){
        right: 38%;
    }

    @media(max-width: 1460px){
        right: 37%;
    }

    @media(max-width: 1370px){
        width: 250px;
        right: 39%;
    }

    @media(max-width: 1370px){
        right: 38%;
    }

    @media(max-width: 1200px){
        right: 38%;
    }

    @media(max-width: 1170px){
        right: 45%;
    }

    @media(max-width: 1100px){
        right: 43%;
    }
`

export const LinkList = styled(Link)`
    color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7ccad6;
    margin-bottom: 2px;
    transition: .2s;

    &:hover{
        background-color: #37a0cd;
        cursor: pointer;
    }

    @media(max-width: 1370px){
        font-size: 14px;
    }

    @media(max-width: 400px){
        font-size: 12px;
    }
`

export const OptionsMob = styled.ul`
    width: 300px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;

    @media(max-width: 400px){
        width: 250px;
    }
`

export const LinkMobList = styled(Link)`
    color: #fff;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7ccad6;
    transition: .2s;
    border-radius: 10px;
    font-size: 13px;
    margin-bottom: 10px;

    &:hover{
        background-color: #37a0cd;
        cursor: pointer;
    }
`

export const LabelCheck = styled.p`
    position: relative;
    display: flex;
    align-items: center;
`

export const WppBtn = styled.a`
    width: 400px;
    height: 50px;
    border: 1px solid #06a3da;
    color: #06a3da;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    cursor: pointer;

    @media(max-width: 1370px){
        font-size: 15px;
        width: 350px;
        height: 50px;
        border-radius: 9px;
    }
`

export const WppMobBtn = styled.a`
    width: 100%;
    height: 50px;
    border: 1px solid #06a3da;
    color: #06a3da;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
    margin-bottom: 40px;
`

export const Facebook = styled(FaFacebookF)`
    color: #06a3da;
    transition: .2s ease-in-out;
`

export const FacebookMob = styled(FaFacebookF)`
    color: #fff;
    transition: .2s ease-in-out;
`

export const Mail = styled(HiMail)`
    color: #06a3da;
    transition: .2s ease-in-out;
`

export const Phone = styled(ImPhone)`
    color: #06a3da;
    transition: .2s ease-in-out;
`

export const Instagram = styled(BsInstagram)`
    color: #fff;
    padding: 1px;
    background: linear-gradient(90deg, rgba(150,47,191,1) 0%, rgba(214,41,118,1) 50%, rgba(250,126,30,1) 100%);
    transition: .2s ease-in-out;
`

export const InstagramMob = styled(BsInstagram)`
    color: #fff;
    transition: .2s ease-in-out;
`

export const Location = styled(IoLocationSharp)`
    color: #06a3da;
`
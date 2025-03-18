import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import logo from '../assets/images/yaralogo.png'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.scrolled ? theme.colors.secondary : 'transparent'};
  padding: 0.25rem 2rem;
  z-index: 1000;
  transition: all 0.3s ease;
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  height: 140px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`

const NavLink = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.primary};
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.white};
  font-size: 2.5rem;
  cursor: pointer;
  padding: ${theme.spacing.sm};
  z-index: 1001;
  position: relative;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
  }
`

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: ${props => props.isOpen ? '0' : '-100%'};
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background-color: ${theme.colors.secondary};
  padding: ${theme.spacing.xl};
  padding-top: 80px;
  transition: right 0.3s ease;
  z-index: 1000;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${theme.spacing.lg};
  }
`

const MobileNavLink = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  font-size: 1.2rem;
  padding: ${theme.spacing.md} 0;
  display: block;
  transition: color 0.3s ease;
  width: 100%;
  text-align: center;

  &:hover {
    color: ${theme.colors.primary};
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  background: none;
  border: none;
  color: ${theme.colors.white};
  font-size: 2rem;
  cursor: pointer;
  padding: ${theme.spacing.sm};
`

const BookNowButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 0.6rem 1.75rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  letter-spacing: 0.5px;

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`

const MobileNavButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 80%;
  margin-top: ${theme.spacing.md};
  letter-spacing: 0.5px;

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`

const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.secondary};
  font-size: 2rem;
  cursor: pointer;
  padding: ${theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2.5rem;
    width: 60px;
    height: 60px;
  }
`

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Nav scrolled={isScrolled}>
      <NavContainer>
        <Logo src={logo} alt="Yaras Kitchen Logo" onClick={scrollToTop} />
        <NavLinks>
          <NavLink onClick={() => scrollToSection('events')}>Events</NavLink>
          <NavLink onClick={() => scrollToSection('menu')}>Menu</NavLink>
          <NavLink onClick={() => scrollToSection('testimonials')}>Reviews</NavLink>
          <BookNowButton onClick={() => scrollToSection('inquiry')}>Book Now</BookNowButton>
        </NavLinks>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? '×' : '☰'}
        </MobileMenuButton>
      </NavContainer>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNavLink onClick={() => scrollToSection('events')}>Events</MobileNavLink>
        <MobileNavLink onClick={() => scrollToSection('menu')}>Menu</MobileNavLink>
        <MobileNavLink onClick={() => scrollToSection('testimonials')}>Reviews</MobileNavLink>
        <MobileNavButton onClick={() => scrollToSection('inquiry')}>Book Now</MobileNavButton>
      </MobileMenu>
    </Nav>
  )
}

export default Navbar 
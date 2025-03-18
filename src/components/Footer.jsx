import styled from 'styled-components'
import { theme } from '../styles/theme'
import logo from '../assets/images/yaralogo.png'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

const FooterSection = styled.footer`
  background-color: ${theme.colors.secondary};
  padding: ${theme.spacing.xxl} 0 ${theme.spacing.xl};
  color: ${theme.colors.white};
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
    padding: 0 ${theme.spacing.lg};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${theme.spacing.xl};
    padding: 0 ${theme.spacing.md};
  }
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    align-items: center;
    padding: ${theme.spacing.md} 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:last-child {
      border-bottom: none;
    }
  }
`

const FooterLogo = styled.div`
  img {
    height: 80px;
    margin-bottom: ${theme.spacing.md};
    width: auto;
    object-fit: contain;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    img {
      height: 60px;
      width: auto;
      object-fit: contain;
    }
  }
`

const FooterTitle = styled.h3`
  color: ${theme.colors.white};
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: ${theme.spacing.md};
  position: relative;
  padding-bottom: ${theme.spacing.sm};

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    &:after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

const FooterLink = styled.a`
  color: ${theme.colors.lightGray};
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;

  &:hover {
    color: ${theme.colors.primary};
  }
`

const FooterText = styled.p`
  color: ${theme.colors.lightGray};
  font-size: 0.95rem;
  line-height: 1.6;
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: center;
    margin-top: ${theme.spacing.md};
  }
`

const SocialLink = styled.a`
  color: ${theme.colors.lightGray};
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
    transform: translateY(-2px);
  }
`

const Copyright = styled.div`
  text-align: center;
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${theme.colors.lightGray};
  font-size: 0.9rem;
  margin: 0 ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: 0 ${theme.spacing.md};
    padding-top: ${theme.spacing.lg};
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  color: ${theme.colors.lightGray};
  font-size: 0.95rem;
  line-height: 1.6;
`

const Footer = () => {
  return (
    <FooterSection>
      <FooterContent>
        <FooterColumn>
          <FooterLogo>
            <img src={logo} alt="Yaras Kitchen Logo" />
          </FooterLogo>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="#events">Events</FooterLink>
          <FooterLink href="#menu">Menu</FooterLink>
          <FooterLink href="#testimonials">Reviews</FooterLink>
          <FooterLink href="#inquiry">Contact</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Contact Us</FooterTitle>
          <ContactInfo>
            <FooterText>Harleysville, PA</FooterText>
            <FooterLink href="tel:4846369002">(484) 636-9002</FooterLink>
            <FooterLink href="mailto:info@yaraskitchen.com">info@yaraskitchen.com</FooterLink>
          </ContactInfo>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Follow Us</FooterTitle>
          <SocialLinks>
            <SocialLink href="https://www.instagram.com/yaraskitchen" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://www.facebook.com/share/19CeLbc7BG/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} Yaras Kitchen. All rights reserved.
      </Copyright>
    </FooterSection>
  )
}

export default Footer 
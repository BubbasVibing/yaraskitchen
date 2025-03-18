import styled, { keyframes } from 'styled-components'
import { theme } from '../styles/theme'
import heroImage from '../assets/images/yarasheropage.png'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const shine = keyframes`
  0% {
    background-position: -100% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: -100% 50%;
  }
`

const HeroSection = styled.section`
  height: 100vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.white};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    background: linear-gradient(to top, rgba(34, 34, 34, 0.8), transparent);
    z-index: 1;
  }
`

const HeroContent = styled.div`
  max-width: 900px;
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out;
`

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-family: ${theme.fonts.heading};
  background: linear-gradient(90deg, 
    ${theme.colors.white} 0%,
    ${theme.colors.white} 40%,
    ${theme.colors.primary} 50%,
    ${theme.colors.white} 60%,
    ${theme.colors.white} 100%
  );
  background-size: 200% auto;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: ${shine} 8s linear infinite;
  position: relative;
  filter: brightness(1.2) contrast(1.1);

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent 0%,
      ${theme.colors.primary} 50%,
      transparent 100%
    );
    animation: ${shine} 8s linear infinite;
    filter: brightness(1.3);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 3.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
  color: ${theme.colors.white};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  opacity: 0.9;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.1rem;
    max-width: 500px;
  }
`

const CTAButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 50px;
  transition: all 0.4s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  border: 2px solid ${theme.colors.primary};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: transparent;
    border-color: ${theme.colors.white};
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
`

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: bounce 2s infinite;
  cursor: pointer;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-20px) translateX(-50%);
    }
    60% {
      transform: translateY(-10px) translateX(-50%);
    }
  }
`

const ScrollIcon = styled.div`
  width: 30px;
  height: 50px;
  border: 2px solid ${theme.colors.white};
  border-radius: 15px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 6px;
    height: 6px;
    background-color: ${theme.colors.white};
    border-radius: 50%;
    transform: translateX(-50%);
    animation: scroll 2s infinite;
  }

  @keyframes scroll {
    0% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 20px);
      opacity: 0;
    }
  }
`

const Logo = styled.img`
  height: 80px;
  max-width: 300px;
  margin-bottom: ${theme.spacing.xl};
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const Hero = () => {
  const scrollToEvents = () => {
    document.getElementById('events').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <HeroSection>
      <HeroContent>
        <Title>Yaras Kitchen</Title>
        <Subtitle>
          Experience the art of Egyptian catering, where every event becomes an unforgettable celebration of flavors and elegance
        </Subtitle>
        <CTAButton onClick={() => document.getElementById('inquiry').scrollIntoView({ behavior: 'smooth' })}>
          Book Your Event
        </CTAButton>
      </HeroContent>
      <ScrollIndicator onClick={scrollToEvents}>
        <ScrollIcon />
      </ScrollIndicator>
    </HeroSection>
  )
}

export default Hero 
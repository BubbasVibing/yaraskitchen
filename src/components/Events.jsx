import styled, { keyframes } from 'styled-components'
import { theme } from '../styles/theme'
import { useState, useEffect } from 'react'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const EventsSection = styled.section`
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.xl} 0;
  position: relative;
  overflow: hidden;
  min-height: 600px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(135deg, rgba(186, 153, 86, 0.05) 0%, rgba(34, 34, 34, 0.05) 100%);
    z-index: 0;
  }
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacing.xl};
  position: relative;
  animation: ${fadeInUp} 0.8s ease-out;
  font-weight: 300;
  letter-spacing: 2px;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background-color: ${theme.colors.primary};
  }
`

const EventsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  position: relative;
  z-index: 1;
`

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const EventCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  padding: ${theme.spacing.xl};
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  opacity: ${props => props.isActive ? 1 : 0};
  transform: ${props => props.isActive ? 'translateY(0)' : 'translateY(20px)'};
  transition: all 0.5s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
`

const EventIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.md};
  transition: transform 0.3s ease;
  flex-shrink: 0;

  svg {
    width: 30px;
    height: 30px;
    color: ${theme.colors.white};
    display: block;
    flex-shrink: 0;
  }

  ${EventCard}:hover & {
    transform: scale(1.1);
    background-color: ${theme.colors.secondary};
  }
`

const EventTitle = styled.h3`
  font-size: 1.8rem;
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacing.md};
  font-weight: 500;
`

const EventDescription = styled.p`
  color: ${theme.colors.darkGray};
  line-height: 1.6;
  margin-top: auto;
`

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
`

const NavButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.secondary};
    transform: scale(1.1);
  }

  &:disabled {
    background-color: ${theme.colors.background};
    color: ${theme.colors.secondary};
    cursor: not-allowed;
    transform: none;
  }
`

const events = [
  { 
    title: 'Corporate Events', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
        <path d="M7 12h2v5H7zm4-7h2v12h-2zm4 3h2v9h-2z"/>
      </svg>
    ),
    description: 'Elevate your business gatherings with our sophisticated catering services, perfect for conferences, meetings, and corporate celebrations.'
  },
  { 
    title: 'Employee Appreciation Days', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-1.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
    description: 'Show your team how much you value them with a memorable celebration featuring our premium catering options.'
  },
  { 
    title: 'Family Reunions', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-1.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
    description: 'Create lasting memories with your loved ones over exquisite meals that bring everyone together.'
  },
  { 
    title: 'Birthday Parties', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
      </svg>
    ),
    description: 'Make birthdays special with our custom catering services, featuring elegant presentation and delicious cuisine.'
  },
  { 
    title: 'Fundraising Events', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    description: 'Host successful fundraising events with our professional catering services that impress your guests.'
  },
  { 
    title: 'Weddings & Wedding After Parties', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14H7v-2h3v2zm0-3H7v-2h3v2zm0-3H7V9h3v2zm5 6h-3v-2h3v2zm0-3h-3v-2h3v2zm0-3h-3V9h3v2z"/>
      </svg>
    ),
    description: 'Make your special day unforgettable with our luxurious wedding catering services, tailored to your vision.'
  },
  { 
    title: 'Cookouts & Picnics', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 1.01-3 3-3s2.99 1 3 3H6zm9.88 4.38c-.32.31-.86.32-1.22 0-.37-.32-.74-.61-1.1-.86l1.1-1.1c.37.35.74.65 1.1.86.36.25.9.24 1.22-.01zM19 13.64c0-.99-.01-1.98-.76-2.64h-3.48c.05.33.08.66.08 1 0 2.21-1.79 4-4 4s-4-1.79-4-4c0-.34.03-.67.08-1H5.76C5 11.66 5 12.65 5 13.64c0 2 1.01 3 3 3h8c1.99 0 3-1 3-3z"/>
      </svg>
    ),
    description: 'Enjoy outdoor gatherings with our specially curated picnic and cookout menus, perfect for any outdoor occasion.'
  },
  { 
    title: 'Graduation Parties', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M22 9l-7-3.25V2h-2v3.75L6 9l7 3.25L20 9zm-7 3.25L8 9v10l7 3.25 7-3.25V9l-7 3.25zM12 12.5L8 10v8l4 1.5v-7zm0 7l4-1.5v-8l-4 2.5v7z"/>
      </svg>
    ),
    description: 'Celebrate academic achievements with style, featuring our premium catering services for graduation celebrations.'
  }
]

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true)
        setCurrentIndex((prevIndex) => (prevIndex + 3) % events.length)
      }
    }, 3000)

    return () => clearInterval(timer)
  }, [isTransitioning])

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 500)
    return () => clearTimeout(timer)
  }, [currentIndex])

  const visibleEvents = events.slice(currentIndex, currentIndex + 3)

  return (
    <EventsSection id="events">
      <SectionTitle>Events We Cater</SectionTitle>
      <EventsContainer>
        <EventsGrid>
          {visibleEvents.map((event, index) => (
            <EventCard key={index} isActive={!isTransitioning}>
              <EventIcon>{event.icon}</EventIcon>
              <EventTitle>{event.title}</EventTitle>
              <EventDescription>{event.description}</EventDescription>
            </EventCard>
          ))}
        </EventsGrid>
      </EventsContainer>
    </EventsSection>
  )
}

export default Events 
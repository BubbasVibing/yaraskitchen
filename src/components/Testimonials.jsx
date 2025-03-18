import styled, { keyframes } from 'styled-components'
import { theme } from '../styles/theme'
import { useState, useEffect } from 'react'

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

const TestimonialsSection = styled.section`
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.xl} 0;
  position: relative;
  overflow: visible;

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
  animation: ${fadeIn} 0.8s ease-out;
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

const TestimonialsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  position: relative;
  z-index: 1;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TestimonialCard = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.lg};
  border-radius: 4px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  opacity: ${props => props.isActive ? 1 : 0};
  transform: ${props => props.isActive ? 'translateY(0)' : 'translateY(20px)'};
  transition: all 0.5s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
`

const AuthorImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${theme.colors.primary};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const AuthorInfo = styled.div`
  text-align: center;
`

const AuthorName = styled.h4`
  color: ${theme.colors.secondary};
  font-size: 1.3rem;
  margin-bottom: 4px;
`

const AuthorTitle = styled.p`
  color: ${theme.colors.primary};
  font-size: 1rem;
  margin-bottom: ${theme.spacing.sm};
`

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${theme.colors.secondary};
  font-style: italic;
  max-width: 700px;
  margin: 0 auto;
`

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
  opacity: 0.8;
`

const NavigationButtons = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  justify-content: space-between;
  pointer-events: none;
  z-index: 2;
  padding: 0 ${theme.spacing.xl};
`

const NavButton = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  pointer-events: auto;

  &:hover {
    background: ${theme.colors.secondary};
    transform: scale(1.1);
  }

  &:disabled {
    background: ${theme.colors.lightGray};
    cursor: not-allowed;
    transform: none;
  }
`

const testimonials = [
  {
    text: "Yaras Kitchen transformed our corporate event into an unforgettable experience. The attention to detail and exquisite flavors left our guests impressed.",
    author: "Sarah Johnson",
    title: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    bio: "Hosted multiple corporate events with Yaras Kitchen. Their consistency and quality are unmatched."
  },
  {
    text: "The wedding catering was beyond our expectations. Every dish was a masterpiece, and the service was impeccable.",
    author: "Michael & Emily Chen",
    title: "Newlyweds",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=150&h=150&fit=crop",
    bio: "Our wedding day was perfect thanks to Yaras Kitchen's exceptional service and delicious food."
  },
  {
    text: "Their Egyptian-themed menu brought authentic flavors to our family reunion. The presentation was stunning!",
    author: "David Ahmed",
    title: "Family Reunion Host",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    bio: "As an Egyptian-American, I was impressed by the authentic flavors and attention to detail."
  },
  {
    text: "The graduation party catering was perfect. The variety of dishes and professional service made our celebration special.",
    author: "Lisa Thompson",
    title: "Graduation Party Host",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    bio: "Yaras Kitchen made my daughter's graduation celebration memorable with their outstanding service."
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }
    }, 3000)

    return () => clearInterval(timer)
  }, [isTransitioning])

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 500)
    return () => clearTimeout(timer)
  }, [currentIndex])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <TestimonialsSection id="testimonials">
      <SectionTitle>What Our Clients Say</SectionTitle>
      <TestimonialsContainer>
        <NavigationButtons>
          <NavButton onClick={prevTestimonial} aria-label="Previous testimonial">
            ←
          </NavButton>
          <NavButton onClick={nextTestimonial} aria-label="Next testimonial">
            →
          </NavButton>
        </NavigationButtons>
        <TestimonialCard isActive={!isTransitioning}>
          <TestimonialContent>
            <QuoteIcon>"</QuoteIcon>
            <TestimonialText>{testimonials[currentIndex].text}</TestimonialText>
            <TestimonialAuthor>
              <AuthorImage>
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} />
              </AuthorImage>
              <AuthorInfo>
                <AuthorName>{testimonials[currentIndex].author}</AuthorName>
                <AuthorTitle>{testimonials[currentIndex].title}</AuthorTitle>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialContent>
        </TestimonialCard>
      </TestimonialsContainer>
    </TestimonialsSection>
  )
}

export default Testimonials 
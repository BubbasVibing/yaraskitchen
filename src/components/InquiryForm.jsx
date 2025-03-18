import styled from 'styled-components'
import { theme } from '../styles/theme'

const InquirySection = styled.section`
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.xl} 0;
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacing.xl};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: ${theme.colors.primary};
  }
`

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.white};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const Form = styled.form`
  display: grid;
  gap: ${theme.spacing.md};
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div`
  display: grid;
  gap: ${theme.spacing.xs};
`

const Label = styled.label`
  color: ${theme.colors.secondary};
  font-weight: 500;
`

const Input = styled.input`
  padding: ${theme.spacing.sm};
  border: 2px solid ${theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary};
    box-shadow: 0 0 0 2px rgba(186, 153, 86, 0.2);
  }
`

const TextArea = styled.textarea`
  padding: ${theme.spacing.sm};
  border: 2px solid ${theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary};
    box-shadow: 0 0 0 2px rgba(186, 153, 86, 0.2);
  }
`

const SubmitButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacing.md};
  font-size: 1.1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: ${theme.spacing.md};

  &:hover {
    background-color: ${theme.colors.secondary};
    transform: translateY(-2px);
  }
`

const InquiryForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your inquiry! We will get back to you soon.')
  }

  return (
    <InquirySection id="inquiry">
      <SectionTitle>Book Your Event</SectionTitle>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label htmlFor="name">Full Name</Label>
              <Input type="text" id="name" name="name" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" required />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label htmlFor="phone">Phone Number</Label>
              <Input type="tel" id="phone" name="phone" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="event-type">Event Type</Label>
              <Input type="text" id="event-type" name="event-type" required />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label htmlFor="date">Event Date</Label>
              <Input type="date" id="date" name="date" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="guests">Number of Guests</Label>
              <Input type="number" id="guests" name="guests" min="1" required />
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label htmlFor="message">Additional Details</Label>
            <TextArea id="message" name="message" required />
          </FormGroup>
          <SubmitButton type="submit">Submit Inquiry</SubmitButton>
        </Form>
      </FormContainer>
    </InquirySection>
  )
}

export default InquiryForm 
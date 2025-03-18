import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Menu from './components/Menu'
import Testimonials from './components/Testimonials'
import InquiryForm from './components/InquiryForm'
import Footer from './components/Footer'

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Navbar />
          <Hero />
          <Events />
          <Menu />
          <Testimonials />
          <InquiryForm />
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  )
}

export default App 
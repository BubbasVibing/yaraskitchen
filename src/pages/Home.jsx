import styled from 'styled-components'

const HomeContainer = styled.div`
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to Yaras Kitchen</Title>
      <p>Your delicious journey begins here!</p>
    </HomeContainer>
  )
}

export default Home 
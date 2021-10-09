import { ContainerStyled } from './Safe.style'
import { Container } from '@mui/material'

const SafeEnvironment = () => {
  return (
    <ContainerStyled>
      <Container>
        Ambiente seguro <i className={'twf-lock'} />
      </Container>
    </ContainerStyled>
  )

}

export default SafeEnvironment
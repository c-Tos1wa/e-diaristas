import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import Title from 'ui/components/data-display/title/Title'
import UserInformation from 'ui/components/data-display/UserInformation/UserInfo'
import TextAreaMask from 'ui/components/Input/TextAreaMask/TextAreaMask'
import { Button, Typography, Container } from '@mui/material'
import { FormElement, ProfessionalSheet, ProfessionalSheetContainer } from '@styles/pages/index.style'

const Home: NextPage = () => {
  return (
    <>
      <SafeEnvironment />
      <Title
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />

      <Container>

        <FormElement>
          <TextAreaMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            variant={'outlined'}
            fullWidth
          />

          <Typography
            color={'error'}
          >
            CEP inválido
          </Typography>

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
          >
            Buscar
          </Button>
        </FormElement>

        <ProfessionalSheet>
          <ProfessionalSheetContainer>
            <UserInformation
              name={''}
              image={''}
              rating={3}
              description={''}
            />
          </ProfessionalSheetContainer>
        </ProfessionalSheet>
      </Container>
    </>
  )
}

export default Home;

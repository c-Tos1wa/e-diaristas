import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import Title from 'ui/components/data-display/title/Title'
import UserInformation from 'ui/components/data-display/UserInformation/UserInfo'
import TextAreaMask from 'ui/components/Input/TextAreaMask/TextAreaMask'
import { Button, Typography, Container, CircularProgress } from '@mui/material'
import { FormElement, ProfessionalSheet, ProfessionalSheetContainer } from '@styles/pages/index.style'
import useIndex from 'data/hooks/pages/useIndex';



const Home: NextPage = () => {
  const {
    cep, 
    setCep,
    validCep,
    searching,
    error,
    employees,
    search,
    loading,
    moreEmployees
  } = useIndex();

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
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />

          {error && <Typography color={'error'}>{error}</Typography> }

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
            disabled={!validCep || loading}
            onClick={() => searching(cep)}
          >
            {loading ? <CircularProgress size={10}/> : 'Buscar'}
          </Button>
        </FormElement>

        {search && 
          (employees.length > 0 ? (
        <ProfessionalSheet>
          <ProfessionalSheetContainer>
            {employees.map((item, index) => {
              return (
                <UserInformation
                  key={index}
                  name={item.nome_completo}
                  image={item.foto_usuario}
                  rating={item.reputacao}
                  description={item.cidade}
                />
              );
            })}
          </ProfessionalSheetContainer>

          <Container sx={{ textAlign: 'center' }}>
            {moreEmployees > 0 && (
              <Typography sx={{ mt:5 }}>
                e mais {moreEmployees}
                {moreEmployees > 1 ? ' profissionais atendem' : 'profissional atende'} ao seu endereço.
              </Typography>
            )}

            <Button 
              variant={'contained'}
              color={'secondary'}
              sx={{ mt:5 }}
            >Contratar profissional</Button>
          </Container>
        </ProfessionalSheet>
          ) : (
            <Typography align={'center'} color={'textPrimary'}>
              Ainda não existe nenhuma diarista na sua região.
            </Typography>
          ))}
      </Container>
    </>
  )
}

export default Home;

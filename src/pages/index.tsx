import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import Title from 'ui/components/data-display/title/Title'
import UserInformation from 'ui/components/data-display/UserInformation/UserInfo'
import TextAreaMask  from 'ui/components/Input/TextAreaMask/TextAreaMask'

const Home: NextPage = () => {
  return (
    <>
      <SafeEnvironment />
      <Title 
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />

      <TextAreaMask
        mask={'99.999-999'}
        label={'Digite seu CEP'} 
        variant={'outlined'}
        fullWidth
      />

      <UserInformation
        name={''}
        image={''}
        rating={3}
        description={''}
      />
    </>
  )
}

export default Home

import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import Title from 'ui/components/data-display/title/Title'
import UserInformation from 'ui/components/data-display/UserInformation/UserInfo'

const Home: NextPage = () => {
  return (
    <>
      <SafeEnvironment />
      <Title 
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
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

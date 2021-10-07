import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import Title from 'ui/components/data-display/title/Title'

const Home: NextPage = () => {
  return (
    <>
      <SafeEnvironment />
      <Title 
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />
    </>
  )
}

export default Home

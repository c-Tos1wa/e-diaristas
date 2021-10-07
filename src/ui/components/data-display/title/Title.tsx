import { TitleContainer, TitleStyled } from './title.style'

interface TitleProps{
  title: string;
  subtitle?: string | JSX.Element;
}

const Title: React.FC<TitleProps> = (props) => {

  return (
      <TitleContainer>
        <TitleStyled>{props.title}</TitleStyled>
          {props.subtitle}
    </TitleContainer>
    
  )
}

export default Title
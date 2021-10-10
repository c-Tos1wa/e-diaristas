import { FooterStyle, FooterContainer, FooterTitle, AppList } from './Footer.style'
import { Typography } from '@mui/material'


const Footer = ( ) => {
  return (
    <FooterStyle>
      <FooterContainer>
        <FooterTitle>Quem somos</FooterTitle>

        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Esse maxime animi porro, tempora dolore eius enim deserunt, sunt, temporibus ipsa nulla repellendus. 
          Similique iure reprehenderit reiciendis recusandae amet blanditiis quibusdam.
        </Typography>
        <FooterTitle>Baixe nossos aplicativos</FooterTitle>
        <AppList>
          <li>
            <a 
              href={'/'}
              target={'_blank'}
              rel={'noopener-noreferrer'} 
            >
              <img
                src={'/img/logos/app-store.png'}
                alt={'App store'}
              />
              </a>

              <a 
              href={'/'}
              target={'_blank'}
              rel={'noopener-noreferrer'} 
            >
              <img
                src={'/img/logos/google-play.png'}
                alt={'Google Play'}
              />
              </a>
          </li>
        </AppList>
      </FooterContainer>
    </FooterStyle>
  )
}

export default Footer
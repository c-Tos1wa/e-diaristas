import { styled } from '@mui/material/styles'

export const ContainerStyled = styled('div')`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  margin: 0;

`
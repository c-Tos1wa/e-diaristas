import {
  AvatarStyled,
  RatingStyled,
  UserDescription,
  UserContainer,
  UserName,
} from './UserINfo.style'

interface UserInformationProps{
  name: string;
  image: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  name,
  image,
  rating,
  description,
}) => {
  return (
    <UserContainer>
      <AvatarStyled>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating}></RatingStyled>
      <UserDescription>{description}</UserDescription>
    </UserContainer>

  )
}
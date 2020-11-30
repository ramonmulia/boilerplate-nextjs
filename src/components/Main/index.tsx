import * as S from './styles';

const Main = ({ title = '', description = '' }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration />
  </S.Wrapper>
);

export default Main;

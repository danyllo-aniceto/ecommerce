import { IMAGES } from '@assets/index';
import { ROUTES } from '@constants/routes';

import { QuantityItems } from './components/QuantityItems';
import { StyledLink, Cart, Icon, IconContainer, StyledHeader, Title } from './styles';

export function Header() {
  return (
    <StyledHeader>
      <Title>WeMovies</Title>
      <Cart>
        <QuantityItems />
        <IconContainer>
          <StyledLink href={ROUTES.cart}>
            <Icon src={IMAGES.ico} alt="Ico" priority />
          </StyledLink>
        </IconContainer>
      </Cart>
    </StyledHeader>
  );
}

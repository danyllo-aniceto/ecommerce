import { Theme } from 'src/view/styles/theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

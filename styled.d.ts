import 'styled-components'
import { ThemeType } from './src/style/theme'

/**
 * DefaultTheme is being used as an
 *  interface of props.theme out of
 * the box. By default the interface
 * DefaultTheme is empty so  * that's
 * why we need to extend it.
 */

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

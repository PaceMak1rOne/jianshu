import {createGlobalStyle} from 'styled-components'
import url1 from './iconfont.woff2?t=1631024085396'
import url2 from './iconfont.woff2?t=1631024085396'
import url3 from './iconfont.woff2?t=1631024085396'
export const FontStyle=createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 2786641 */
  src: url(${url1}) format('woff2'),
       url(${url2}) format('woff'),
       url(${url3}) format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`

import * as S from "./styles"
import logo from "../../assets/logo.png"

export function Header() {
  return (
   
    <S.Header>
    <picture>
       <img src={logo} alt="Logo" />
    </picture>
      <S.NavBar>
        <ul>
          <li>
            <a href="Home">HOME</a>
          </li>
          <li>
            <a href="List">COMIDA</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>

  )
}
import Link from 'next/link';

import { ToggleTheme } from '../ToggleTheme/ToggleTheme';
import * as S from './styles';

function Header() {
  return (
    <S.header>
      <Link href="/">Favoritetabs</Link>
      <ToggleTheme />
    </S.header>
  );
}

export { Header };

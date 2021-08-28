// next
import Link from 'next/link';

// assets
import logo from 'public/favicon-32x32.png';

// styles
import * as S from './styles';

function Layout(props) {
  return (
    <>
      <S.Header>
        <S.NavBar>
          <S.Image src={logo} alt='Task Manager' width={32} height={32} />

          <S.Links>
            <Link href='/tasks' passHref>
              <S.Link>Tasks</S.Link>
            </Link>
            <Link href='/projects' passHref>
              <S.Link>Projects</S.Link>
            </Link>
            <S.Logout>Log Out</S.Logout>
          </S.Links>
        </S.NavBar>
      </S.Header>
      {props.children}
    </>
  );
}

export default Layout;

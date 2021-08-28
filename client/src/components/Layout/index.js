// next
import Image from 'next/image';

// assets
import logo from 'public/favicon-32x32.png';

// styles
import * as S from './styles';

function Layout(props) {
  return (
    <>
      <S.Header>
        <S.NavBar>
          <Image src={logo} alt='Task Manager' width={32} height={32} />
          <div>List</div>
        </S.NavBar>
      </S.Header>
      {props.children}
    </>
  );
}

export default Layout;

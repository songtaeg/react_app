import React,{useContext} from 'react'; //데이터를 간편하게 공유
import { UserContext } from '../context/UserContext';


function Main() {
  const {user,login,logout} = useContext(UserContext);
  return (
    <main className="main">
      {user ?(
        <>
          <button onClick={logout}>로그아웃</button>
          <p>환영합니다. {user.name}님! 로그인 확인</p>
        </>
      ):(
        <>
          <button onClick={login}>로그인</button>
          <p>로그인바람</p>
        </>
      )}
    </main>
  );
}

export default Main;

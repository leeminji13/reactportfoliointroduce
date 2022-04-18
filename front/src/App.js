import Conent_interview from './component/Interview';
import Content_interview_form from './component/Interviewform';
import './App.css';
import Logo from './component/Logokeyframe';
import Header from './component/Header';
import Main from './component/Mainpf';
import Portfolio from './component/Portfolio';
import Aboutme from './component/Aboutme';
import Footer from './component/Footer';

function App() {
  return (
    <div className="wrap">    
      {/* <Logo></Logo> */}
      <Header styletype="d1"></Header>
      <Main></Main>
      <Portfolio></Portfolio>
      <Aboutme></Aboutme>
      {/* swiper */}
     {/* <Conent_interview botable='interviewlist' titlenm='사전인터뷰'></Conent_interview> */}
     {/* 포트폴리오 */}
     <Content_interview_form titlenm='면접제안' botable="interviewwrite"></Content_interview_form>
     <Footer styletype="family"></Footer>
    </div>
  );
}

export default App;

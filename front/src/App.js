import Conent_interview from './component/Interview';
import Content_interview_form from './component/Interviewform';
import './App.css';

function App() {
  return (
    <div>    
     <Conent_interview botable='interviewlist' titlenm='사전인터뷰'></Conent_interview>
     <Content_interview_form titlenm='인터뷰글쓰기' botable="interviewwrite"></Content_interview_form>
    </div>
  );
}

export default App;

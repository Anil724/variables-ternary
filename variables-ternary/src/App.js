import logo from './logo.svg';
import './App.css';
import MarkSheet from './components/MarkSheet';

function App() {
  return (
    <div className="App">
       <MarkSheet studentName="PERSON 1" engMarks='75' hinMarks='75' telMarks='85' matMarks='95' sciMarks='85' socMarks='100'></MarkSheet>
       <MarkSheet studentName="PERSON 2" engMarks='65' hinMarks='45' telMarks='75' matMarks='5' sciMarks='85' socMarks='45'></MarkSheet>
       <MarkSheet studentName="PERSON 3" engMarks='35' hinMarks='15' telMarks='65' matMarks='95' sciMarks='45' socMarks='25'></MarkSheet>
       <MarkSheet studentName="PERSON 4" engMarks='5' hinMarks='60' telMarks='70' matMarks='100' sciMarks='10' socMarks='80'></MarkSheet>
    </div>
  );
}

export default App;

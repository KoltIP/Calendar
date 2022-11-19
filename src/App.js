import './App.css';
import Calendar from '../src/components/Calendar';
import classes from '../src/styles/Calendar.css';



function App() {
  //const now = new Date(2017, 2, 8);
  const now = new Date(2019, 5, 13);
  return (
    <div>
      <Calendar item = {now} />
    </div>
  );
}

export default App;

import './App.css';
import Calendar from '../src/components/Calendar';
import classes from '../src/styles/Calendar.css';



function App() {
  const now = new Date(2017, 2, 8);
  return (
    <div>
      <Calendar item = {now} />
    </div>
  );
}

export default App;

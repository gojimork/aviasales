import TransplantFilter from '../transplant-filter';
import PriorityFilter from '../priority-filter';
import classes from './app.module.scss';
import logo from '../../assets/logo.svg';
import Tickets from '../tickets';

function App() {
  return (
    <div className={classes.app}>
      <div className={classes['app-wrapper']}>
        <div className={classes.header}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.main}>
          <TransplantFilter />
          <PriorityFilter />
          <Tickets />
        </div>
      </div>
    </div>
  );
}

export default App;

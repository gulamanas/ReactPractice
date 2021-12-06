// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './components/Form';


function App() {
  return (
    <div className="App ">
      <Form />
      {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;

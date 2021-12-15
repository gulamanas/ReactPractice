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
import LifeCycleA from './components/LifeCycleA';
import Fragment from './components/Fragment';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import InputParent from './components/InputParent';
import FRInputParent from './FRInputParent';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import MainCounter from './components/MainCounter';
import ComponentC from './components/ComponentC';


function App() {
  return (
    <div className="App ">
      <ComponentC />
      {/* <MainCounter>
        {(count, clickHandler) => (
          <ClickCounterTwo count={count} clickHandler={clickHandler} />
        )}
      </MainCounter> */}
      {/* <MainCounter>
        {(count, clickHandler) => (
          <HoverCounterTwo count={count} clickHandler={clickHandler} />
        )}
      </MainCounter> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo /> */}
      {/* <ClickCounter name="Jayaprakash" />
      <HoverCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <FRInputParent /> */}
      {/* <InputParent /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <Fragment /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
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

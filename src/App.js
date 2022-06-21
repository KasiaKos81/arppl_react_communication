import logo from './logo.svg';
import classes from './App.module.css';
import AppBody from "./components/AppBody";
import NavigationHeader from "./components/NavigationHeader";

function App() {
  return (
      <div className={classes.App}>
          <NavigationHeader/>
        <AppBody/>
      </div>
  );
}

export default App;
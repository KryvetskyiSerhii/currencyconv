
import styles from './components/main/Main.module.css'
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
}

export default App;

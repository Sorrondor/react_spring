import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import ParentContainer from './docs/context/normal/ParentContainer';
import Animals from './docs/context/expert/Animals';
import { AnimalsProvider } from './docs/context/expert/AnimalsContext';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimalsProvider>
          <Animals />
        </AnimalsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

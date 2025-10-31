import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import Styled08 from './docs/styled/Styled08';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Styled08 />
      </ThemeProvider>
    </>
  );
}

export default App;

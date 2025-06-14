import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';
import Container from './components/Container/Container';

function App() {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
}
export default App;

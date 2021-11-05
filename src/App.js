import './App.css';
import { Router } from "@reach/router";
import PostsGrid from './components/PostsGrid';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <PostsGrid path="/" />
    </Router>
    </Provider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import NewPost from './components/NewPost';

function App() {
  return (
    <div className='App'>
      <h1>My Blog</h1>
   <PostList />
   <NewPost/>
    </div>
  );
}

export default App;

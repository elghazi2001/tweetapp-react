import { getTweets } from './api/tweetApi';
import './App.css';
import { Tweet } from './components/tweet';
import { TweetList } from './components/tweetList';

function App() {

   const list = getTweets();

  return (
    <div className='App'>
      <TweetList/>
    </div>
  );
}

export default App;

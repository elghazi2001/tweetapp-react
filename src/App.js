import { useState } from 'react';
import { getTweets } from './api/tweetApi';
import './App.css';
import { TweetList } from './components/tweetList';

function App() {
  const [list, setList] = useState(getTweets())

  const handleDelete = (index) => {
    const tempArray = [...list]
    tempArray.splice(index, 1)
    setList(tempArray)
  }

  const handleAdd = () => {
    const tempArray = [...list]
    tempArray.push(
      {
        id: Math.floor(Math.random() * 1000),
        imageUrl: "https://admin.visititaly.eu/uploads/articoli/paragrafo/20191009203357Senza%20titolo-1.jpg",
        text: "Here we have text 1 ",
        tweetDate: "2022/20/15 18:50",
        user: {
          name: "Farouk",
          nickname: "Elghazi",
          avatarUrl: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1672617330~exp=1672617930~hmac=61c594eb0afbb1a2a0338a6899f4631f723600a2caaf70774c76b58e9d67e7d3"
        }
      }
    );
    setList(tempArray)
  }

return (
  <div className='App'>
    <TweetList list={list} handleDelete={handleDelete} />
    <button className='add' onClick={handleAdd}>Add tweet</button>
  </div>
);
}

export default App; 

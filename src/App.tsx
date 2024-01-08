import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import dogeLogo from './assets/logo-dogecoin.svg'
import './App.css'
import { timer } from './scripts/timer';

function App() {

  let viteURL: string = 'https://vitejs.dev';
  let awsURL: string = 'https://aws.amazon.com';
  let coinPaprikaURL: string = 'https://coinpaprika.com';

  // const [count, setCount] = useState(0)

  const [ coin, setCoin ] = useState(0);

  // Example usage:
  const timerLengthInMilliseconds = 25000; // Replace with your desired timer length
  
  const updateCoin = (x) => {
    timer(x).then((result) => {
      setCoin(result); // Update the state of coin here
      console.log(result); // This will be true after the specified time
    })
    .catch((error) => {
      console.error(error);
    })
  }

  updateCoin(timerLengthInMilliseconds)


  return (
    <>
      <div>
        {/* {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://react.dev" target="_blank">
          <img src={dogeLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Value</h1>
      <div className="card">
        <button onClick={updateCoin(timerLengthInMilliseconds)}>
          Fetch Value
        </button>
      </div>
      <div className="card">
        <p>{coin}</p>
      </div>
      <p className="read-the-docs">
        Powered by <a href={awsURL}>AWS</a>, 
        <a href={viteURL}>Vite</a> and 
        <a href={coinPaprikaURL}>CoinPaprika</a>
      </p>
    </>
  );

      }
export default App

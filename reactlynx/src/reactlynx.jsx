import { root, useState, useEffect } from '@lynx-js/react';
import "./reactlynx.css";


const initialData = new Array(8).fill(null)
/**
 * This is a special scenario where we have a very simple Skeleton and a very complex useEffect stage.
 */
const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    // It have a very complicated useEffect stage, including a lot of CPU intensive operations
    // and a lot of data fetching operations
    // and we want to show a skeleton while the data is loading
    // This is a very simple example, we use a loop to simulate a loading state

    for (let i = 0; i < 50000; i++) {
      for (let j = 0; j < 50000; j++) {
        // do nothing
      }
      // do nothing
    }
    
    setDataLoaded(true);
    setData(new Array(8).fill(null).map((_, index) => `Item ${index + 1}`));
  }
  , []);

  return (
    <div 
      id = "table"
      style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(4, auto)',
      gap: '20px',
      }}
    >
      {
        data.map((item, index) => {
          return (
            <div
              key={index}
              class={dataLoaded ? '' : 'loading'}
            >
              {dataLoaded ? `Item ${index + 1}` : ''}
            </div>
          )
        })
      }
    </div>
  )
}

root.render(<App></App>)
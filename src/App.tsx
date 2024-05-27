import { css } from '../styled-system/css';

const gradient = css({
  // w100, h100 black, blue, gradient
  width: 100,
  height: 100,
  backgroundColor: 'black',
  color: 'white',
  backgroundImage: 'linear-gradient(45deg, #000, #00f)',
});

function App() {
  

  return (
    <div>
      <div className={gradient}>Hello World</div>
    </div>
  );
}

export default App;
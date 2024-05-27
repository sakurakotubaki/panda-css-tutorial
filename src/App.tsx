import { css } from '../styled-system/css';

const buttonStyles = css({
  margin: 10,
  padding: 5,
  color: 'black',
  bg: 'blue.500',
  borderRadius: 4,
  fontWeight: 'bold',
});

function App() {

  function handleClick(): void {
    console.log('Button Clicked');
  }

  return (
    <div>
      <button className={buttonStyles} onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
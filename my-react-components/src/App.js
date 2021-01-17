import './App.css';

import MyButton from './components/button/my-button.component';

function App() {
  // temporarily storing button prop data here
  const basicButton = {
    text: "I'm Basic",
    type: 'basic'
  };
  const colorButton = {
    text: "I'm Colorful",
    type: "colorful"
  }


  return (
    <div className="App">
      <h1>Welcome to my World of React Components</h1>
      <div className="buttons">
        <p style={{ fontWeight: 'bolder', textDecoration: 'underline', fontVariant: 'small-caps' }}>Here are some buttons</p>
        <div className="buttons-grid">
          <MyButton type={basicButton.type} text={basicButton.text} />
          <MyButton type={colorButton.type} text={colorButton.text} />
          <MyButton type={colorButton.type} text={colorButton.text} />
          <MyButton type={colorButton.type} text={colorButton.text} />
        </div>
      </div>
    </div>
  );
}

export default App;

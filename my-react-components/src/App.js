import './App.css';

import MyButton from './components/button/my-button.component';

function App() {
  // temporarily storing button prop data here
  const basic = {
    text: "I'm Basic",
    type: 'basic'
  };
  const colorful = {
    text: "I'm Colorful",
    type: "colorful"
  };
    const roundedCorners = {
    text: "I'm Rounded",
    type: "rounded-corners"
  };
  const gradiant = {
    text: "I'm Radiant",
    type: "gradiant"
  };


  return (
    <div className="App">
      <h1>Welcome to my World of React Components</h1>
      <div className="buttons">
        <p style={{ fontWeight: 'bolder', textDecoration: 'underline', fontVariant: 'small-caps' }}>Here are some buttons</p>
        <div className="buttons-grid">
          <MyButton type={basic.type} text={basic.text} />
          <MyButton type={colorful.type} text={colorful.text} />
          <MyButton type={roundedCorners.type} text={roundedCorners.text} />
          <MyButton type={gradiant.type} text={gradiant.text} />
        </div>
      </div>
    </div>
  );
}

export default App;

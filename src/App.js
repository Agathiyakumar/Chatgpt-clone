import './App.css';
import gptlogo from './assets/chatgpt.svg';
import addbtn from './assets/add-30.png'; 
import msgicon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'


function App() {
  return (
    <div className="App">
    <div className='sidebar'>
      <div className='upperside'>
      <div className='uppersidetop'>
        <img src={gptlogo} className='logo' alt=''/>
        <span className='brand'>GPT-Clone</span>
        </div>
        <button className='midbtn'><img src={addbtn} alt="" className="addbtn" />New Chat</button>
        <div className="uppersidebottom">
          <button className="query"><img src={msgicon} alt="" />What is React ?</button><br></br>
          <button className="query"><img src={msgicon} alt="" />How to use an API ?</button>

        
     </div>
      </div>
      <div className='lowerside'>
        <div className="listitems"><img src={home} alt="" className="listitemimg" />Home</div>
        <div className="listitems"><img src={saved} alt="" className="listitemimg" />Saved</div>
        <div className="listitems"><img src={rocket} alt="" className="listitemimg" />Upgrade to pro</div>

      </div>
    </div>
    <div className='main'>
    
    </div>
    </div>
  );
}

export default App;

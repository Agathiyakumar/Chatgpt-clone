import './App.css';
import gptlogo from './assets/chatgpt.svg';
import addbtn from './assets/add-30.png'; 
import msgicon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendbtn from './assets/send.svg';
import usericon from './assets/user-icon.png';
import gptimglogo from './assets/chatgptLogo.svg';

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
    <div className="chats">
        <div className="chat client">

          <img className='chatimg' src={usericon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, sed ex. Itaque voluptatem id dolore ad debitis nam exercitationem tempore.</p>
        </div>
        <div className="chat bot">
          <img className='chatimg' src={gptimglogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sint? Possimus cum repellendus libero at mollitia atque ab iste sit iure recusandae dignissimos laudantium voluptatibus, iusto ipsum dolores illum laborum cupiditate praesentium? Culpa voluptates saepe harum exercitationem, natus dolorum id doloribus eius velit ex quisquam, distinctio ad sequi obcaecati, corrupti consequatur excepturi. Quis hic, expedita est, earum molestias quae enim officiis dicta distinctio qui provident consequuntur autem aut sint excepturi dolores, magni quisquam. Tempore beatae aliquam, animi atque ducimus omnis exercitationem aliquid voluptate quia, dolor accusamus molestias obcaecati minus, at nihil. Minus vel in modi fugiat consectetur recusandae dolores hic!</p>
        </div>
    </div>
    <div className="chatfooter">
    <div className="inp">
      <input type="text" placeholder='Send a message'/>
      <button className="send">
        <img src={sendbtn} alt="" />
      </button>
    </div>
    <p>gpt may produce inaccurate information about people,places or facts. GPT September 24 Version</p>
    </div>  
    </div>
    </div>
  );
}

export default App;

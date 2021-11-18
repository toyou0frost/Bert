import Main from './components/Screens/Main';
import styled from 'styled-components';
import SideBar from './components/Semantic/SideBar';

const AppStyle = styled.div`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  li{
    list-style: none;
  }
  .app_main{
    display: flex;
    justify-content: space-between;
  }
`

function App() {
  return (
    <div>
      <AppStyle>
        <div className="app_main">
          <div></div>
          <div className="app_main_Main">
            <Main />
          </div>
          <div className="app_main_SideBar">
            <SideBar />
          </div>
        </div>
      </AppStyle>
    </div>
  );
}

export default App;
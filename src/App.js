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
`

function App() {
  return (
    <div>
      <AppStyle>
        <Main />
        <SideBar />
      </AppStyle>
    </div>
  );
}

export default App;
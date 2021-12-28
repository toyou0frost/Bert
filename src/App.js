import Main from './components/Screens/Main';
import styled from 'styled-components';
import SideBar from './components/Semantic/SideBar';
import StickyBox from "react-sticky-box";
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

import Folder from './components/Screens/Folder';
import SideBarf from './components/Semantic/SideBarf';
import Header from './components/Semantic/Header';
import CodeEditorf from './components/Function/CodeEditorf';
import app from './firebase';
import { useEffect, useState } from 'react/cjs/react.development';

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
  .app_main_Main{
    flex: 1;
  }
  .app_main_editor{
    flex: 2;
  }
`

function App() {
  const [code, setCode] = useState("");
  const [lang, setLang] = useState("");
  const [s_id, setS_Id] = useState("");

  useEffect(() => {
    // console.log("code change");
  }, [code])

  useEffect(() => {
    console.log("s_id change", s_id);
  }, [s_id])

  return (
    <div>
      <app />
      <AppStyle>
        <Router>
          <Switch>
            <Route exact path='/'>
              <div className="app_main">
                <div></div>
                <div className="app_main_Main">
                  <Main />
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <StickyBox>
                    <SideBar />
                  </StickyBox>
                </div>
                {/* 30 ~ 34 sticky 속성을 간단하게 적용시켜주는 라이브러리 */}
              </div>
            </Route>
            <Route exact path='/folder'>
              <Header />
              <div className="app_main">
                <div>
                  <StickyBox>
                    <SideBarf />
                  </StickyBox>
                </div>
                <div className="app_main_Main">
                  <Folder setLang={setLang} setCode={setCode} setLang={setLang} setS_Id={setS_Id} s_id={s_id}/>
                </div>
                <div className='app_main_editor'>
                  <CodeEditorf language="javascript" isExit={false} code={code} lang={lang} s_id={s_id} />
                </div>
                {/* 30 ~ 34 sticky 속성을 간단하게 적용시켜주는 라이브러리 */}
              </div>
            </Route>
          </Switch>
        </Router>
      </AppStyle>
    </div>
  );
}

export default App;
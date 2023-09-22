
import { Link, Route, Routes } from 'react-router-dom';
import Card from './components/card/Card';
import Form from './components/form/form';
import Notification from './components/notifications/Notification';
import Page from './components/page/Page';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/page">about</Link>
        </li>
        <li>
          <Link to="/notification">notification</Link>
        </li>
        <li>
          <Link to="/form">form</Link>
        </li>
      </ul>

        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/page" element={<Page />} />
          <Route path="/notification" element={<Notification />} />
          <Route
            path="/form"
            element={
              <div className="form-page">
                <Form />
              </div>
            }
          />
        </Routes>
      {/* <div className="">
        <Card />
      </div>
      <div>
        <Page />
      </div>
      <div>
        <Notification />
      </div>
      <div className="form-page">
        <Form />
      </div> */}
    </div>
  );
}

export default App;

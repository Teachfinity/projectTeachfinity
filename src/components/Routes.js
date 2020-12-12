import { BrowserRouter, Switch, Route , Redirect } from 'react-router-dom';
import MyClasses from "./MyClasses";
import Chat from "./Chat";
import Diary from "./Diary";
import Timetable from "./Timetable";
import Bookmarks from "./Bookmarks";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/myclasses" component={MyClasses} />
                <Route path="/chat" component={Chat} />
                <Route path="/diary" component={Diary} />
                <Route path="/timetable" component={Timetable} />
                <Route path="/bookmarks" component={Bookmarks} />
                <Redirect to="myclasses"/>
            </Switch>
        </BrowserRouter>
    );
  }
  
  export default Routes;
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { checkToken } from '../../utilities/users-service';



export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  async function handleCheckToken() {
    const expDate = await checkToken();
    alert(expDate)
  }


  return (
    <nav>
      <Link to="/notes"><strong>All notes</strong></Link>
      &nbsp; | &nbsp;
      <Link to="/notes/new"><strong>New note</strong></Link>
      &nbsp;&nbsp;
      <span><small>Welcome,</small><strong> {user.name}</strong></span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}> <strong> Log Out</strong></Link>
      &nbsp;&nbsp;
      <button onClick={handleCheckToken}>Check Token</button>
    </nav>
  );
}
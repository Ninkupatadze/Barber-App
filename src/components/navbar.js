import './navbar.scss';
import { useNavigate } from "react-router-dom";


function Navbar() {

  const navigate = useNavigate()

  function handleClickOnRegister() {
    navigate("/register");
  }

  function handleClickOnLogIn() {
    navigate("/login");
  }

  return (
        <div className="body">
          <div className="nav">
              <div className="nav-links">
                <button type="button" onClick={handleClickOnRegister}>
                    Register
                </button>
                <button type="button" onClick={handleClickOnLogIn}>
                    Log In
                </button>
              </div>
          </div>
        </div>
  );
}
 
export default Navbar;
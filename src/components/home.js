import { barbers } from "./register";
import logo from "./logo.png"
import { Link } from 'react-router-dom';

const Home = () => {

    return (
      <>
    <div className="cards-container">
        {barbers.map((bar, index) => (
            <> <div key={index}>
              <Link to={{
                pathname: `/home/${bar.id}`  
              }} style={{textDecoration: 'none'}}
              >
              <div className="card">
                  <img src={logo} width="100" alt="barber-logo" ></img>
                  <div className="container">
                    <h4><b>{bar.firstName + ' ' + bar.lastName}</b></h4>
                    <p>{bar.mail}</p>
                    <p>{bar.adress}</p>
                    <p>{bar.price}</p>
                  </div>
                </div>
              </Link>
            </div>              
            </>
        ))}
        </div>    
      </>    
    );
  }
  
  export default Home;
  
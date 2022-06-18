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
                pathname: `/home/${bar.id}`,
                params: {
                  name: bar.firstName + ' ' + bar.lastName,
                  email: bar.email,
                  adress: bar.adress,
                  price: bar.price
                },      
              }} style={{textDecoration: 'none'}}
              >
              <div className="card">
                  <img src={logo} width="100" alt="barber-logo" ></img>
                  <div className="container">
                    <h4><b>{bar.firstName + ' ' + bar.lastName}</b></h4>
                    <p>{bar.email}</p>
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
  
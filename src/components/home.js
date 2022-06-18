import { barbers } from "./register";

const Home = () => {

    return (
      <>
    
        {barbers.map((bar, i) => (
            <>
                <div className="card">
                    <div className="container">
                        <li key={i}><b>{bar.email}</b></li>
                    </div>
                </div>
            </>
        ))}
     
      </>
      
    );
  }
  
  export default Home;
  
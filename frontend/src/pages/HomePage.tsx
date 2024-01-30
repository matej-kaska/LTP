import "./HomePage.scss";
import axios from "axios";
import { useState } from "react";

const HomePage = () => {
  const [connection, setConnection] = useState<string>("Click for check connection to backend...");
  const [connectionRedis, setConnectionRedis] = useState<string>("Click for check connection to Redis...");
  const [connectionSQL, setConnectionSQL] = useState<string>("Click for check connection to SQL...");

  const checkConnection = async () => {
    try {
      const response = await axios.get("/api/test/backend");
      console.log(response);
      setConnection(response.data.message);
    } catch {
      setConnection("Error");
    }
  };

  const checkConnectionRedis = async () => {
    try {
      const response = await axios.get("/api/test/redis");
      console.log(response);
      setConnectionRedis(response.data.message);
    } catch {
      setConnectionRedis("Error");
    }
  }

  const checkConnectionSQL = async () => {
    try {
      const response = await axios.get("/api/test/sql");
      console.log(response);
      setConnectionSQL(response.data.message);
    } catch {
      setConnectionSQL("Error");
    }
  }

  return (
    <div className="homepage">
      <p>LTP Docker TEST</p>
      <div>
        <p>{connection}</p>
        <button onClick={checkConnection}>Check</button>
      </div>
      <div>
        <p>{connectionRedis}</p>
        <button onClick={checkConnectionRedis}>Check</button>
      </div>
      <div>
        <p>{connectionSQL}</p>
        <button onClick={checkConnectionSQL}>Check</button>
      </div>
    </div>
  )
};

export default HomePage;
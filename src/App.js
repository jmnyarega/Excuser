import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const random = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);
const trim = (str, length) => str?.substr(0, str.length - length);

const randomHue = random(360);
const color = `hsl(${randomHue}, 50%, 50%)`;
const URL =
  "https://gist.githubusercontent.com/josiahmokob0/0e4f7dca37b33dc1ef395dab6bb2b105/raw/33f9b0378ad92697fde16b11e22755ea6273a37a/excuses.json";

const styles = {
  main: {
    backgroundColor: color,
    color,
  },
  button: {
    backgroundColor: color,
    color: "white",
  },
};

function App() {
  const [excuse, setExcuse] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const res = await axios.get(URL);
      setData(res.data);
      setExcuse(res.data[random(res.data.length)]);
    };
    fecthData();
  }, []);

  const newExcuse = () => {
    setExcuse(data[random(data.length)]);
  };

  return (
    <main style={styles.main}>
      <div id="quote-box">
        <p id="text">
          <i className="fa fa-quote-left"> </i>
          {excuse?.excuse}
        </p>
        <p id="author"> - {trim(excuse?.reason, 11)}</p>

        <div className="buttons">
          <button id="new-quote" onClick={newExcuse} style={styles.button}>
            New Excuse
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;

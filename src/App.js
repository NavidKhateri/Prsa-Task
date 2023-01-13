import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Cardv from "./cardv/Cardv";
import Slider from "./slider/Slider";

function App() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const res = await axios.get("https://moviesapi.ir/api/v1/movies");
        setLoading(false);
        setState(res.data.data);
      } catch (error) {
        setLoading(false);
        setErr(error.message);
      }
    };
    getData();
  }, []);
  const productss = state
  .filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )
  .map((i) => (
    <Cardv products={i} key={i.id} />
    ))

    console.log(productss.length);
  return (
    <div>
      <div className="App">
        {loading ? (
          <h2>Loading. . . </h2>
        ) : err ? (
          <h2 style={{ color: "white" }}>{err}</h2>
        ) : (
          <div>
            <div className="div-input">
              <input
                className="input-search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search ..."
              />
            </div>
            <div className="card-container">
              {productss.length ?  productss : 'Nothing...'}
            </div>
            <div className="slider-content">
              <h2 className="slider-title">Popular Movies</h2>
              <Slider popular={state.slice(3, 7)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;

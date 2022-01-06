import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TimeStamp } from "./page/TimeStamp";
import { Header } from "./Header";
import { Home } from "./page/Home";
import { ExerciseTracker } from "./page/ExerciseTracker";
import { URLShortener } from "./page/URLShortener";
import { HeaderParser } from "./page/HeaderParser";
import { FileMetaData } from "./page/FileMetaData";

function App() {
  // const [information, setInformation] = useState("");
  // const date = "2012-11-22";

  // const handleConvertDate = async () => {
  //   try {
  //     const response = await fetch("/api/timestamp/2012-11-22");
  //     const data = await response.json();
  //     setInformation(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="container-sm pt-5">
          <Routes>
            <Route path="/timestamp" element={<TimeStamp />} />
            <Route path="/headerparser" element={<HeaderParser />} />
            <Route path="/urlshortener" element={<URLShortener />} />
            <Route path="/exercisetracker" element={<ExerciseTracker />} />
            <Route path="/metadata" element={<FileMetaData />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

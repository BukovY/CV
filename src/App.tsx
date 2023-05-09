import "./App.css";
import { CvViewer } from "./components/CvViewer/CvViewer";
import { CvData } from "./components/CvViewer/CvViewer.stub";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "24px",
        gap: "16px",
      }}
    >
      <div style={{ border: "1px solid red", width: "100%", height: "100%" }}>
        edit vindow
      </div>
      <div style={{ border: "1px solid red", width: "100%", height: "100%" }}>
        <CvViewer cv={CvData} />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { CvViewer } from "./components/CvViewer/CvViewer";
import { EditForm } from "./components/EditForm/EditForm";
import { useCvContext } from "./context/CvContext";

function App() {
  const { cvData } = useCvContext();
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
        <EditForm />
      </div>
      <div style={{ border: "1px solid red", width: "100%", height: "100%" }}>
        <CvViewer cv={cvData} />
      </div>
    </div>
  );
}

export default App;

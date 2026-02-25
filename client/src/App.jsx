import "./App.css";
import { Routes, Route } from "react-router-dom";
import MeetingCalendar from "./pages/MeetingCalendar";

function App() {
  return (
    <Routes>
      <Route path="/calendar" element={<MeetingCalendar />} />
    </Routes>
  );
}


export default App;
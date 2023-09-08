import { Routes, Route } from "react-router-dom";
import { PageHome, PageList} from "../pages";

export function RouteSoftware() {
  return (
    <Routes>
      <Route>
        <Route path="/Home" element={<PageHome />} />
        <Route path="/List" element={<PageList />} /> 
      </Route>
    </Routes>
  );
}

import { Routes, Route } from "react-router-dom"
import { PageHome,PageList,PageLayout} from "../pages"

export function RouteSoftware() {
  return (
    <Routes>
        
      <Route path="/" element={<PageLayout />}>
        <Route path="HOME" element={<PageHome />} />
        <Route path="COMIDA" element={<PageList />} />
      </Route>
    </Routes>
  )
}
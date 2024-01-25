import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home1 from "./Home1.js"
import AddNew1 from "./AddNew1.js";
import List1 from "./List1.js";
import View1 from "./View1.js";

function ReactCrudProject(){
    return(
        <>
        <h3>ReactCrudProject</h3>
        <BrowserRouter>
        <Link to="/Home1">Home1</Link><br></br>
        <Link to="/AddNew1">Add New1</Link><br></br>
        <Link to="/List1">List1</Link><br></br>
        <Link to="/View1">View1</Link>

        <Routes>
            <Route exact path="/Home1" element={<Home1/>}></Route>
            <Route exact path="/AddNew1" element={<AddNew1/>}></Route>
            <Route exact path="/List1" element={<List1/>}></Route>
            <Route exact path="/View1" element={<View1/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default ReactCrudProject;
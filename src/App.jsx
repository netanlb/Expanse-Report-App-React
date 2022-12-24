import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NavBarComponent from "./navbar/navbar";
import ExpansesComponent from "./pages/expanses/expanses";
import StatisticsComponent from "./pages/statistics/statistics";

const tabs = ["expenses", "statistics"];

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/expenses"></Navigate> },
  {
    element: (
      <div>
        <NavBarComponent tabs={tabs}></NavBarComponent>
        <ExpansesComponent></ExpansesComponent>
      </div>
    ),
    path: "/expenses",
  },
  {
    element: (
      <div>
        <NavBarComponent tabs={tabs}></NavBarComponent>
        <StatisticsComponent></StatisticsComponent>
      </div>
    ),
    path: "/statistics",
  },
]);

function App() {
  return (
    <div className="main">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

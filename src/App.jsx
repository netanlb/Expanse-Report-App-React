import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBarComponent from "./navbar/navbar";
import ExpansesComponent from "./pages/expanses/expanses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExpansesComponent></ExpansesComponent>,
  },
]);

function App() {
  return (
    <div class="main">
      <NavBarComponent></NavBarComponent>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

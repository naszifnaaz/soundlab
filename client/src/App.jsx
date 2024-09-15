import { MainRoutes } from "./routes/routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
        }}
      />
      <MainRoutes />
    </div>
  );
}

export default App;

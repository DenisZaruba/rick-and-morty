import "./App.css";
import Navigation from "./navigation/navigation";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <SkeletonTheme baseColor="#3c3e44" highlightColor="#5a5d64">
      <Navigation />;
    </SkeletonTheme>
  );
}

export default App;

import FamilyTree from "./components/family-tree";
import { SideNav } from "./components/side-nav";

function App() {
  return (
    <div className="flex h-[100vh]">
      <SideNav />
      <FamilyTree />
    </div>
  );
}

export default App;

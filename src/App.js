import "./index.css";

import GitData from "./components/GitData";
import SearchBox from "./components/SearchBox";

function App() {
    return (
        <div style={{ padding: "1rem" }}>
            GitHub Repos Finder
            <SearchBox />
            <GitData />
        </div>
    );
}

export default App;

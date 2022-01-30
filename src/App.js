import SearchBox from "./components/SearchBox";
import { Typography } from "antd";
const { Title } = Typography;
function App() {
    return (
        <div style={{ padding: "5rem", textAlign: "center" }}>
            <Title level={2}>Github Repository Finder</Title>
            <br /> <br />
            <SearchBox />
        </div>
    );
}

export default App;

import { useState } from "react";
import "./App.css";
import Chart from "./components/Chart";
import UploadCSV from "./components/UploadCSV";
import UploadBinary from "./components/UploadBinary";

function App() {
	const [dataSource, setDataSource] = useState<any[] | null>(null);
	return (
		<div className="App">
			<div>
				<UploadCSV setDataSource={setDataSource} />
				<br />
				<Chart dataSource={dataSource} />
			</div>
		</div>
	);
}

export default App;

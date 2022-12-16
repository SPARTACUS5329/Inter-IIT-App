import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import "../styles/Chart.css";
import dataGenerator from "../utils/dataGenerator";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

function Chart({ dataSource }: { dataSource: any[] | null }) {
	const data = dataGenerator(dataSource);

	return (
		<div className="chart-container centered">
			<Scatter data={data} />
		</div>
	);
}

export default Chart;

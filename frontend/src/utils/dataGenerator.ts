const dataGenerator = (dataSource: any[] | null) => {
	return {
		datasets: [
			{
				label: "Luminosity v/s Temperature",
				data: dataSource?.map((dataPoint: any) => {
					return {
						x: dataPoint["Temperature"],
						y: dataPoint["Luminosity"],
					};
				}),
				backgroundColor: "rgba(255, 99, 132, 1)",
			},
			{
				label: "Luminosity v/s Radius",
				data: dataSource?.map((dataPoint: any) => {
					return {
						x: dataPoint["Radius"],
						y: dataPoint["Luminosity"],
					};
				}),
				backgroundColor: "rgba(25, 99, 12, 1)",
			},
		],
	};
};

export default dataGenerator;

import React, { useRef, useEffect, useState, SetStateAction } from "react";
import Papa from "papaparse";

function UploadCSV({
	setDataSource,
}: {
	setDataSource: React.Dispatch<SetStateAction<any[] | null>>;
}) {
	const [csvFile, setCSVFile] = useState<File | null>(null);
	const hiddenFileInput = useRef<HTMLInputElement>(null);

	const handleClick = (event: React.SyntheticEvent) => {
		event.preventDefault();
		hiddenFileInput.current?.click();
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const fileUploaded = event.target.files![0];
		setCSVFile(fileUploaded);
	};

	useEffect(() => {
		if (!csvFile) return;
		console.log(csvFile);
		const reader = new FileReader();

		reader.onload = async ({ target }: { target: any }) => {
			const csv = Papa.parse(target.result, { header: true });
			const parsedData: any[] = csv?.data;
			setDataSource(parsedData);
		};
		reader.readAsText(csvFile);
	}, [csvFile]); // eslint-disable-line

	return (
		<div>
			<div
				className="centered"
				style={{ width: "100%", display: "flex", justifyContent: "center" }}>
				<div>
					<button
						onClick={handleClick}
						style={{
							width: "200px",
							height: "40px",
							background: "white",
							border: "1px solid #3495eb",
							borderRadius: "10px",
							color: "#3495eb",
							marginRight: "40px",
						}}>
						Upload CSV
					</button>
				</div>
				<div>
					<input
						type="file"
						ref={hiddenFileInput}
						onChange={handleChange}
						style={{ display: "none" }}
					/>
				</div>
			</div>
			<div
				className="centered"
				style={{ marginTop: "auto", marginBottom: "auto", marginRight: "30px" }}>
				{csvFile !== null && csvFile.name}
			</div>
		</div>
	);
}

export default UploadCSV;

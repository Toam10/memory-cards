import React, { useEffect, useState } from "react";
import { getAllUsersDocuments } from "../../firebase/firebase.utils";
import * as Style from "./records.styles";

const Records = () => {
	const [records, setRecords] = useState<any[]>([]);
	useEffect(() => {
		async function getAllusers() {
			const usersDocs = await getAllUsersDocuments();
			const records: any[] = [];
			console.log(usersDocs);

			usersDocs.forEach((doc) => {
				const user: any = doc.data();
				records.push({ displayName: user.displayName, record: user.record });
			});
			records.sort(function ({ record: { a, b } }) {
				return a - b;
			});

			setRecords(records);
		}
		getAllusers();
	}, []);

	console.log(records);

	const mapRecords = (record: any) => {
		return (
			<>
				<Style.Box>
					<Style.Content>{`Name:${record.displayName} Record:${record.record}`}</Style.Content>
				</Style.Box>
			</>
		);
	};

	return (
		<Style.Container>
			<Style.Title>Records</Style.Title>
			{records.map(mapRecords)}{" "}
		</Style.Container>
	);
};

export default Records;

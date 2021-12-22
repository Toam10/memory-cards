import React, { useEffect, useState } from "react";
import { getAllUsersDocuments } from "../../firebase/firebase.utils";

const Records = () => {
	const [users, setUsers] = useState<any[]>([]);
	useEffect(() => {
		async function getAllusers() {
			const usersDocs = await getAllUsersDocuments();
			const newUsers = [...users];
			console.log(usersDocs);

			usersDocs.forEach((doc) => {
				const user: any = doc.data();
				newUsers.push(user);
			});
			setUsers(newUsers);
		}
		getAllusers();
	}, []);

	console.log(users);
	return null;
};

export default Records;

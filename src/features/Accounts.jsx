import { Table } from "flowbite-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	increment,
	decrement,
	addAccount,
	deleteAccount,
} from "./accountSlice";
export default function Accounts() {
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(deleteAccount(id));
		dispatch(decrement());
	};
	const accounts = useSelector((state) => state.account.accounts);
	const numberOfAccounts = useSelector(
		(state) => state.account.numberOfAccounts
	);
	return (
		<>
			<div className="w-2/3 py-10">
				<h1 className="text-lg font-bold text-center">
					Number of accounts: {numberOfAccounts}
				</h1>
				<Table>
					<Table.Head>
						<Table.HeadCell>Name</Table.HeadCell>
						<Table.HeadCell>Account Number</Table.HeadCell>
						<Table.HeadCell>Account Type</Table.HeadCell>
						<Table.HeadCell></Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						{accounts.map((acc) => {
							return (
								<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
									<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
										{acc.customerName}
									</Table.Cell>
									<Table.Cell>{acc.accountNumber}</Table.Cell>
									<Table.Cell>{acc.accountType}</Table.Cell>
									<Table.Cell>
										<button
											onClick={() => handleDelete(acc.id)}
											className="text-red-500"
										>
											Delete
										</button>
									</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
				</Table>
			</div>
		</>
	);
}

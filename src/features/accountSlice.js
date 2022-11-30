import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	accounts: [
		{
			id: 1,
			customerName: "Israa Othman",
			accountNumber: "123456",
			accountType: "Savings",
		},
		{
			id: 2,
			customerName: "Ahmad Zahran",
			accountNumber: "987654",
			accountType: "Student accounts",
		},
		{
			id: 3,
			customerName: "Duaa Nawwas",
			accountNumber: "987254",
			accountType: "Student accounts",
		},
		{
			id: 4,
			customerName: "Lana Ali",
			accountNumber: "123432",
			accountType: "Student accounts",
		},
		{
			id: 5,
			customerName: "Rana Ahmad",
			accountNumber: "215487",
			accountType: "Savings",
		},
		{
			id: 6,
			customerName: "Salim Tariq",
			accountNumber: "548761",
			accountType: "Student accounts",
		},
		{
			id: 7,
			customerName: "Walid Ibrahim",
			accountNumber: "785412",
			accountType: "Savings",
		},
		{
			id: 8,
			customerName: "Jana Iyad",
			accountNumber: "154681",
			accountType: "Student accounts",
		},
		{
			id: 9,
			customerName: "Layan Majed",
			accountNumber: "213548",
			accountType: "Student accounts",
		},
		{
			id: 10,
			customerName: "Ayham Wael",
			accountNumber: "323157",
			accountType: "Savings",
		},
	],
	numberOfAccounts: 10,
};

export const accountSlice = createSlice({
	name: "account",
	initialState,
	reducers: {
		addAccount: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			const data = { ...action.payload, id: state.numberOfAccounts + 1 };
			const newData = [...state.accounts, data];
			return { ...state, accounts: newData };
		},
		increment: (state) => {
			state.numberOfAccounts += 1;
		},
		decrement: (state) => {
			state.numberOfAccounts -= 1;
		},
		deleteAccount: (state, action) => {
			const newArr = state.accounts.filter((i) => i.id != action.payload);
			return { ...state, accounts: newArr };
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, addAccount, deleteAccount } =
	accountSlice.actions;

export default accountSlice.reducer;

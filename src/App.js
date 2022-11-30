import Accounts from "./features/Accounts";
import AddAccount from "./features/AddAccount";

function App() {
	return (
		<div className="flex gap-32 items-center px-10">
			<Accounts />
			<AddAccount />
		</div>
	);
}

export default App;

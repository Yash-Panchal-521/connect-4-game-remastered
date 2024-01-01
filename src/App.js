import './App.css';
import Navbar from './components/Navbar';
import Board from './components/Board';

function App() {
	const handleAiDifficultySelect = (selectedDifficulty) => {
        console.log(`Selected AI difficulty in App.js: ${selectedDifficulty}`);
        // Add your logic or state update here based on the selected difficulty
    };
	return (
		<>
		<div className="bg-slate-900 m-0 p-0 text-teal-300 h-screen">
			<Navbar onAiDifficultySelect={handleAiDifficultySelect} />
			<Board />
		</div>
		</>
	);
}

export default App;

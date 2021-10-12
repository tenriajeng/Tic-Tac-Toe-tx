import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Square from "../components/Square";
type Player = "X" | "O" | "BOTH" | null;

function calculateWinner(squares: Player[]) {
	const lines = [
		[0, 1, 2, 3, 4, 5],
		[6, 7, 8, 9, 10, 11],
		[12, 13, 14, 15, 16, 17],
		[18, 19, 20, 21, 22, 23],
		[24, 25, 26, 27, 28, 29],
		[30, 31, 32, 33, 34, 35],


		[0, 6, 12, 18, 24, 30],
		[1, 7, 13, 19, 25, 31],
		[2, 8, 14, 20, 26, 32],
		[3, 9, 15, 21, 27, 33],
		[4, 10, 16, 22, 28, 34],
		[5, 11, 17, 23, 29, 35],

		[0, 7, 14, 21, 28, 35],
		[5, 10, 15, 20, 25, 30],
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c, d, e, f] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e] && squares[a] === squares[f]) {
			return squares[a];
		}
	}
	return null;
}

function Board() {
	const [squares, setSquares] = useState(Array(36).fill(null));
	const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(Math.round(Math.random() * 1) === 1 ? "X" : "O");
	const [winner, setWinner] = useState<Player>(null);

	function reset() {
		setSquares(Array(36).fill(null));
		setWinner(null);
		setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");

	}

	function setSquareValue(index: number) {
		const newData = squares.map((val, i) => {
			if (i === index) {
				return currentPlayer;
			}
			return val;
		});
		setSquares(newData);
		setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
	}

	useEffect(() => {
		const w = calculateWinner(squares);
		if (w !== null) {
			if (w) {
				setWinner(w);
			}
		}

		if (!w && !squares.filter((square) => !square).length) {
			setWinner("BOTH");
		}
	});

	return (
		<div>
			{!winner && <p>Hey {currentPlayer}, it's your turn</p>}
			{winner && winner !== "BOTH" && <p>Congratulations {winner}</p>}
			{winner && winner === "BOTH" && <p>Congratulations you're both winners</p>}

			<Card>
				<Card.Body>
					<Card.Title>
						<div className="grid">
							{Array(36)
								.fill(null)
								.map((_, i) => {
									return <Square winner={winner} key={i} onClick={() => setSquareValue(i)} value={squares[i]} />;
								})}
						</div>
					</Card.Title>
					<Card.Text>
						<button className="reset" onClick={reset}>
							RESET
						</button>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Board;

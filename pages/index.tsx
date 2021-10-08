
import { Button, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Board from "../containers/Board";

export default function Home() {
	const [data, setData] = useState(Array);

	const handleChange = () => {
		setData([...data, data.length + 1]);
		console.log(data)
	}

	return (
		<Container fluid>
			<Row className="pt-4 p-2" >
				<Button onClick={handleChange} variant="primary">Add New Game</Button>
			</Row>
			<Row className="pt-4" >
				{data.map(value => {
					<Col lg={4} xs={12} md={8}>
						<Board />
					</Col>

				})}
			</Row>
		</Container>
	);
}

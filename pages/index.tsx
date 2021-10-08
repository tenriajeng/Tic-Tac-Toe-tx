
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from "../containers/Board";

export default function Home() {
	return (
		<Container fluid>
			<Row>
				<Col lg={4} xs={12} md={8}>
					<Board />
				</Col>
				<Col lg={4} xs={12} md={8}>
					<Board />
				</Col>
			</Row>
		</Container>
	);
}

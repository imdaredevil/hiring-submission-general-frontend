import '../App.css';
import { Card, ListGroup, Row, Col, Container } from 'react-bootstrap';

function Post (props) {
    const post = props.post;
    return (
        <ListGroup.Item>
                <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                    <Container style={{margin: 0, maxWidth: '98%' }}>
                    <Row style={{ color: '#555'}}>
                    apibus ac facilisis in. apibus ac facilisis in. apibus ac facilisis in. apibus ac facilisis in
                    apibus ac facilisis in. apibus ac facilisis in. apibus ac facilisis in apibus ac facilisis in. apibus ac facilisis in. apibus ac facilisis in. apibus ac facilisis in
                    </Row>
                    <Row>
                        <Col className="col-6" style={{ paddingLeft: "0", marginLeft: "0" }}></Col>
                        <Col style={{ textAlign : 'right', fontStyle: 'italic',  }}>
                            <div>
                            <span style={{ color: '#777', marginBottom: '0' }}>by </span>
                            <span>Cibi</span>
                            <span style={{ color: '#777', marginBottom: '0' }}> on 08/09/2021</span>
                            </div>
                            </Col>
                    </Row>
                    </Container>
                </Card.Body>
        </ListGroup.Item>
    )
}

export default Post;
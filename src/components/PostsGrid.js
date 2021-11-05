import '../App.css';
import { Container, ListGroup, Card } from 'react-bootstrap';
import Post from './Post';
import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/postActions';

function mapStateToProps(state) {
  return { postsData: state.post.posts };
}

function PostsGrid(props) {
  props.getPosts();
  const posts = props.postsData && props.postsData.map(post => {
      return (<Post post={post}></Post>);
  });
  return (
    <div className="PostsGrid">
        <Card style={{ backgroundColor: 'black', color: 'white', 
            fontSize: '100', border: 'none', borderRadius: '0px' }} fluid fixed>
            <Card.Body><center><h4>Posts</h4></center></Card.Body>
        </Card>
    <Container style={{ position: 'absolute', margin: '-8px 0px',
    minHeight: '85vh', maxHeight: '85vh', minWidth: '100vw', overflow: 'auto', padding: '0' }}>
  <ListGroup style={{ margin: '0' }} variant="flush">
  {posts}
</ListGroup>
</Container>
    </div>
  );
}

export default connect(mapStateToProps, { getPosts })(PostsGrid);

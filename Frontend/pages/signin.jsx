import { Col, Container, Row } from 'reactstrap';
import SignInComponent from '../components/Auth/SignInComponent';
import { Layout } from '../components/Layout';

const SignIn = (props) => {
  return (
    <Layout>
      <Container>
        <h2 className='text-center my-5 py-3'>SignIn</h2>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <SignInComponent />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SignIn;

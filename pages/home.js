import Head from "next/head";
import Link from "next/link";
import graphdata from "../graph_data.json";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Infografic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
      </Breadcrumb>

      <Container>
        <Row>
          {graphdata.map((graphdata) => {
            const { description, id, src, img } = graphdata;
            return (
              <Col key={id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                    <Card.Text>{description}</Card.Text>
                    <Link href={src}>
                      <Button variant="outline-dark">
                        Go to {description}
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

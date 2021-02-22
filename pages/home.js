import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import grafdata from "../graf_data.json";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";

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

      {grafdata.map((grafdata) => {
        const { description, id, src } = grafdata;
        return (
          <div className={styles.main}>
            <p id={id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" scr="" />
                <Card.Body>
                  <Card.Text>{description}</Card.Text>
                  <Link href={src}>
                    <Button variant="outline-dark">Go to {description}</Button>
                  </Link>
                </Card.Body>
              </Card>
            </p>
          </div>
        );
      })}
    </div>
  );
}

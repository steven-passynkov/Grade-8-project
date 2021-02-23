import Link from "next/link";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import grafdata from "../../graf_data.json";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Graf() {
  const router = useRouter();
  const { graf } = router.query;
  const [grafData, setGrafData] = useState(null);

  useEffect(() => {
    const data = grafdata.find((el) => el.grafName == graf);
    setGrafData(data);
  }, [graf]);

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href="/home">Home</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item active>Graf {graf}</Breadcrumb.Item>
      </Breadcrumb>

      <div className={styles.card}>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                The conclusion
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{grafData && grafData.conclusion}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>

    </div>
  );
}

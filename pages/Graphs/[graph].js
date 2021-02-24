import Link from "next/link";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import graphstyles from "../../styles/graph.module.css";
import { useRouter } from "next/router";
import graphdata from "../../graph_data.json";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Button } from "react-bootstrap";
import BarGraph from "../../components/bar-graph";
import PieGraph from "../../components/pie-chart";
import ScatterGraph from "../../components/scatter-plot";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function Graph() {
  const router = useRouter();
  const { graph } = router.query;
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    const data = graphdata.find((el) => el.graphName == graph);
    setGraphData(data);
  }, [graph]);

  if (!graphData) {
    return null;
  }

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href="/">Home</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item active>Graph {graph}</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className={graphstyles.h1}>{graphData.header}</h1>

      <Container>
        <Row>
          {graphData.types.indexOf("bar") !== -1 && (
            <BarGraph data={graphData.data} />
          )}
          {graphData.types.indexOf("pie") !== -1 && (
            <PieGraph data={graphData.data} />
          )}
          {graphData.types.indexOf("scatter") !== -1 && (
            <ScatterGraph data={graphData.data} />
          )}
        </Row>
      </Container>

      <div className={graphstyles.accordion}>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="outline-dark" eventKey="0">
                The conclusion
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{graphData.conclusion}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

import React from "react"
import { Card, Button, Container, Row, Col, Nav } from "react-bootstrap"
import { RoutesNames } from "."
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <Container>
      <h1>Choose Article</h1>
      <br />
      <Row>
        {Object.keys(RoutesNames)
          .filter((key: any) => key !== "Home")
          .map((article: any, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{article}</Card.Title>
                  <div className="mt-auto">
                    {/*//@ts-ignore*/}
                    <Nav.Link href={RoutesNames[article] as any}>
                      {/*//@ts-ignore*/}
                      <a href={RoutesNames[article]}> Go to Article</a>
                    </Nav.Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default HomePage

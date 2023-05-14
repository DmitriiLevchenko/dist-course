import React, { useState } from "react"
import { Button, Card, Container } from "react-bootstrap"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism"
import ModalQuiz from "../../components/QuizeModal"
import { conditionTest } from "../../data/tests"

const Conditions = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal((prev) => !prev)
  }

  return (
    <Container>
      <Card bg="light" text="dark" className="mb-3">
        <Card.Body>
          <Card.Title>
            <h1>Conditional Operations in Python</h1>
          </Card.Title>
          <Card.Text>
            Python supports the usual logical conditions from mathematics:
            <ul>
              <li>Equals: a == b</li>
              <li>Not Equals: a != b</li>
              <li>Less than: a {"<"} b</li>
              <li>Less than or equal to: a {"<="} b</li>
              <li>Greater than: a {">"} b</li>
              <li>Greater than or equal to: a {">="} b</li>
            </ul>
            These conditions can be used in several ways, most commonly in 'if
            statements' and loops.
            <h2>If statement</h2>
            An 'if statement' is written by using the `if` keyword.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              a = 33
              b = 200
              if b > a:
                print("b is greater than a")
              `}
            </SyntaxHighlighter>
            <h2>Elif</h2>
            The `elif` keyword is python's way of saying 'if the previous
            conditions were not true, then try this condition'.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              a = 33
              b = 33
              if b > a:
                print("b is greater than a")
              elif a == b:
                print("a and b are equal")
              `}
            </SyntaxHighlighter>
            <h2>Else</h2>
            The `else` keyword catches anything which isn't caught by the
            preceding conditions.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              a = 200
              b = 33
              if b > a:
                print("b is greater than a")
              elif a == b:
                print("a and b are equal")
              else:
                print("a is greater than b")
              `}
            </SyntaxHighlighter>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>
            <h1>We recommend taking a test to confirm your knowledge</h1>
          </Card.Title>
          <ModalQuiz
            show={showModal}
            setShow={setShowModal}
            quizzes={conditionTest}
            title="Quiz on Conditional Operations"
          />
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Conditions

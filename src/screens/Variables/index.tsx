import React, { useState } from "react"
import { Button, Card, Container } from "react-bootstrap"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism"
import ModalQuiz from "../../components/QuizeModal"
import { variableTest } from "../../data/tests" // import the related test data

const VariablesAndTypes = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal((prev) => !prev)
  }

  return (
    <Container>
      <Card bg="light" text="dark" className="mb-3">
        <Card.Body>
          <Card.Title>
            <h1>Variables and Types in Python</h1>
          </Card.Title>
          <Card.Text>
            Python is dynamically typed, which means that you don't have to
            declare the type of a variable when you create one. Here are some of
            the most common types:
            <ul>
              <li>Integers</li>
              <li>Floating-Point Numbers</li>
              <li>Strings</li>
              <li>Booleans</li>
              <li>None</li>
            </ul>
            <h2>Integers</h2>
            An integer is a whole number (not a fraction) that could be positive
            or negative. Integers are represented by the int class.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              x = 10
              `}
            </SyntaxHighlighter>
            <h2>Floating-Point Numbers</h2>
            Floating-point number or Float is a positive or negative number with
            a fractional part. The float class in Python represents a
            floating-point number.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              y = 10.5
              `}
            </SyntaxHighlighter>
            <h2>Strings</h2>
            String is a collection of one or more characters put in single,
            double or triple quotes.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              name = "John Doe"
              `}
            </SyntaxHighlighter>
            <h2>Booleans</h2>
            Boolean represents the truth values False and True.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              is_valid = True
              `}
            </SyntaxHighlighter>
            <h2>None</h2>
            This is a special constant in Python that represents the absence of
            a value or a null value.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              z = None
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
            quizzes={variableTest}
            title="Quiz on Variables and Types"
          />
        </Card.Body>
      </Card>
    </Container>
  )
}

export default VariablesAndTypes

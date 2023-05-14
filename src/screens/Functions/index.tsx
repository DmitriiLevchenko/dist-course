import React, { useState } from "react"
import { Button, Card, Container } from "react-bootstrap"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism"
import { functionAndClassTest } from "../../data/tests"
import ModalQuiz from "../../components/QuizeModal"

const Functions = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal((prev) => !prev)
  }

  return (
    <Container>
      <Card bg="light" text="dark" className="mb-3">
        <Card.Body>
          <Card.Title>
            <h1>Functions in Python</h1>
          </Card.Title>
          <Card.Text>
            Functions in Python are blocks of reusable code that perform a
            specific task. They allow you to break down your program into
            smaller, more manageable parts, and make your code more modular and
            organized.
            <h2>Defining Functions</h2>
            To define a function in Python, you use the `def` keyword followed
            by the function name and parentheses. You can also include
            parameters inside the parentheses if the function needs input
            values. Here's an example:
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`def greet(name):
    print("Hello, " + name)
`}
            </SyntaxHighlighter>
            In this example, we define a function called `greet` that takes a
            parameter `name`. The function simply prints a greeting message with
            the provided name.
            <h2>Calling Functions</h2>
            Once a function is defined, you can call it by using its name
            followed by parentheses. If the function expects parameters, you
            pass the values inside the parentheses. Here's how you can call the
            `greet` function:
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`greet("John")  # Output: Hello, John`}
            </SyntaxHighlighter>
            The function call `greet("John")` will execute the code inside the
            `greet` function and print the greeting message with the name
            "John".
            <h2>Return Statement</h2>
            Functions can also return values using the `return` statement. The
            returned value can be stored in a variable or used directly in the
            program. Here's an example:
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`def add(a, b):
    return a + b

result = add(3, 4)
print(result)  # Output: 7`}
            </SyntaxHighlighter>
            In this example, the `add` function takes two parameters `a` and `b`
            and returns their sum using the `return` statement. The returned
            value is then assigned to the variable `result` and printed.
            <h2>Quiz Your Knowledge</h2>
            Test your understanding of Python functions with our quiz! Click the
            button below to take the quiz and reinforce your knowledge.
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
            quizzes={functionAndClassTest}
            title="Quiz on Variables and Types"
          />
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Functions

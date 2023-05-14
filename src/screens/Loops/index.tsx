import React, { useState } from "react"
import { Button, Card, Container } from "react-bootstrap"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism"
import ModalQuiz from "../../components/QuizeModal"
import { loopTest } from "../../data/tests" // import the related test data

const Loops = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal((prev) => !prev)
  }

  return (
    <Container>
      <Card bg="light" text="dark" className="mb-3">
        <Card.Body>
          <Card.Title>
            <h1>Loop Operations in Python</h1>
          </Card.Title>
          <Card.Text>
            Python provides two primary loop commands:{" "}
            <strong>while loops</strong> and <strong>for loops</strong>.
            <h2>While Loop</h2>
            The while loop allows you to execute a set of statements as long as
            a condition is true.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              i = 1
              while i < 6:
                print(i)
                i += 1
              `}
            </SyntaxHighlighter>
            <p>
              In the above example, the loop will continue executing as long as
              the value of <code>i</code> is less than 6. With each iteration,
              the value of <code>i</code> is incremented by 1.
            </p>
            <h2>For Loop</h2>
            The for loop is used for iterating over a sequence, such as a list,
            tuple, dictionary, set, or string.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              fruits = ["apple", "banana", "cherry"]
              for fruit in fruits:
                print(fruit)
              `}
            </SyntaxHighlighter>
            <p>
              In the above example, the for loop iterates over each element in
              the <code>fruits</code> list and prints the value of each element.
            </p>
            <h2>Break Statement</h2>
            The break statement allows you to exit the loop prematurely, even if
            the loop condition is still true.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              i = 1
              while i < 6:
                print(i)
                if i == 3:
                  break
                i += 1
              `}
            </SyntaxHighlighter>
            <p>
              In the above example, the loop will stop when the value of{" "}
              <code>i</code> equals 3, even though the while condition is still
              true.
            </p>
            <h2>Continue Statement</h2>
            The continue statement allows you to skip the current iteration and
            move on to the next iteration of the loop.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              i = 0
              while i < 6:
                i += 1 
                if i == 3:
                  continue
                print(i)
              `}
            </SyntaxHighlighter>
            <p>
              In the above example, when the value of <code>i</code> is 3, the
              continue statement is encountered, and the current iteration is
              skipped. The loop continues with the next iteration, incrementing
              the value of <code>i</code> and printing it.
            </p>
            <h2>Nested Loops</h2>
            Python allows nesting one or more loops inside another loop. This is
            useful when we need to perform iterative operations on nested data
            structures or when we want to generate combinations of values.
            Here's an example of a nested loop that iterates over a list of
            fruits and a list of colors:
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
  fruits = ["apple", "banana", "cherry"]
  colors = ["red", "yellow", "blue"]
  for fruit in fruits:
    for color in colors:
      print(fruit, color)
  `}
            </SyntaxHighlighter>
            In the above code snippet, the outer loop iterates over the list of
            fruits, and the inner loop iterates over the list of colors for each
            fruit. The result is a combination of each fruit with each color,
            which is printed in each iteration.
            <h2>Loop Control Statements</h2>
            Python provides additional control statements that can be used
            within loops to modify their behavior. The <code>pass</code>{" "}
            statement is a placeholder statement that does nothing. It can be
            used when a statement is required syntactically but no action is
            needed. The <code>else</code> statement in a loop is executed when
            the loop has exhausted all its iterations. It is not executed if the
            loop is terminated by a <code>break</code> statement. Here's an
            example:
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
for i in range(5):
  print(i)
else:
  print("Loop finished")
`}
            </SyntaxHighlighter>
            In the above code, the loop iterates from 0 to 4, printing each
            value. After the loop completes all iterations, the{" "}
            <code>else</code> statement is executed, printing "Loop finished".
            These are some of the key concepts and syntax related to loop
            operations in Python. By using loops effectively, you can perform
            repetitive tasks, iterate over data structures, and control the flow
            of your program. Now, it's time to put your knowledge to the test
            with a quiz! Click the button below to take the quiz and reinforce
            your understanding of loops in Python.
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
            quizzes={loopTest}
            title="Quiz on Conditional Operations"
          />
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Loops

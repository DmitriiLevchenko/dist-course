import React, { useState } from "react"
import { Button, Card, Container } from "react-bootstrap"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism"
import ModalQuiz from "../../components/QuizeModal"
import { arrayTest } from "../../data/tests" // import the related test data

const Arrays = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal((prev) => !prev)
  }

  return (
    <Container>
      <Card bg="light" text="dark" className="mb-3">
        <Card.Body>
          <Card.Title>
            <h1>Arrays in Python</h1>
          </Card.Title>
          <Card.Text>
            In Python, an array is a data structure that can hold multiple
            values of the same type. It allows you to store and access elements
            efficiently.
            <h2>Create an Array</h2>
            To create an array in Python, you can use the <code>
              array
            </code>{" "}
            module. First, you need to import the module and then use the{" "}
            <code>array()</code> function to create an array.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              import array as arr

              # Create an array of integers
              numbers = arr.array('i', [1, 2, 3, 4, 5])
              `}
            </SyntaxHighlighter>
            <p>
              In the above example, we import the <code>array</code> module and
              create an array of integers using the <code>array()</code>{" "}
              function. The first argument specifies the type of elements in the
              array, which in this case is <code>'i'</code> for integers. The
              second argument is a list of values to initialize the array.
            </p>
            <h2>Accessing Elements</h2>
            You can access elements in an array using the index. The index
            starts from 0 for the first element and increments by 1 for each
            subsequent element.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              numbers = arr.array('i', [1, 2, 3, 4, 5])

              # Access the first element
              first_element = numbers[0]

              # Access the last element
              last_element = numbers[-1]
              `}
            </SyntaxHighlighter>
            <p>
              In the above example, we access the first element of the array
              using index 0 and assign it to the variable{" "}
              <code>first_element</code>. We also access the last element using
              the index <code>-1</code> and assign it to the variable{" "}
              <code>last_element</code>.
            </p>
            <h2>Modifying Elements</h2>
            You can modify elements in an array by assigning a new value to a
            specific index.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              numbers = arr.array('i', [1, 2, 3, 4, 5])

              # Modify the second element
              numbers[1] = 10
              `}
            </SyntaxHighlighter>
            <p>
              In the above example, we modify the second element of the array by
              assigning the value 10 to index 1.
            </p>
            <h2>Array Operations</h2>
            Python provides various operations and functions to work with
            arrays. Some commonly used operations include:
            <h3>Appending Elements</h3>
            To add elements to an array, you can use the <code>
              append()
            </code>{" "}
            method. It appends the specified element at the end of the array.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
  numbers = arr.array('i', [1, 2, 3, 4, 5])

  # Append an element to the array
  numbers.append(6)
  `}
            </SyntaxHighlighter>
            <p>
              In the above example, we use the <code>append()</code> method to
              add the value 6 to the end of the array.
            </p>
            <h3>Removing Elements</h3>
            To remove elements from an array, you can use the{" "}
            <code>remove()</code> method. It removes the first occurrence of the
            specified element from the array.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
  numbers = arr.array('i', [1, 2, 3, 4, 5])

  # Remove an element from the array
  numbers.remove(3)
  `}
            </SyntaxHighlighter>
            <p>
              In the above example, we remove the first occurrence of the value
              3 from the array using the <code>remove()</code> method.
            </p>
            <h3>Iterating Over an Array</h3>
            You can iterate over the elements of an array using a{" "}
            <code>for</code> loop. This allows you to perform operations on each
            element of the array.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
  numbers = arr.array('i', [1, 2, 3, 4, 5])

  # Iterate over the elements of the array
  for num in numbers:
    print(num)
  `}
            </SyntaxHighlighter>
            <p>
              In the above example, we use a <code>for</code> loop to iterate
              over each element of the array and print its value.
            </p>
            <h3>Array Length</h3>
            To determine the length of an array, you can use the{" "}
            <code>len()</code> function. It returns the number of elements in
            the array.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
  numbers = arr.array('i', [1, 2, 3, 4, 5])

  # Get the length of the array
  length = len(numbers)
  `}
            </SyntaxHighlighter>
            <p>
              In the above example, we use the <code>len()</code> function to
              get the length of the array and assign it to the variable{" "}
              <code>length</code>.
            </p>
            <h2>Quiz Your Knowledge</h2>
            Now that you've learned about arrays in Python, it's time to test
            your knowledge with a quiz! Click the button below to take the quiz
            and reinforce your understanding of arrays.
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
            quizzes={arrayTest}
            title="Quiz on Conditional Operations"
          />
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Arrays

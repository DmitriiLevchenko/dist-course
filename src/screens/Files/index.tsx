import React, { useState } from "react"
import { Button, Card, Container } from "react-bootstrap"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism"
import ModalQuiz from "../../components/QuizeModal"
import { fileTest } from "../../data/tests" // import the related test data

const FileOperations = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal((prev) => !prev)
  }

  return (
    <Container>
      <Card bg="light" text="dark" className="mb-3">
        <Card.Body>
          <Card.Title>
            <h1>File Operations in Python</h1>
          </Card.Title>
          <Card.Text>
            Python provides several built-in functions and methods for
            performing file operations. These include:
            <ul>
              <li>Opening and closing files</li>
              <li>Reading from files</li>
              <li>Writing to files</li>
              <li>Appending to files</li>
            </ul>
            <h2>Opening and Closing Files</h2>
            To open a file in Python, you can use the <code>open()</code>{" "}
            function. It takes two arguments: the file name and the mode in
            which the file should be opened.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              file = open("filename.txt", "r")
              `}
            </SyntaxHighlighter>
            <p>
              In the above example, we open a file named "filename.txt" in read
              mode ("r").
            </p>
            To close a file in Python, you can use the <code>close()</code>{" "}
            method.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
              file.close()
              `}
            </SyntaxHighlighter>
            <p>
              After you have finished working with a file, it's important to
              close it to free up system resources.
            </p>
            <h2>Reading from Files</h2>
            To read the contents of a file, you can use the <code>
              read()
            </code>{" "}
            method.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
                file = open("filename.txt", "r")
                content = file.read()
                file.close()
                `}
            </SyntaxHighlighter>
            <p>
              In the above example, we open a file in read mode, read its
              contents using the <code>read()</code> method, and then close the
              file.
            </p>
            <h2>Writing to Files</h2>
            To write to a file, you can use the <code>write()</code> method.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
                file = open("filename.txt", "w")
                file.write("Hello, World!")
                file.close()
                `}
            </SyntaxHighlighter>
            <p>
              In the above example, we open a file in write mode, write the
              string "Hello, World!" to the file using the <code>write()</code>{" "}
              method, and then close the file.
            </p>
            <h2>Appending to Files</h2>
            To append content to an existing file, you can use the{" "}
            <code>append()</code> mode.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
                file = open("filename.txt", "a")
               file.write("This is an additional line.")
                file.close()
                `}
            </SyntaxHighlighter>
            <p>
              In the above example, we open a file in append mode, write the
              string "This is an additional line." to the file using the{" "}
              <code>write()</code> method, and then close the file. The content
              will be appended to the existing content of the file.
            </p>
            <h2>File Exceptions</h2>
            When working with files, it's important to handle exceptions in case
            any errors occur. You can use a try-except block to catch and handle
            exceptions that may arise during file operations.
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`
                try:
                  file = open("filename.txt", "r")
                  content = file.read()
                  file.close()
                except IOError:
                  print("An error occurred while reading the file.")
                `}
            </SyntaxHighlighter>
            <p>
              In the above example, we try to open a file and read its contents.
              If an IOError occurs, we print an error message. This helps to
              handle potential issues such as the file not existing or the file
              being inaccessible.
            </p>
            <h2>File Handling Best Practices</h2>
            When working with files in Python, it's important to follow some
            best practices:
            <ul>
              <li>
                Always close the file after you're done with it to free up
                system resources.
              </li>
              <li>
                Use exception handling to handle potential errors that may occur
                during file operations.
              </li>
              <li>
                When writing to or appending to a file, be careful not to
                overwrite existing content unintentionally.
              </li>
              <li>
                Ensure that the file you're trying to access exists and has the
                necessary permissions.
              </li>
            </ul>
            <h2>Quiz: Test Your Knowledge</h2>
            Now that you have learned about file operations in Python, it's time
            to test your knowledge with a quiz. Click the button below to take
            the quiz and reinforce your understanding of working with files.
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
            quizzes={fileTest}
            title="Quiz on Conditional Operations"
          />
        </Card.Body>
      </Card>
    </Container>
  )
}

export default FileOperations

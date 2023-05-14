import React, { useState } from "react"
import { Button, Card, Container } from "react-bootstrap"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism"
import ModalQuiz from "../../components/QuizeModal"
import { classTest } from "../../data/tests"

const Classes = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal((prev) => !prev)
  }

  return (
    <Container>
      <Card bg="light" text="dark" className="mb-3">
        <Card.Body>
          <Card.Title>
            <h1>Python Classes</h1>
          </Card.Title>
          <Card.Text>
            Python classes are a fundamental concept in object-oriented
            programming. They allow you to define your own custom types and
            create objects with their own properties and behaviors. Classes
            provide a blueprint for creating objects and encapsulating related
            data and functionality.
            <h2>Defining a Class</h2>
            To define a class in Python, you use the `class` keyword followed by
            the name of the class. Here's an example of a simple class
            definition:
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age`}
            </SyntaxHighlighter>
            In this example, we define a class called `Person`. It has two
            properties: `name` and `age`. The `__init__` method is a special
            method called the constructor, which is executed when a new object
            is created from the class. It initializes the `name` and `age`
            properties with the values passed as arguments.
            <h2>Creating Objects</h2>
            Once you have defined a class, you can create objects or instances
            of that class. To create an object, you simply call the class as if
            it were a function and assign the result to a variable. Here's an
            example:
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`person = Person('John Doe', 25)`}
            </SyntaxHighlighter>
            In this example, we create a new `Person` object named `person` with
            the name 'John Doe' and age 25.
            <h2>Accessing Object Properties</h2>
            You can access the properties of an object using dot notation. For
            example, to access the `name` property of the `person` object, you
            can use `person.name`. Here's an example:
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`print(person.name)  # Output: John Doe`}
            </SyntaxHighlighter>
            <h2>Adding Methods</h2>
            In addition to properties, you can also define methods within a
            class. Methods are functions that are associated with a specific
            class and can perform operations on the object's data. Here's an
            example:
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hello(self):
        print(f'Hello, my name is {self.name} and I am {self.age} years old.')

person = Person('John Doe', 25)
person.say
_hello() # Output: Hello, my name is John Doe and I am 25 years old.`}
            </SyntaxHighlighter>
            vbnet Copy code In this example, we define a method called
            `say_hello()` within the `Person` class. The method takes the `self`
            parameter, which refers to the instance of the class. Inside the
            method, we can access the object's properties using `self.name` and
            `self.age`.
            <h2>Inheritance</h2>
            Python supports class inheritance, which allows you to create a new
            class that inherits the properties and methods of an existing class.
            The new class is called the child class, and the existing class is
            called the parent class or superclass. Inheritance allows you to
            reuse code and create hierarchical relationships between classes. To
            create a child class, you define it as a new class and specify the
            parent class in parentheses after the class name. Here's an example:
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {`class Student(Person):
def __init__(self, name, age, student_id):
    super().__init__(name, age)
    self.student_id = student_id`}
            </SyntaxHighlighter>
            In this example, we define a `Student` class that inherits from the
            `Person` class. The `super()` function is used to call the parent
            class's `__init__` method and initialize the `name` and `age`
            properties. The `Student` class also has an additional `student_id`
            property.
            <h2>Quiz Your Knowledge</h2>
            Test your understanding of Python classes with our quiz! Click the
            button below to take the quiz and reinforce your knowledge.
            <Button onClick={openModal}>Take Quiz</Button>
            <ModalQuiz
              show={showModal}
              setShow={setShowModal}
              quizzes={classTest}
              title="Quiz on Python Classes"
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Classes

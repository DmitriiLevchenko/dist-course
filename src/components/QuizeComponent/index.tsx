import React, { useState } from "react"
import { Button, Alert, Container, Row, Col, Card } from "react-bootstrap"

export interface Quiz {
  question: string
  answers: string[]
  correctAnswer: string
}

interface QuizProps {
  quizzes: Quiz[]
}

const QuizComponent: React.FC<QuizProps> = ({ quizzes }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState({ correct: 0, incorrect: 0 })
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)

  const checkAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    if (answer === quizzes[currentQuizIndex].correctAnswer) {
      setScore((prevScore) => ({
        ...prevScore,
        correct: prevScore.correct + 1,
      }))
    } else {
      setScore((prevScore) => ({
        ...prevScore,
        incorrect: prevScore.incorrect + 1,
      }))
    }
    setCurrentQuizIndex(currentQuizIndex + 1)
  }

  if (currentQuizIndex >= quizzes.length) {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <Card className="mb-4">
              <Card.Header as="h5">Quiz Finished!</Card.Header>
            </Card>
            <Card>
              <Card.Header as="h5">Score:</Card.Header>
              <Card.Body>
                <Card.Text>Correct: {score.correct}</Card.Text>
                <Card.Text>Incorrect: {score.incorrect}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <Card className="mb-4">
            <Card.Header as="h5">
              {quizzes[currentQuizIndex].question}
            </Card.Header>
            {quizzes[currentQuizIndex].answers.map((answer, index) => (
              <Card.Body key={index}>
                <Button
                  variant="outline-primary"
                  onClick={() => checkAnswer(answer)}
                >
                  {answer}
                </Button>
              </Card.Body>
            ))}
          </Card>
          {selectedAnswer && (
            <Alert
              variant={
                selectedAnswer === quizzes[currentQuizIndex].correctAnswer
                  ? "success"
                  : "danger"
              }
            >
              {selectedAnswer === quizzes[currentQuizIndex].correctAnswer
                ? "Correct!"
                : "Incorrect!"}
            </Alert>
          )}
          <Card>
            <Card.Header as="h5">Score:</Card.Header>
            <Card.Body>
              <Card.Text>Correct: {score.correct}</Card.Text>
              <Card.Text>Incorrect: {score.incorrect}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default QuizComponent

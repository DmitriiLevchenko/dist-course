import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import QuizComponent, { Quiz } from "../QuizeComponent"

interface ModalQuizProps {
  quizzes: Quiz[]
  title: string
  show: boolean
  setShow: (data: boolean) => void
}

const ModalQuiz: React.FC<ModalQuizProps> = ({
  quizzes,
  title,
  show,
  setShow,
}) => {
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Start Quiz
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <QuizComponent quizzes={quizzes} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalQuiz

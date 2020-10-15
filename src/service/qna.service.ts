import { ApiService } from "./api.service";

// create question dto
interface CreateQuestion {
  serviceId: number | string
  createdBy: string
  question: string
}

interface AnswerQuestion {
  answerBy: string
  answer: string
}

export class QnaService extends ApiService {

  constructor() {
    super()
  }

  // get question by user id
  async getQuestionByUserId(userId: string | number) {
    return this.api.get(`/qna/user/${userId}`)
  }

  // get question not answered
  async getUnAnsweredQuestion() {
    return this.api.get('/qna')
  }
  
  // create questoin
  async createQuestion(questionData: CreateQuestion) {
    return this.api.post('/qna', questionData)
  }

  // answer question
  async answerQuestion(questionId: string | number, answerData: AnswerQuestion) {
    return this.api.put(`/qna/${questionId}`, answerData)
  }
}
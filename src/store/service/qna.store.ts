import { Store } from "store/index.store";
import { Api } from 'service/_index.service'
import { action, computed, observable, toJS } from "mobx";

export class QnaStore {
  store: Store
  // qna data
  @observable questionUserData = []
  @observable unAnsweredQuestionData = []

  constructor(store: any) {
    this.store = store
  }

  // fetch qnas by user id
  @action
  async fetchQuestionByUserId(userId: string | number) {
    try {
      console.log(`[QNA] - Fetch Question By User id`)
      const result = await Api.qnaService.getQuestionByUserId(userId)
      this.questionUserData = result.data
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  // get get qna
  @computed
  get questionUser() {
    return toJS(this.questionUserData)
  }

  // fetch unanswered question
  @action
  async fetchUnAnsweredQuestion() {
    try {
      console.log(`[QNA] - Fetch Unanswered Question`)
      const result = await Api.qnaService.getUnAnsweredQuestion()
      this.unAnsweredQuestionData = result.data
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  // get get qna
  @computed
  get unAnsweredQuestion() {
    return toJS(this.unAnsweredQuestionData)
  }

  // create question
  async createQuestion(userId: string | number, questionData: any) {
    try {
      console.log(`[QNA] - Create Question`, questionData)
      const result = await Api.qnaService.createQuestion({ ...questionData, createdBy: userId })
      await this.fetchQuestionByUserId(userId)
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  // answer question
  async answerQuestion(questionId: string | number, answerData: any) {
    try {
      console.log(`[QNA] - Answer Question`, answerData)
      const result = await Api.qnaService.answerQuestion(questionId, answerData)
      await this.fetchUnAnsweredQuestion()
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

}
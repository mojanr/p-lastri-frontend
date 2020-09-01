import { ApiService } from "./api.service";

export class CreateAccountService extends ApiService {

  constructor() {
    super()
  }

  // get all create account submission
  async getAllSubmission() {
    return this.api.get('/create-account/submission')
  }

  // create account submission
  async createSubmission() {
    return this.api.post('/create-account')
  }

  // get provider active create account submission
  async getActiveSubmission() {
    return this.api.get('/create-account')
  }

  // approve document
  async approveDocument(submissionId: string, documentId: string) {
    return this.api.patch(`/create-account/${submissionId}/${documentId}/approve`)
  }

  // reject document
  async rejectDocument(submissionId: string, documentId: string) {
    return this.api.patch(`/create-account/${submissionId}/${documentId}/reject`)
  }

 
}
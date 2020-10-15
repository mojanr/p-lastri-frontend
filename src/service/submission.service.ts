import { ApiService } from "./api.service";

export interface SubmissionType {
  name: string
  description?: string
}

export interface SubmissionTypeRequirement {
  name: string
  description?: string
  templateFile: string
  isRequired: boolean
}

export interface Submission {
  submissionTypeId: string | number
  createdBy: string | number
}

export class SubmissionService extends ApiService {

  constructor() {
    super()
  }

  // get all submission type
  async getSubmissionTypes() {
    return this.api.get(`/submission/type`)
  }

  // get all submission type requirement
  async getSubmissionTypeRequirements(submissionTypeId: string | number) {
    return this.api.get(`/submission/type/${submissionTypeId}/requirement`)
  }

  // create submission type
  async createSubmisionType(submissionTypeData: SubmissionType) {
    return this.api.post(`/submission/type`, submissionTypeData)
  }

  // create submission type requirement
  async createSubmissionTypeRequirement(submissionTypeId: string | number, submissionTypeRequirementData: SubmissionTypeRequirement) {
    return this.api.post(`/submission/type/${submissionTypeId}/requirement`, submissionTypeRequirementData)
  }

  // get all submission
  async getSubmissions() {
    return this.api.get(`/submission`)
  }

  // get all submission by provider
  async getSubmissionsByProvider(providerId: string | number) {
    return this.api.get(`/submission/provider/${providerId}`)
  }

  // get active submission by provider
  async getActiveSubmissionByProvider(submissionTypeId: string | number, providerId: string | number) {
    return this.api.get(`/submission/${submissionTypeId}/${providerId}/active`)
  }

  // create submission
  async createSubmission(submissionData: Submission) {
    return this.api.post(`/submission`, submissionData)
  }

  // upload file submission requirement
  async updateSubmission(submissionRequirementId: string | number, fileUpload: any) {
    return this.api.put(`/submission/requirement/${submissionRequirementId}`, fileUpload)
  }

  // submit submission
  async submitSubmission(submissionId: string | number) {
    return this.api.patch(`/submission/${submissionId}/submit`)
  }

  // cancel submission
  async cancelSubmission(submissionId: string | number) {
    return this.api.patch(`/submission/${submissionId}/cancel`)
  }

  // approve submisison
  async approveRequirement(submissionRequirementId: string | number) {
    return this.api.patch(`/submission/requirement/${submissionRequirementId}/approve`)
  }

  // reject submission
  async rejectRequirement(submissionRequiremetId: string | number, reason: string) {
    console.log(submissionRequiremetId, reason)
    return this.api.patch(`/submission/requirement/${submissionRequiremetId}/reject`, {reason: reason})
  }
  
  // get list submission approval
  async getSubmissionVerificationVerifikator(submissionTypeId: string | number) {
    return this.api.get(`/submission/${submissionTypeId}/verification/verifikator`)
  }

   
  // get list submission approval
  async getSubmissionVerificationHelpdesk(submissionTypeId: string | number) {
    return this.api.get(`/submission/${submissionTypeId}/verification/helpdesk`)
  }

  // get submission requirement
  async getSubmissionRequirement(submissionTypeId: string | number, submissionId: string | number) {
    return this.api.get(`/submission/${submissionTypeId}/requirement/${submissionId}`)
  }

  async submitApprovalHelpdesk(submissionId: string | number) {
    return this.api.patch(`/submission/submit/approval/helpdesk/${submissionId}`)
  }

  async submitApprovalVerifikator(submissionId: string | number) {
    return this.api.patch(`/submission/submit/approval/verifikator/${submissionId}`)
  }
}
import { Store } from "store/index.store";
import { Api } from 'service/_index.service'
import { action, computed, observable, toJS } from "mobx";

export class SubmissionStore {
  store: Store
  // submissions data
  @observable submissionTypesData = []
  @observable submissionTypeRequirementsData = []
  @observable activeSubmissionTypeMenuData: string = ''
  @observable activeSubmissionData: any
  @observable submissionApprovalData = []
  @observable submissionApprovalRequirementData: any = []

  constructor(store: any) {
    this.store = store
  }

  // set active submission menu
  @action
  setActiveSubmissionMenu(submissionTypeName: string) {
    this.activeSubmissionTypeMenuData = submissionTypeName
  }

  // get active submission menu
  @computed
  get activeSubmissionTypeMenu() {
    return this.activeSubmissionTypeMenuData
  }

  // fetch submission
  @action
  async fetchSubmissionTypes() {
    try {
      console.log(`[SUBMISSIONS] - Fetch Submission Types`)
      const result = await Api.submissionService.getSubmissionTypes()
      this.submissionTypesData = result.data
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  // get submission types
  @computed
  get getSubmissionTypes() {
    return toJS(this.submissionTypesData)
  }

  // create submission type
  async createSubmissionType(submissionTypeData: any) {
    try {
      console.log(`[SUBMISSIONS] - Create Submission Type`, submissionTypeData)
      const result = await Api.submissionService.createSubmisionType(submissionTypeData)
      await this.fetchSubmissionTypes()
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  // fetch submission type requirement
  @action
  async fetchSubmissionTypeRequirements(submissionTypeId: string | number) {
    try {
      console.log(`[SUBMISSIONS] - Fetch Submissions Type Requirements`)
      const result = await Api.submissionService.getSubmissionTypeRequirements(submissionTypeId)
      this.submissionTypeRequirementsData = result.data
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  // get submission type requirement
  @computed
  get getSubmissionTypeRequirements() {
    return toJS(this.submissionTypeRequirementsData)
  }

  // create submission type requirement
  async createSubmissionTypeRequirement(submissionTypeId: string | number, submissionTypeData: any) {
    try {
      console.log(`[SUBMISSIONS] - Create Submission Type Requirement`, submissionTypeData)
      const result = await Api.submissionService.createSubmissionTypeRequirement(submissionTypeId, submissionTypeData)
      await this.fetchSubmissionTypeRequirements(submissionTypeId)
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  @action
  dispatchSubmissionTypeRequirementsData() {
    this.submissionTypeRequirementsData = []
  }

  // create submission
  async createSubmission(submissionTypeId: string | number, userId: string | number) {
    try {
      console.log(`[SUBMISSIONS] - Create Submission`, submissionTypeId)
      const result = await Api.submissionService.createSubmission({ submissionTypeId: submissionTypeId, createdBy: userId })
      await this.fetchActiveSubmission(submissionTypeId, userId)
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  // get active submission
  @action
  async fetchActiveSubmission(submissionTypeId: string | number, userId: string | number) {
    try {
      console.log(`[SUBMISSIONS] - Fetch Active Submission`, submissionTypeId)
      const result = await Api.submissionService.getActiveSubmissionByProvider(submissionTypeId, userId)
      this.activeSubmissionData = result.data
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  // get active submssion
  @computed
  get getActiveSubmission() {
    // const json = toJS(this.activeSubmissionData)
    // console.log('json active submission data', toJS(this.activeSubmissionData))
    return toJS(this.activeSubmissionData)
  }

  // upload submission
  @action
  async uploadSubmission(submissionId: string | number, uploadData: any, submissionTypeId: string | number, userId: string | number) {
    try {
      console.log(`[SUBMISSIONS] - Submit Submission`, submissionId)
      const result = await Api.submissionService.updateSubmission(submissionId, uploadData)
      await this.fetchActiveSubmission(submissionTypeId, userId)
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }


  // submit submission
  async submitSubmission(submissionId: string | number, submissionTypeId: string | number, userId: string | number) {
    try {
      console.log(`[SUBMISSIONS] - Submit Submission`, submissionId)
      const result = await Api.submissionService.submitSubmission(submissionId)
      await this.fetchActiveSubmission(submissionTypeId, userId)
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  // cancel submission
  async cancelSubmission(submissionId: string | number, submissionTypeId: string | number, userId: string | number) {
    try {
      console.log(`[SUBMISSIONS] - Submit Submission`, submissionId)
      const result = await Api.submissionService.cancelSubmission(submissionId)
      await this.fetchActiveSubmission(submissionTypeId, userId)
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  // get list approval verifikator
  @action
  async fetchSubmissionVerificationVerifikator(submissionTypeId: string | number) {
    try {
      console.log(`[SUBMISSIONS] - Get Submission For Verifikator`, submissionTypeId)
      const result = await Api.submissionService.getSubmissionVerificationVerifikator(submissionTypeId)
      // await this.fetchActiveSubmission(submissionTypeId, userId)
      this.submissionApprovalData = result.data
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  @action
  async fetchSubmissionVerificationHelpdesk(submissionTypeId: string | number) {
    try {
      console.log(`[SUBMISSIONS] - Get Submission For Verifikator`, submissionTypeId)
      const result = await Api.submissionService.getSubmissionVerificationHelpdesk(submissionTypeId)
      // await this.fetchActiveSubmission(submissionTypeId, userId)
      this.submissionApprovalData = result.data
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  @computed
  get getSubmissionApprovalData() {
    return toJS(this.submissionApprovalData)
  }

  // approve requirement
  async approveRequirement(submissionTypeId: string | number, submissionId: string | number, submissionRequirementId: string | number) {
    try {
      console.log(`[SUBMISSIONS] - Approve Requirement`, submissionRequirementId)
      const result = await Api.submissionService.approveRequirement(submissionRequirementId)
      // await this.fetchActiveSubmission(submissionTypeId, userId)
      await this.fetchSubmissionApprovalRequirement(submissionTypeId, submissionId)
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  // approve requirement
  async rejectRequirement(submissionTypeId: string | number, submissionId: string | number, submissionRequirementId: string | number) {
    try {
      console.log(`[SUBMISSIONS] - Reject Requirement`, submissionRequirementId)
      const result = await Api.submissionService.rejectRequirement(submissionRequirementId, 'reject')
      // await this.fetchActiveSubmission(submissionTypeId, userId)
      await this.fetchSubmissionApprovalRequirement(submissionTypeId, submissionId)
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  // fetch submission requirement
  @action
  async fetchSubmissionApprovalRequirement(submissionTypeId: string | number, submissionId: string | number) {
    try {
      console.log(`[SUBMISSIONS] - Fetch Submission Requirement`, submissionTypeId, submissionId)
      const result = await Api.submissionService.getSubmissionRequirement(submissionTypeId, submissionId)
      // await this.fetchActiveSubmission(submissionTypeId, userId)
      this.submissionApprovalRequirementData = result.data.submissionRequirements
      // console.log('submission approval requirement', toJS(this.submissionApprovalRequirementData))
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  @computed
  get getSubmissionApprovalRequirement() {
    return toJS(this.submissionApprovalRequirementData)
  }

  // submit approva
  async submitApprovalHelpdesk(submissionId: string) {
    try {
      console.log(`[SUBMISSIONS] - Submit Approval`, submissionId)
      const result = await Api.submissionService.submitApprovalHelpdesk(submissionId)
      // await this.fetchActiveSubmission(submissionTypeId, userId)
      // this.submissionApprovalRequirementData = result.data.submissionRequirements
      // console.log('submission approval requirement', toJS(this.submissionApprovalRequirementData))
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  // submit approva verifikator
  async submitApprovalVerifikator(submissionId: string) {
    try {
      console.log(`[SUBMISSIONS] - Submit Approval`, submissionId)
      const result = await Api.submissionService.submitApprovalVerifikator(submissionId)
      // await this.fetchActiveSubmission(submissionTypeId, userId)
      // this.submissionApprovalRequirementData = result.data.submissionRequirements
      // console.log('submission approval requirement', toJS(this.submissionApprovalRequirementData))
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }
}
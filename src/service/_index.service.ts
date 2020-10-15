import { AuthService } from "./auth.service"
import { ProviderService } from "./provider.service"
import { QnaService } from "./qna.service"
import { RoleService } from "./role.service"
import { ServiceService } from "./service.service"
import { SubmissionService } from "./submission.service"
import { UserService } from "./user.service"

class Service {
  authService: AuthService
  providerService: ProviderService
  roleService: RoleService
  serviceService: ServiceService
  userService: UserService
  submissionService: SubmissionService
  qnaService: QnaService

  constructor() {
    this.authService = new AuthService()
    this.providerService = new ProviderService()
    this.roleService = new RoleService()
    this.serviceService = new ServiceService()
    this.userService = new UserService()
    this.submissionService = new SubmissionService()
    this.qnaService = new QnaService()
  }
}

export const Api = new Service()
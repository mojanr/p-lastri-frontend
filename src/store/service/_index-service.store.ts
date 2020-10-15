import { Provider } from 'mobx-react'
import { createContext, useContext } from 'react'
import { AuthStore } from './auth.store'
import { ProviderStore } from './provider.store'
import { QnaStore } from './qna.store'
import { RoleStore } from './role.store'
import { ServiceStore } from './service.store'
import { SubmissionStore } from './submission.store'
import { UserStore } from './user.store'

export class IndexServiceStore {
  // store: Store
  authStore: AuthStore
  roleStore: RoleStore
  serviceStore: ServiceStore
  userStore: UserStore
  providerStore: ProviderStore
  submissionStore: SubmissionStore
  qnaStore: QnaStore

  constructor() {
    // this.store = store
    this.authStore = new AuthStore(this)
    this.roleStore = new RoleStore(this)
    this.serviceStore = new ServiceStore(this)
    this.userStore = new UserStore(this)
    this.providerStore = new ProviderStore(this)
    this.submissionStore = new SubmissionStore(this)
    this.qnaStore = new QnaStore(this)
  }
}

// create context
const context = createContext(new IndexServiceStore())
// use context
export const useServiceStore = () => useContext(context)
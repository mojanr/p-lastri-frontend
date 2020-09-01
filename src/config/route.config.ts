import { RouteConfig } from "react-router-config";
import AppRoot from "App.root";
import LoginPage from "module/auth/page/login.page";
import RegisterPage from "module/auth/page/register.page";
import MainPage from "module/main/page/main.page";
import UserPage from "module/user/page/user.page";
import AccountPage from "module/account/page/account.page";
import ChangeDataPage from "module/change-data/page/change-data.page";
import ChangeEmailPage from "module/change-email/page/change-email.page";
import PublicPage from "module/public/page/public.page";
import PasswordForgetPage from "module/auth/page/password-forget.page";
import { default as VerificationAccountPage } from "module/account/page/verification.page";
import { default as VerificationApprovalAccountPage } from "module/account/page/verification-approval.page";
import { default as VerificationChangeDataPage } from "module/change-data/page/verification.page";
import { default as VerificationApprovalChangeDataPage } from "module/change-data/page/verification-approval.page";
import { default as VerificationChangeEmailPage } from "module/change-email/page/verification.page";
import { default as VerificationApprovalChangeEmailPage } from "module/change-email/page/verification-approval.page";
import ServicePage from "module/service/page/service.page";
import ProviderPage from "module/provider/page/provider.page";
import ConsultOnlinePage from "module/consult-online/page/consult-online.page";
import { default as VerificationConsultationOnlinePage } from "module/consult-online/page/verification.page";
import ConsultF2FPage from "module/consult-f2f/page/consult-f2f.page";
import { default as VerificationConsultationF2FPage } from "module/consult-f2f/page/verification.page";

export const ROUTE: RouteConfig = {
  component: AppRoot,
  routes: [
    // {
    //   path: '/',
    //   exact: true,
    //   component: PublicPage
    // },
    {
      path: '/auth/login',
      exact: true,
      component: LoginPage
    },
    {
      path: '/auth/password/forget',
      exact: true,
      component: PasswordForgetPage
    },
    // {
    //   path: '/password/reset',
    //   exact: true,
    //   component: PasswordResetPage
    // },
    {
      path: '/auth/register',
      exact: true,
      component: RegisterPage
    },
    {
      path: '/main',
      exact: false,
      component: MainPage,
      routes: [
        {
          path: '/main/user',
          exact: true,
          component: UserPage
        },

        // penyedia
        {
          path: '/main/provider',
          exact: true,
          component: ProviderPage
        },
        // {
        //   path: '/main/role',
        //   exact: true,
        //   component: RolePage
        // },
        // {
        //   path: '/main/permission',
        //   exact: true,
        //   component: PermissionPage
        // },
        // {
        //   path: '/main/access-control',
        //   exact: true,
        //   component: AccessControlPage
        // },
        // {
        //   path: '/main/scheduler',
        //   exact: true,
        //   component: SchedulerPage
        // },

        // layanan
        {
          path: '/main/service',
          exact: true,
          component: ServicePage
        },

        // pembuatan akun baru
        {
          path: '/main/account',
          exact: true,
          component: AccountPage
        },
        {
          path: '/main/account/verification',
          exact: true,
          component: VerificationAccountPage
        },
        {
          path: '/main/account/verification/:submissionId',
          exact: true,
          component: VerificationApprovalAccountPage
        },
        // ubah data
        {
          path: '/main/change-data',
          exact: true,
          component: ChangeDataPage
        },
        {
          path: '/main/change-data/verification',
          exact: true,
          component: VerificationChangeDataPage
        },
        {
          path: '/main/change-data/verification/:submisionId',
          exact: true,
          component: VerificationApprovalChangeDataPage
        },
        // ganti email
        {
          path: '/main/change-email',
          exact: true,
          component: ChangeEmailPage
        },
        {
          path: '/main/change-email/verification',
          exact: true,
          component: VerificationChangeEmailPage
        },
        {
          path: '/main/change-email/verification/:submissionId',
          exact: true,
          component: VerificationApprovalChangeEmailPage
        },
        // konsultasi online
        {
          path: '/main/consultation/online',
          exact: true,
          component: ConsultOnlinePage
        },
        {
          path: '/main/consultation/online/verification',
          exact: true,
          component: VerificationConsultationOnlinePage
        },
        // {
        //   path: '/main/change-email/verification/:submissionId',
        //   exact: true,
        //   component: VerificationApprovalChangeEmailPage
        // },
        // konsultasi tatap muka
        {
          path: '/main/consultation/ftf',
          exact: true,
          component: ConsultF2FPage
        },
        {
          path: '/main/consultation/ftf/verification',
          exact: true,
          component: VerificationConsultationF2FPage
        },
        // {
        //   path: '/main/change-email/verification/:submissionId',
        //   exact: true,
        //   component: VerificationApprovalChangeEmailPage
        // },


        // {
        //   path: '/main/pengajuan/ganti-email',
        //   exact: true,
        //   component: PengajuanGantiEmailPage
        // },
        // {
        //   path: '/main/verifikasi/ganti-email',
        //   exact: true,
        //   component: VerifikasiListPengajuanGantiEmailPage
        // },
        // {
        //   path: '/main/verifikasi/ganti-email/:id',
        //   exact: true,
        //   component: VerifikasiPengajuanGantiEmailPage
        // },
        // {
        //   path: '*',
        //   // exact: true,
        //   component: DefaultPage
        // },
      ]
    },
    {
      path: '/',
      exact: true,
      component: PublicPage
    },
    // {
    //   path: '*',
    //   // exact: true,
    //   component: DefaultPage
    // },
  ]
}
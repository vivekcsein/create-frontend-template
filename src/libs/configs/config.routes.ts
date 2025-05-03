

export const routes = {

    publicRoutes: {
        home: "/",
        notFound: "*"
    },
    privateRoutes: {

    },
    adminRoutes: {
        admin: "/admin",
        adminDashboard: "/admin/dashboard",
        adminUsers: "/admin/users",
        adminSettings: "/admin/settings",
        adminReports: "/admin/reports",
        adminLogs: "/admin/logs",
    },
    authRoutes: {
        signin: "/auth/signin",
        signup: "/auth/signup",
        signout: "/auth/singout",
        signoutAll: "/auth/signout-all",
        verifyEmail: "/auth/verify-email",
        resendVerification: "/auth/resend-verification",
        forgotPassword: "/auth/forgot-password",
        resetPassword: "/auth/reset-password",
    },

    layoutRoutes: {
        rootLayout: "/api/rootLayout",
    }
};
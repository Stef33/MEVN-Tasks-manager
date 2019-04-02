import taskRoutes from './api/task/tasks-routes.js'
import regRoutes from './api/register/register-routes.js'
import userRoutes from './api/user/user-routes.js'
import authRoutes from './api/auth/auth-routes.js'

export function registerRoutes(app) {
    app.use('/api', taskRoutes)
    app.use('/api', regRoutes)
    app.use('/api', userRoutes)
    app.use('/api', authRoutes)
}
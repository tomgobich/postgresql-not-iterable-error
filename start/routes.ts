/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import User from '#models/user'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.post('/login', async ({ auth }) => {
  const user = await User.firstOrCreate(
    { email: 'user@test.com' },
    {
      fullName: 'Test User',
      email: 'user@test.com',
      password: 'testing',
    }
  )

  await auth.use('web').login(user, true)

  return 'success'
})

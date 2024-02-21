import { PrismaClient } from "@prisma/client"
import * as bcrypt from 'bcrypt'
import { redirect } from "next/navigation"

const prisma = new PrismaClient()

async function createAccount(formData: FormData) {
  'use server'

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  redirect('/portal/login')
}

async function login(formData: FormData) {
  'use server'

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const user = await prisma.user.findFirst({
    where: {
      email
    }
  })

  if (!user) {
    throw new Error('User not found')
  }

  const passwordMatch = await bcrypt.compare(password, user?.password)

  if (!passwordMatch) {
    throw new Error('Password does not match')
  }

  //TODO: Create JWT section
  redirect('/portal')
}

const AuthActions = {
  createAccount,
  login
}

export default AuthActions
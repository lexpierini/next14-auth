import { PrismaClient } from "@prisma/client"
import * as bcrypt from 'bcrypt'
import { redirect } from "next/navigation"

const prisma = new PrismaClient()

async function createAccount(formData: FormData) {
  'use server'
  try {
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

    alert('Account created successfully')
    redirect('/portal/login')

  } catch (error) {
    console.error(error)
    alert('An error occurred while creating your account')
  }
}

const AuthActions = {
  createAccount
}

export default AuthActions
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { z } from 'zod'

import GoogleLogo from '@/assets/google.png'
import Logo from '@/assets/Logo Workday.svg'
import Robot from '@/assets/Robot.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/contexts/authContext'
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from '@/services/auth'

const SignInFormSchema = z.object({
  email: z.string().email({ message: 'Email Inválido' }),
  password: z.string().min(1, { message: 'Oi' }),
})

export type SignInForm = z.infer<typeof SignInFormSchema>

export function SignIn() {
  const [isSigningIn, setIsSigningIn] = useState(false)
  const { userLoggedIn } = useAuth()
  const { handleSubmit, register } = useForm<SignInForm>({
    resolver: zodResolver(SignInFormSchema),
  })

  async function HandleEmailAndPasswordSignIn(data: SignInForm) {
    if (!isSigningIn) {
      setIsSigningIn(true)
      await doSignInWithEmailAndPassword(data.email, data.password)
        .then(() => {})
        .catch((error) => {
          setIsSigningIn(false)
          const errorCode = error.code
          const errorMessage = error.message

          if (errorCode === 'auth/invalid-credential') {
            alert('Senha incorreta.')
          } else if (errorCode === 'auth/user-not-found') {
            alert('Usuário não encontrado.')
          } else {
            alert(errorMessage)
          }
        })
    }
  }

  function handleGoogleSignIn() {
    if (!isSigningIn) {
      setIsSigningIn(true)
      doSignInWithGoogle().catch((err) => {
        console.log(err)
        setIsSigningIn(false)
      })
    }
  }
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      {userLoggedIn && <Navigate to={'/'} replace={true} />}
      <Helmet title="Login" />
      <div className="flex flex-col justify-between bg-neutral-800 p-8">
        <img
          className="h-[103px] w-[237px]"
          src={Logo}
          alt="Logotipo da Empresa Workday"
        />
        <div className="flex items-center justify-center">
          <img
            className=" h-[533px] w-[621px]"
            src={Robot}
            alt="Logotipo da Empresa Workday"
          />
        </div>
        <div className="jus">
          <p className="text-sm">Painel de Onboarding © Code Masters - 2024</p>
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="flex w-[420px] flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold ">Acessar o Painel</h1>
          <p className="justify-center pb-4 text-center text-base">
            Acompanhe as novidades da empresa através do nosso painel!
          </p>
          <form
            className="w-[70%]"
            onSubmit={handleSubmit(HandleEmailAndPasswordSignIn)}
          >
            <div className=" space-y-2 pb-1">
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                {...register('email')}
              />
            </div>
            <div className=" space-y-2 pb-4">
              <Label htmlFor="password">Senha:</Label>
              <Input
                id="password"
                type="password"
                placeholder="Senha"
                {...register('password')}
              />
            </div>
            <Button
              disabled={isSigningIn}
              type="submit"
              className="w-full bg-teal-800 text-white hover:bg-teal-700"
            >
              Login com Email
            </Button>
          </form>
          <div className="my-3">
            <span className="text-sm text-muted-foreground">
              Ou continue com
            </span>
          </div>

          <Button
            disabled={isSigningIn}
            variant="outline"
            className="w-[70%] gap-2"
            onClick={handleGoogleSignIn}
          >
            <img className="h-5 w-5" src={GoogleLogo} alt="" />
            Google
          </Button>
        </div>
      </div>
    </div>
  )
}

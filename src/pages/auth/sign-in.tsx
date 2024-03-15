import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'

import Logo from '@/assets/Logo Workday.svg'
import Robot from '@/assets/Robot.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function SignIn() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
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
          <div className="w-[70%] space-y-2 pb-1">
            <Label htmlFor="email">Email / Matricula:</Label>
            <Input id="email" type="email" placeholder="Email / Matrícula" />
          </div>
          <div className="w-[70%] space-y-2 pb-4">
            <Label htmlFor="password">Senha:</Label>
            <Input id="password" type="password" placeholder="Senha" />
          </div>
          <Button className="w-[70%] bg-teal-800 text-white hover:bg-teal-700">
            Fazer o login
          </Button>
        </div>
      </div>
    </div>
  )
}

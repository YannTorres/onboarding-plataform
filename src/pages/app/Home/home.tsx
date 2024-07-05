import { Star } from 'lucide-react'

import Gordao from '@/assets/gordao.png'
import Logo from '@/assets/Logo Workday.svg'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Boas vindas a nossa plataforma!</h1>
      <p className="mt-1 text-xl font-semibold">
        Aqui você vai encontrar tudo para ajudar o seu dia a dia na Workday.
      </p>
      <div className="grid grid-cols-2 gap-24 pt-16">
        <div>
          <h2 className="text-3xl font-semibold">O que é a Workday:</h2>
          <p className="leading-7">
            A nossa empresa, Workday S.A., é uma das principais empresas de
            investimentos do país, com uma ampla gama de produtos e serviços
            financeiros. Nós nos especializamos em oferecer soluções de
            investimento personalizadas para atender às necessidades individuais
            de nossos clientes. Nossa equipe é composta por profissionais
            altamente qualificados e experientes no setor financeiro. Utilizamos
            tecnologia de ponta para fornecer aos nossos clientes acesso a
            informações em tempo real e análises de mercado profundas.
            Oferecemos uma variedade de produtos de investimento, incluindo
            ações, títulos, fundos mútuos, ETFs, e produtos de renda fixa. Além
            disso, fornecemos serviços de planejamento financeiro e gestão de
            patrimônio para ajudar nossos clientes a alcançar seus objetivos
            financeiros. Estamos comprometidos em fornecer um serviço
            excepcional aos nossos clientes e em manter os mais altos padrões
            éticos em todas as nossas operações. Acreditamos que a educação
            financeira é fundamental para o sucesso do investimento e, portanto,
            oferecemos uma variedade de recursos educacionais para ajudar nossos
            clientes a tomar decisões de investimento informadas. Nosso objetivo
            é ajudar nossos clientes a construir um futuro financeiro seguro e
            próspero. Estamos constantemente buscando maneiras de melhorar
            nossos serviços e de inovar no setor de investimentos.
          </p>
          <div className="flex items-center justify-center pt-4">
            <img
              src={Logo}
              className="h-[193px] w-[386px]"
              alt="Logo da Worday"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold leading-9">Nossa Cultura:</h2>
          <p className="leading-7">
            Nossa cultura é baseada em uma mentalidade de crescimento,
            colaboração e aprendizado contínuo. Valorizamos a diversidade de
            pensamento e encorajamos nossos funcionários a trazer novas ideias e
            perspectivas. Acreditamos que cada membro da nossa equipe desempenha
            um papel crucial em ajudar nossos clientes a alcançar seus objetivos
            financeiros.
          </p>
          <h2 className="pt-8 text-3xl font-semibold leading-9">
            Nossos Valores:
          </h2>
          <div className="mt-1">
            <li className="leading-7">
              Integridade: Nós nos comprometemos a manter os mais altos padrões
              éticos em todas as nossas operações.
            </li>
            <li className="leading-7">
              Transparência: Acreditamos que a transparência é fundamental para
              construir e manter a confiança de nossos clientes.
            </li>
            <li className="leading-7">
              Inovação: Estamos constantemente buscando maneiras inovadoras de
              melhorar nossos serviços e soluções.
            </li>
            <li className="leading-7">
              Educação: Estamos comprometidos em fornecer aos nossos clientes as
              ferramentas e o conhecimento necessários para tomar decisões de
              investimento informadas.
            </li>
            <li className="leading-7">
              Foco no Cliente: Nosso objetivo é sempre colocar as necessidades
              de nossos clientes em primeiro lugar e fornecer um serviço
              excepcional.
            </li>
          </div>
          <h2 className="pt-8 text-3xl font-semibold leading-9">
            Nossa Missão:
          </h2>
          <p className="leading-7">
            Ser reconhecida como a empresa de investimentos mais confiável e
            inovadora, transformando a maneira como as pessoas pensam e
            interagem com os mercados financeiros.
          </p>
        </div>
      </div>
      <div className="mb-10 flex flex-col items-center">
        <h3 className="text-4xl font-bold">Depoimentos</h3>
        <p className="mb-14 mt-1 text-lg font-semibold">
          Depoimentos de funcionários que acreditam na gente!
        </p>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-[1400px]"
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                      <div className="mb-5 flex flex-row gap-3">
                        <img src={Gordao} alt="" />
                        <div>
                          <p>Luiz Felipe Medeiros</p>
                          <div className="flex flex-row">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Molestias, est? Esse veritatis velit modi cumque
                          ipsam dicta possimus quam similique, corporis vel
                          omnis mollitia dolorum neque laboriosam labore quaerat
                          quae.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="mb-10 flex flex-col items-center">
        <h3 className="text-4xl font-bold">Sobre nós</h3>
        <p className="mb-5 mt-1 text-lg font-semibold">
          Um pouco mais sobre os benefícios de trabalhar conosco!
        </p>
        <div className="mt-1">
          <li className="leading-7">
            Acompanhamento gestacional e pós-parto para novos papais e mamães.
          </li>
          <li className="leading-7">
            Até 10% de desconto em cursos de programação Front-End e Back-End,
            mobile, design, UX e metodologias ágeis.
          </li>
          <li className="leading-7">
            Até 25% de desconto na contratação dos seguros Automóvel e
            Residência para você e seus familiares.
          </li>
          <li className="leading-7">
            Até 85% de desconto na compra de medicamentos para você economizar
            sem abrir mão da sua saúde.
          </li>
          <li className="leading-7">
            Bolsas em escolas de idiomas para quem pretende aprender ou
            aperfeiçoar um idioma.
          </li>
          <li className="leading-7">
            Bolsas em universidades para impulsionar seus estudos.
          </li>
          <li className="leading-7">
            Bônus de R$250 a R$15K para comemorar seu aniversário de empresa de
            um jeito inesquecível.
          </li>
          <li className="leading-7">
            Clube de descontos com condições especiais e vários estabelecimentos
            em todo Brasil.
          </li>
        </div>
      </div>
    </div>
  )
}

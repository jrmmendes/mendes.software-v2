import type { Meta, StoryObj } from '@storybook/react'
import { ResumeEntry } from './ResumeEntry'

const meta = {
  title: 'Widgets/ResumeEntry',
  component: ResumeEntry,
} satisfies Meta<typeof ResumeEntry>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Força de Vendas – Natura (via Concrete Solutions/Accenture/Avanade)',
    role: '2021 – Atualmente / Engenheiro de Software (Senior/Consultor)',
    stack: 'React, SingleSPA, PHP, Typescript, Python, NestJS, ScyllaDB, Postgres, MySQL, AthenaDB AWS',
    details: [
      'Colaboração no desenvolvimento dos aplicativos para a Força de Vendas Natura, com suporte e evolução de aplicações legadas e desenho de soluções utilizando microsserviços, microfrontends, APIs REST e GraphQL.',
      'Atuação em todas as frentes do desenvolvimento das aplicações (QA, DevOps, Dados, Arquitetura, Back-end e Front-end).',
      'Contribuição para formação e unificação de diversas equipes com práticas de opensource e documentação.',
    ],
  },
}

export const Voluntariado: Story = {
  args: {
    title: 'Movimento Empresa Júnior - CITi',
    role: '2019 – 2020 – Desenvolvedor',
    stack: 'Python/Django, Node, React, Typescript, Heroku, Digital Ocean',
    details: [
      'Desenvolvimento de software na Empresa Júnior do Centro de Informática da UFPE, com contato direto com clientes e participação em eventos, processos seletivos e mentorias.',
    ],
  },
}

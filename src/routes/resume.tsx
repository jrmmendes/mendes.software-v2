import { createFileRoute, Link as RouterLink } from '@tanstack/react-router'
import { PageLayout, ScrollableCard, Flex, Heading, List, ListItem } from '../components'
import { styled } from '../styles/stitches.config'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})

const BackLink = styled(RouterLink, {
  display: 'inline-flex',
  alignItems: 'center',
  marginBottom: '$md',
  textDecoration: 'none',
  color: '$light',
  fontSize: '$md',
  resetLink: true,
})

const resumeEntries = [
  {
    title: 'Força de Vendas – Natura (via Concrete Solutions/Accenture/Avanade)',
    role: '2021 – Atualmente / Engenheiro de Software (Senior/Consultor)',
    stack: 'React, SingleSPA, PHP, Typescript, Python, NestJS, ScyllaDB, Postgres, MySQL, AthenaDB AWS',
    details: [
      'Colaboração no desenvolvimento dos aplicativos para a Força de Vendas Natura (líderes e gerentes que apoiam as consultoras), com suporte e evolução de aplicações legadas (PHP, Drupal, Node, React, React Native), desenho de soluções utilizando microsserviços, microfrontends, APIs REST e GraphQL, além de processamento de dados com Python e Typescript/NestJS;',
      'Tive a possibilidade de trazer mudanças a nível de organização dos times, com foco nos valores centrais do <a class="link" href="https://agilemanifesto.org" target="_blank"> Manifesto Ágil</a> e práticas de engenharia modernas, atuando em todas as frentes do desenvolvimento das aplicações (QA, DevOps, Dados, Arquitetura, Back-end e Front-end). Também foi possível participar ativamente do go-live de diversas aplicações nos países de atuação da Natura;',
      'Trouxe a cultura de boa documentação para os softwares em funcionamento, bem como práticas de opensource para melhoria da comunicação assíncrona dos times. Tambem contribui para formação e unificação de diversas equipes.',
    ],
  },
  {
    title: 'Plataforma Iônica – FTD (via Concrete Solutions/Accenture)',
    role: '2020 – 2021 – Desenvolvedor Backend (Pleno)',
    stack: 'React, Typescript, Azure, Redis',
    details: [
      'Colaboração no desenvolvimento da <a class="link" href="https://ola.souionica.com.br" target="_blank">Plataforma Iônica</a>, onde pude atuar como desenvolvedor backend utilizando GraphQL, Node e Typescript, além de implementar soluções a partir dos serviços da Azure.',
      'Atuei na implementação de uma autorização sincronizada entre diferentes plataformas educacionais parceiras, utilizando Redis e NodeJS. Isso permitiu que uma funcionalidade de "Logout Global" pudesse ser disponibilizada.',
      'Implementação de lambda functions (via Azure Functions) para apoio a custom policies do ActiveDirectory. Em conjunto com o time de devops, automatizei o CI/CD (Azure Pipelines) o que trouxe melhoria no fluxo de desenvolvimento em aplicações serverless.',
    ],
  },
]

const voluntariadoEntry = {
  title: 'Movimento Empresa Júnior - CITi',
  role: '2019 – 2020 – Desenvolvedor',
  stack: 'Python/Django, Node, React, Typescript, Heroku, Digital Ocean',
  details: [
    'Como desenvolvedor de software no <a class="link" href="https://citi.org.br/" target="_blank">CITi</a> , a Empresa Júnior do Centro de Informática da UFPE, pude estar em contato direto com clientes e por em prática diversas idéias, vendo o efeito pratico de decisões técnicas desde o início da minha carreira. Para além dos projetos, pude participar da organização de eventos da área, processos seletivos, planejamentos estratégicos, eventos do Movimento Empresa Júnior e mentorar pessoas que estavam iniciando na área.',
  ],
}

function ResumePage() {
  return (
    <PageLayout>
      <ScrollableCard>
        <BackLink to="/">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 4 }}>
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Voltar
        </BackLink>
        <Heading level={1} marginTop="md">Experiência</Heading>
        {resumeEntries.map((entry, index) => (
          <ResumeEntry key={index} {...entry} />
        ))}
        <Heading level={1} marginTop="md">Voluntariado</Heading>
        <ResumeEntry {...voluntariadoEntry} />
      </ScrollableCard>
    </PageLayout>
  )
}

function ResumeEntry({ title, role, stack, details }: { title: string; role: string; stack: string; details: string[] }) {
  return (
    <Flex direction="column" css={{ marginTop: '$md' }}>
      <Heading level={2}>{title}</Heading>
      <Flex direction="column" css={{ gap: '$xs' }}>
        <Heading level={3}>{role}</Heading>
        <Heading level={3}>Stack: {stack}</Heading>
      </Flex>
      <List details>
        {details.map((detail, i) => (
          <ListItem key={i} spacing="detail" dangerouslySetInnerHTML={{ __html: detail }} />
        ))}
      </List>
    </Flex>
  )
}

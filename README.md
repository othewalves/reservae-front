# Reservaê

A reserva dos seu livros preferidos ficou mais ágil. Explore o catálogo online, entre na fila de espera e renove seus empréstimos com apenas alguns cliques.

## 🎯 Padrões e Decisões

### ✅ **Feature-based Architecture**

Organização por domínio funcional. Cada pasta em `features/` representa uma área do sistema.

### ✅ **Container/Presenter Pattern**

Separação entre:

- **Presenter (`LoginForm`)** → apenas JSX/estética
- **Container (`LoginContainer`)** → conecta lógica e dados
- **Hook (`useLogin`)** → lógica isolada e testável
- **Schema (`schema.ts`)** → validação centralizada

### ✅ **Design System com ShadCN**

Componentes reutilizáveis em `components/ui`, com consistência visual.

### ✅ **Rotas públicas/privadas separadas**

Pastas `(public)` e `(private)` garantem controle de layout e acesso. Middleware redireciona baseado em autenticação via cookie.

### ✅ **Testabilidade**

Separação clara permite:

- Testes unitários dos hooks e validação
- Testes de interface com `@testing-library/react`

---

## 🔒 Middleware

`middleware.ts` controla o acesso com base nas rotas declaradas em `PUBLIC_ROUTES`, redirecionando usuários não autenticados ou já autenticados quando necessário.

---

## 🚀 Motivação

Mesmo sendo um projeto de estudo, foi adotada uma estrutura pensada para:

- Aprendizado prático de boas práticas de arquitetura
- Facilitar escalabilidade e manutenção
- Servir como **template base para futuros projetos profissionais**
- Mostrar domínio técnico em **organização, clean code e arquitetura moderna**

---

## 🧪 Tecnologias principais

- [Next.js 14+ (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Jest + Testing Library](https://testing-library.co/)

---

## 🧭 Roadmap futuro (sugestão)

- [ ] Internacionalização (i18n)
- [ ] Dark Mode
- [ ] Testes E2E com Cypress ou Playwright
- [ ] Dockerização
- [ ] CI/CD

---

## 🤝 Autor

Desenvolvido por **Matheus Francisco Rodrigues Alves**  
Curso: _Análise e Desenvolvimento de Sistemas – FATEC Mogi das Cruzes_  
Contato: https://www.linkedin.com/in/dev-matheus-alves/

---

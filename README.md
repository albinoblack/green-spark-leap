# Green Energy Calculator

Crie uma landing page premium e responsiva de alta conversão para consultor/licenciado iGreen Energy.

Principais requisitos:
1. Identidade visual dark premium: fundo preto/grafite, branco de contraste, verde elétrico estilo iGreen, gradientes sutis, glows discretos e tipografia moderna (estilo fintech/energy-tech de performance).
2. Header minimalista sticky com logo/identificação e CTA "SIMULAR ECONOMIA" (sem menu de navegação institucional).
3. Hero Section com headline forte sobre conta de luz, subheadline destacando energia sustentável sem placas nem investimento, CTA principal "CALCULAR MINHA ECONOMIA" e micro-benefícios.
4. Funil/Questionário interativo multi-step (em modal premium com indicador de progresso):
   - Etapa 1: Residência ou Empresa
   - Etapa 2: Faixa de valor da conta de energia (com opção manual e cálculo dinâmico de economia potencial de até 20%)
   - Etapa 3: Distribuidora de energia (EDP, Enel, CPFL, Neoenergia, Cemig, Outra)
   - Etapa 4: Cidade e Estado (UF brasileira)
   - Etapa 5: Análise animada de elegibilidade com etapas de verificação e tela de sucesso
   - Captura de Nome e WhatsApp (com máscara brasileira) e aceite
   - Redirecionamento automático para o WhatsApp do consultor com mensagem personalizada pronta baseada nas respostas.
5. Constante configurável para o WhatsApp do consultor (ex: CONSULTANT_WHATSAPP).
6. Seção de Dor/Problema (comparativo entre continuar pagando e verificar economia).
7. Seção Como Funciona em 4 passos simples sem placas/obras.
8. Simulador de Economia independente com slider de R$ 100 a R$ 3.000+ exibindo estimativas por mês, ano e 5 anos.
9. Seção de Quebra de Objeção ("Não precisa instalar placas solares, nada muda na sua instalação").
10. Seção de Números e Autoridade (usinas, distribuidoras, RA1000, GPTW) com dados facilmente editáveis.
11. Seção de Argumento Financeiro ("dinheiro que não volta").
12. Seção do Consultor com placeholders profissionais configuráveis.
13. Seção de Depoimentos com placeholders identificados para prova social real.
14. FAQ em accordion com as principais dúvidas e respostas claras.
15. CTA Final com visual marcante e CTA fixo inferior (sticky) para mobile com ícone de raio.
16. Estrutura centralizada de eventos de tracking/analytics (PageView, StartQuiz, QuizSteps, Lead, WhatsAppClick, SimulatorInteraction).
17. Copy cuidadoso com termos de conformidade ("economia potencial", "até 20%", "estimativa").

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://green-spark-leap.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5b5a4065-bdbd-4e85-8368-41a54597fc9b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

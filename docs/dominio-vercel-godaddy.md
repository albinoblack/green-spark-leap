# Como conectar solucaoigreen.com.br ao site

Esta branch prepara os metadados do site para `https://www.solucaoigreen.com.br/`, mas **não conecta o domínio por si só**. Faça os passos abaixo apenas depois de autorizar a publicação e confirmar que está no projeto Vercel correto. Não é preciso compartilhar a senha da GoDaddy; o titular pode executar os passos na própria conta ou em uma sessão de trabalho supervisionada.

## Na Vercel

1. Abra o projeto que publica `green-spark-leap.vercel.app` e vá a **Settings > Domains**.
2. Adicione `www.solucaoigreen.com.br`. Copie **o valor exato do CNAME exibido pela Vercel nesse projeto**. Não use um valor genérico encontrado em outro tutorial.
3. Recomendado: adicione também `solucaoigreen.com.br` e configure o redirecionamento permanente para `www.solucaoigreen.com.br`. Anote o valor do registro da raiz (`@`) mostrado pela Vercel para esse domínio; ele pode ser diferente de exemplos genéricos.

## Na GoDaddy

1. Confirme primeiro se os **servidores DNS (nameservers)** do domínio são gerenciados pela GoDaddy. Se estiverem em outro provedor, os registros devem ser editados lá. Não altere os nameservers como atalho.
2. Abra **Meus produtos > Domínios > solucaoigreen.com.br > DNS / Gerenciar DNS**. Antes de alterar algo, confira e registre os registros existentes, principalmente `www` e `@`. Verifique se `www` já é CNAME ou se existe um registro conflitante. Não exclua nada sem entender para onde aponta.
3. Crie ou edite **somente** o CNAME de nome/host `www`, usando no campo de destino o valor exato copiado da Vercel. Se houver conflito, revise antes de substituir o registro existente.
4. Se optou pelo domínio sem `www`, crie ou edite o registro de `@` conforme o tipo e o valor **mostrados pela Vercel** para o domínio raiz. Verifique primeiro os registros existentes da raiz.
5. Não mexa nos registros de e-mail **MX, SPF, DKIM ou DMARC**, nem em outros registros não relacionados ao site.

## Checagem final

- Aguarde a propagação DNS e confirme em **Settings > Domains** que os dois domínios aparecem como válidos e que o certificado HTTPS foi emitido.
- Acesse `https://www.solucaoigreen.com.br/` e confira se o site carrega com cadeado, imagens, vídeo e botões.
- Acesse `https://solucaoigreen.com.br/` e confira se redireciona para a versão com `www` via HTTPS.
- Confira a resolução DNS de `www` e `@` com uma ferramenta de consulta DNS ou `nslookup` e compare com os valores informados pela Vercel.

Referências: [Vercel: configurar domínio](https://vercel.com/docs/domains/set-up-custom-domain), [Vercel: redirecionar domínio](https://vercel.com/docs/domains/working-with-domains/deploying-and-redirecting), [GoDaddy: gerenciar DNS](https://www.godaddy.com/pt-br/help/gerenciar-os-registros-dns-680).

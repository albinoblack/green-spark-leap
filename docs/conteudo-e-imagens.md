# Conteúdo e imagens dos produtos

Os quatro cards têm placeholders identificados pelo nome do produto. Ainda não há fotos finais; nenhum placeholder representa um produto real. Para instalar as imagens, coloque arquivos WebP no caminho indicado e atualize apenas `imageSrc` da solução correspondente em `src/lib/site-config.ts` para o mesmo caminho. O campo `suggestedImagePath` documenta o destino sugerido.

| Produto | Arquivo sugerido |
| --- | --- |
| Conexão Green | `public/images/products/conexao-green.webp` |
| Energia solar com placas | `public/images/products/energia-solar-placas.webp` |
| iGreen Telecom | `public/images/products/igreen-telecom.webp` |
| Seguro veicular | `public/images/products/seguro-veicular.webp` |

Preparar cada imagem em proporção **4:3**, sugeridos **1200 × 900 px**, WebP otimizado (idealmente até cerca de 250 KB por arquivo). Verificar autorização de uso e se cada foto mostra de fato a respectiva solução. O card aplica `object-cover`; manter o elemento principal centralizado para evitar cortes.

Fontes de conteúdo: os links de adesão/cotação, contato, foto e vídeo vieram dos materiais fornecidos pelo cliente e já estavam no projeto. Descrições gerais de [Conexão Green, soluções com placas, Telecom, seguro e licenciamento](https://www.igreenenergy.com.br/) foram conferidas no site oficial da iGreen. A economia de até 20%, mais de 1.000 usinas e mais de 30 distribuidoras também são informadas pela iGreen; os números podem mudar. Não foi confirmada uma taxa de adesão universal, então essa promessa foi retirada dos novos textos. O selo RA1000 foi removido porque a [página atual da empresa no Reclame Aqui](https://www.reclameaqui.com.br/empresa/igreen-energy/) exibia reputação “Ótima” na consulta, não o selo RA1000. A certificação GPTW precisa de confirmação de validade atual antes de voltar como selo. Requisitos e condições comerciais do licenciamento, elegibilidade por região e resultados de consultores devem ser confirmados com Laudemir/iGreen antes de publicar detalhes.

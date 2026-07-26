# Bio site da Bruna Azeredo — versão estática

Projeto sem dependências e pronto para publicar no GitHub/Vercel.

## Publicação

1. Envie todos os arquivos desta pasta para um repositório GitHub.
2. Importe o repositório na Vercel.
3. Em **Framework Preset**, selecione **Other**.
4. Não é necessário comando de build.
5. O diretório de saída é a raiz do projeto.

## Ajustes obrigatórios antes da publicação

Abra `index.html` e altere:

- `CONFIG.whatsapp`: número real com DDI + DDD, somente números.
- Links do Instagram.
- CRN no rodapé.
- Nomes e descrições dos serviços.
- Links individuais de checkout, formulário ou agenda, caso existam.

## Usar no domínio existente

Para publicar em `nutribrunaazeredo.com.br/comece`, o ideal é integrar esta página ao repositório atual do site. Se o projeto atual for React/Next/Vite, use este layout como nova rota e mova os arquivos da pasta `assets` para a área pública do projeto.

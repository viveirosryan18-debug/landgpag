# PASSE — Pack de estudos

Página de vendas responsiva em HTML, CSS e JavaScript, com Vite.

## Desenvolvimento

- `npm ci`
- `npm run dev`
- `npm run build` gera a versão de produção em `dist`.

## Pagamento

Defina `VITE_CHECKOUT_URL` no ambiente de publicação com a URL HTTPS pública do checkout e gere uma nova versão. Essa variável é pública e não deve conter segredos. Enquanto não houver uma URL válida, o botão de compra informa que o pagamento ainda não está disponível; não simula pedidos ou cobranças.

O processamento do pagamento e o envio do PDF precisam ser realizados pelo serviço de checkout configurado.

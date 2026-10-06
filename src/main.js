const dialog = document.querySelector('#checkout-dialog');
const checkoutUrl = import.meta.env.VITE_CHECKOUT_URL;

document.querySelector('#checkout').addEventListener('click', () => {
  if (checkoutUrl) {
    try {
      const destination = new URL(checkoutUrl);
      if (destination.protocol === 'https:') {
        window.location.assign(destination.href);
        return;
      }
    } catch {
      // A configuração inválida recebe o mesmo aviso de compra indisponível.
    }
  }
  dialog.showModal();
});

document.querySelectorAll('.dialog-close, .dialog-back').forEach((button) => {
  button.addEventListener('click', () => dialog.close());
});
dialog.addEventListener('click', (event) => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});

// ==========================================
// LÓGICA DE GALERÍA INTERACTIVA DE FOTOS
// ==========================================
function initProductGallery() {
  const mainPhoto = document.getElementById('main-photo') as HTMLImageElement | null;
  const counterEl = document.getElementById('current-photo-num');
  const thumbs = Array.from(document.querySelectorAll('.thumb-btn')) as HTMLButtonElement[];
  const prevBtn = document.getElementById('arrow-prev');
  const nextBtn = document.getElementById('arrow-next');

  if (!mainPhoto || thumbs.length === 0) return;

  let currentIndex = 0;

  function setPhoto(index: number) {
    if (!mainPhoto || thumbs.length === 0) return;

    if (index < 0) index = thumbs.length - 1;
    if (index >= thumbs.length) index = 0;

    currentIndex = index;
    const targetThumb = thumbs[currentIndex];
    const newSrc = targetThumb.getAttribute('data-src') || '';

    mainPhoto.style.opacity = '0.3';
    mainPhoto.style.transform = 'scale(0.98)';

    setTimeout(() => {
      mainPhoto.src = newSrc;
      mainPhoto.style.opacity = '1';
      mainPhoto.style.transform = 'scale(1)';
    }, 120);

    thumbs.forEach((th, i) => {
      if (i === currentIndex) {
        th.classList.add('active');
        th.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        th.classList.remove('active');
      }
    });

    if (counterEl) {
      counterEl.textContent = (currentIndex + 1).toString();
    }
  }

  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => setPhoto(idx));
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => setPhoto(currentIndex - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => setPhoto(currentIndex + 1));
  }
}

// ==========================================
// SELECTOR DE CANTIDAD Y CARRITO
// ==========================================
function initPurchaseActions() {
  const minusBtn = document.getElementById('qty-minus');
  const plusBtn = document.getElementById('qty-plus');
  const qtyInput = document.getElementById('qty-input') as HTMLInputElement | null;
  const addCartBtn = document.getElementById('btn-add-to-cart') as HTMLButtonElement | null;
  const waBtn = document.getElementById('btn-wa-order') as HTMLAnchorElement | null;

  function getQty(): number {
    return parseInt(qtyInput ? qtyInput.value : '1', 10) || 1;
  }

  function updateQty(val: number) {
    if (!qtyInput) return;
    const cleanVal = Math.max(1, Math.min(99, val));
    qtyInput.value = cleanVal.toString();

    if (waBtn && addCartBtn) {
      const title = addCartBtn.getAttribute('data-title') || '';
      const price = addCartBtn.getAttribute('data-price') || '';
      const newText = encodeURIComponent(
        `👋 ¡Hola LOokiero! Me interesa comprar ${cleanVal} unidad(es) de: *${title}* (${price} c/u). ¿Tienen disponibilidad para envío?`
      );
      waBtn.href = `https://wa.me/51927123997?text=${newText}`;
    }
  }

  if (minusBtn) {
    minusBtn.addEventListener('click', () => updateQty(getQty() - 1));
  }
  if (plusBtn) {
    plusBtn.addEventListener('click', () => updateQty(getQty() + 1));
  }

  if (addCartBtn) {
    addCartBtn.addEventListener('click', () => {
      const title = addCartBtn.getAttribute('data-title') || '';
      const price = addCartBtn.getAttribute('data-price') || '';
      const image = addCartBtn.getAttribute('data-image') || '';
      const quantityToAdd = getQty();

      try {
        const cart = JSON.parse(localStorage.getItem('lookiero_cart') || '[]');
        const existingIndex = cart.findIndex((item: any) => item.title === title);

        if (existingIndex > -1) {
          cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + quantityToAdd;
        } else {
          cart.push({ title, price, image, quantity: quantityToAdd });
        }

        localStorage.setItem('lookiero_cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('cart-updated'));

        // Feedback en el botón
        const originalText = addCartBtn.innerHTML;
        addCartBtn.innerHTML = `<i class='bx bx-check'></i> ¡Agregado!`;
        addCartBtn.style.background = '#16a34a';

        // Disparar toast
        const toastContainer = document.getElementById('toast-container');
        if (toastContainer) {
          const toast = document.createElement('div');
          toast.className = 'custom-toast';
          toast.innerHTML = `<i class='bx bx-check-circle'></i> ¡${quantityToAdd}x "${title}" agregado al carrito! 🎉`;
          toastContainer.appendChild(toast);
          setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 400);
          }, 2800);
        }

        setTimeout(() => {
          addCartBtn.innerHTML = originalText;
          addCartBtn.style.background = '';
        }, 1600);
      } catch (err) {
        console.error(err);
      }
    });
  }
}

// Ejecutar al cargar el DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initProductGallery();
    initPurchaseActions();
  });
} else {
  initProductGallery();
  initPurchaseActions();
}

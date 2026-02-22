// ===== SCROLL REVEAL ANIMATIONS =====
const revealElements = document.querySelectorAll('[data-scroll-reveal]');

const revealOnScroll = () => {
  revealElements.forEach((element, index) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    
    // Elemento visible cuando está en el viewport
    if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
      setTimeout(() => {
        element.classList.add('revealed');
      }, index * 100); // Delay escalonado
    }
  });
};

// ===== PARALLAX EFFECT =====
const parallaxElements = document.querySelectorAll('[data-speed]');

const parallaxScroll = () => {
  parallaxElements.forEach(element => {
    const speed = parseFloat(element.dataset.speed) || 0.5;
    const yPos = -(window.scrollY * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
};

// ===== ZOOM EFFECT ON SCROLL =====
const zoomElements = document.querySelectorAll('[data-zoom]');

const zoomOnScroll = () => {
  zoomElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const windowCenter = window.innerHeight / 2;
    const distance = Math.abs(elementCenter - windowCenter);
    const maxDistance = window.innerHeight;
    
    // Calcular escala basada en la distancia al centro
    const scale = Math.max(0.8, 1 - (distance / maxDistance) * 0.3);
    element.style.transform = `scale(${scale})`;
  });
};

// ===== SEQUENCE ANIMATION =====
const sequenceElements = document.querySelectorAll('[data-sequence]');

const sequenceScroll = () => {
  sequenceElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const scrollPercent = Math.max(0, Math.min(1, 1 - (rect.top / window.innerHeight)));
    
    // Aplicar diferentes efectos basados en el porcentaje de scroll
    element.style.opacity = scrollPercent;
    element.style.transform = `scale(${0.5 + scrollPercent * 0.5})`;
  });
};

// ===== REVEAL TEXT LETTER BY LETTER =====
const revealTexts = document.querySelectorAll('.reveal-text');

revealTexts.forEach(text => {
  const content = text.textContent;
  text.textContent = '';
  text.setAttribute('data-original-text', content);
  
  // Crear spans para cada palabra
  content.split('<br>').forEach((line, lineIndex) => {
    if (lineIndex > 0) {
      text.appendChild(document.createElement('br'));
    }
    line.trim().split(' ').forEach((word, wordIndex) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.classList.add('word');
      span.style.animationDelay = `${(lineIndex * 3 + wordIndex) * 0.1}s`;
      text.appendChild(span);
    });
  });
});

const animateRevealText = () => {
  const parallaxSections = document.querySelectorAll('.parallax-text-section');
  
  parallaxSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
      section.querySelectorAll('.word').forEach(word => {
        word.classList.add('visible');
      });
    }
  });
};

// ===== COLOR PICKER INTERACTION =====
const colorOptions = document.querySelectorAll('.color-option');
const colorSection = document.querySelector('.color-section');

colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    // Remover selección previa
    colorOptions.forEach(opt => opt.classList.remove('selected'));
    // Agregar selección actual
    option.classList.add('selected');
    
    // Cambiar color de fondo de la sección (opcional)
    const color = option.dataset.color;
    colorSection.setAttribute('data-active-color', color);
  });
});

// ===== SMOOTH SCROLL FOR INTERNAL LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== SCROLL EVENT LISTENER =====
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      revealOnScroll();
      parallaxScroll();
      zoomOnScroll();
      sequenceScroll();
      animateRevealText();
      updateScrollytelling();
      ticking = false;
    });
    ticking = true;
  }
});

// ===== CAROUSEL VERSION 1 (Con dots + botones estilo Apple) =====
const carouselTrack = document.querySelector('.carousel-track');
const carouselSlides = Array.from(document.querySelectorAll('.carousel-slide'));
const dotsContainerApple = document.querySelector('.carousel-dots-apple');
const navBtnPrev = document.querySelector('.nav-btn-prev');
const navBtnNext = document.querySelector('.nav-btn-next');
const carouselV1Container = document.querySelector('.carousel-v1');

let currentSlide = 0;
let isAnimating = false;

// Crear dots de navegación estilo Apple
carouselSlides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.classList.add('carousel-dot-apple');
  dot.setAttribute('aria-label', `Ir a slide ${index + 1}`);
  if (index === 0) dot.classList.add('active');
  
  dot.addEventListener('click', () => {
    if (!isAnimating) {
      goToSlide(index);
    }
  });
  
  dotsContainerApple.appendChild(dot);
});

const dotsApple = Array.from(document.querySelectorAll('.carousel-dot-apple'));

// Función para ir a un slide específico
const goToSlide = (index) => {
  if (isAnimating) return;
  isAnimating = true;
  
  const slideWidth = carouselSlides[0].offsetWidth;
  const gap = 30; // Gap entre slides
  carouselTrack.style.transform = `translateX(-${index * (slideWidth + gap)}px)`;
  
  // Actualizar dots
  dotsApple.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  
  // Actualizar slides activos
  carouselSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  
  currentSlide = index;
  
  // Actualizar estado de botones
  updateButtonStates();
  
  setTimeout(() => {
    isAnimating = false;
  }, 600);
};

// Navegación con botones
navBtnPrev.addEventListener('click', () => {
  if (currentSlide > 0 && !isAnimating) {
    goToSlide(currentSlide - 1);
  }
});

navBtnNext.addEventListener('click', () => {
  if (currentSlide < carouselSlides.length - 1 && !isAnimating) {
    goToSlide(currentSlide + 1);
  }
});

// Actualizar estado de botones
const updateButtonStates = () => {
  navBtnPrev.style.opacity = currentSlide === 0 ? '0.3' : '1';
  navBtnPrev.disabled = currentSlide === 0;
  
  navBtnNext.style.opacity = currentSlide === carouselSlides.length - 1 ? '0.3' : '1';
  navBtnNext.disabled = currentSlide === carouselSlides.length - 1;
};

// Navegación con teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && currentSlide > 0 && !isAnimating) {
    goToSlide(currentSlide - 1);
  } else if (e.key === 'ArrowRight' && currentSlide < carouselSlides.length - 1 && !isAnimating) {
    goToSlide(currentSlide + 1);
  }
});

// Touch/Swipe support para V1
let touchStartX = 0;
let touchEndX = 0;

carouselTrack.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

carouselTrack.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

const handleSwipe = () => {
  const swipeThreshold = 50;
  
  if (touchStartX - touchEndX > swipeThreshold && currentSlide < carouselSlides.length - 1) {
    // Swipe left - next slide
    goToSlide(currentSlide + 1);
  } else if (touchEndX - touchStartX > swipeThreshold && currentSlide > 0) {
    // Swipe right - prev slide
    goToSlide(currentSlide - 1);
  }
};

// Soporte para Trackpad/Touchpad (scroll horizontal) V1
let scrollTimeout;
carouselV1Container.addEventListener('wheel', (e) => {
  // Detectar scroll horizontal (trackpad)
  if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
    e.preventDefault();
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (e.deltaX > 30 && currentSlide < carouselSlides.length - 1 && !isAnimating) {
        goToSlide(currentSlide + 1);
      } else if (e.deltaX < -30 && currentSlide > 0 && !isAnimating) {
        goToSlide(currentSlide - 1);
      }
    }, 50);
  }
}, { passive: false });

// Auto-play opcional (comentado por defecto)
/*
let autoplayInterval;
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    if (currentSlide < carouselSlides.length - 1) {
      goToSlide(currentSlide + 1);
    } else {
      goToSlide(0);
    }
  }, 4000);
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};

// Iniciar autoplay
startAutoplay();

// Pausar en hover
document.querySelector('.carousel-container').addEventListener('mouseenter', stopAutoplay);
document.querySelector('.carousel-container').addEventListener('mouseleave', startAutoplay);
*/

// Inicializar estado de botones V1
updateButtonStates();
// Activar primer slide V1
carouselSlides[0].classList.add('active');

// ===== CAROUSEL VERSION 2 (Estilo Apple con controles en esquina) =====
const carouselTrackV2 = document.querySelector('.carousel-track-v2');
const carouselSlidesV2 = Array.from(document.querySelectorAll('.carousel-slide-v2'));
const prevBtnV2 = document.querySelector('.carousel-btn-prev-v2');
const nextBtnV2 = document.querySelector('.carousel-btn-next-v2');
const currentSlideCounter = document.querySelector('.current-slide-v2');
const totalSlidesCounter = document.querySelector('.total-slides-v2');
const progressFill = document.querySelector('.carousel-progress-fill');
const carouselV2Container = document.querySelector('.carousel-track-container-v2');

let currentSlideV2 = 0;
let isAnimatingV2 = false;

// Actualizar contador total
totalSlidesCounter.textContent = carouselSlidesV2.length;

// Función para ir a un slide específico V2
const goToSlideV2 = (index) => {
  if (isAnimatingV2 || index < 0 || index >= carouselSlidesV2.length) return;
  isAnimatingV2 = true;
  
  const slideWidth = carouselSlidesV2[0].offsetWidth;
  const gap = 40;
  carouselTrackV2.style.transform = `translateX(-${index * (slideWidth + gap)}px)`;
  
  // Actualizar slides activos
  carouselSlidesV2.forEach((slide, i) => {
    slide.classList.toggle('active-v2', i === index);
  });
  
  currentSlideV2 = index;
  
  // Actualizar contador
  currentSlideCounter.textContent = index + 1;
  
  // Actualizar barra de progreso
  const progress = ((index + 1) / carouselSlidesV2.length) * 100;
  progressFill.style.width = `${progress}%`;
  
  // Actualizar estado de botones
  updateButtonStatesV2();
  
  setTimeout(() => {
    isAnimatingV2 = false;
  }, 800);
};

// Navegación con botones V2
prevBtnV2.addEventListener('click', () => {
  if (currentSlideV2 > 0 && !isAnimatingV2) {
    goToSlideV2(currentSlideV2 - 1);
  }
});

nextBtnV2.addEventListener('click', () => {
  if (currentSlideV2 < carouselSlidesV2.length - 1 && !isAnimatingV2) {
    goToSlideV2(currentSlideV2 + 1);
  }
});

// Actualizar estado de botones V2
const updateButtonStatesV2 = () => {
  prevBtnV2.style.opacity = currentSlideV2 === 0 ? '0.3' : '1';
  prevBtnV2.disabled = currentSlideV2 === 0;
  
  nextBtnV2.style.opacity = currentSlideV2 === carouselSlidesV2.length - 1 ? '0.3' : '1';
  nextBtnV2.disabled = currentSlideV2 === carouselSlidesV2.length - 1;
};

// Touch/Swipe support para V2
let touchStartXV2 = 0;
let touchEndXV2 = 0;

carouselTrackV2.addEventListener('touchstart', (e) => {
  touchStartXV2 = e.changedTouches[0].screenX;
}, { passive: true });

carouselTrackV2.addEventListener('touchend', (e) => {
  touchEndXV2 = e.changedTouches[0].screenX;
  handleSwipeV2();
}, { passive: true });

const handleSwipeV2 = () => {
  const swipeThreshold = 50;
  
  if (touchStartXV2 - touchEndXV2 > swipeThreshold) {
    goToSlideV2(currentSlideV2 + 1);
  } else if (touchEndXV2 - touchStartXV2 > swipeThreshold) {
    goToSlideV2(currentSlideV2 - 1);
  }
};

// Soporte mejorado para Trackpad/Touchpad V2
let scrollTimeoutV2;
let accumulatedDeltaX = 0;

carouselV2Container.addEventListener('wheel', (e) => {
  const deltaX = e.deltaX;
  const deltaY = e.deltaY;
  
  // Detectar si es scroll horizontal (común en trackpads)
  if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
    e.preventDefault();
    
    // Acumular delta para hacer scrolling más natural
    accumulatedDeltaX += deltaX;
    
    clearTimeout(scrollTimeoutV2);
    scrollTimeoutV2 = setTimeout(() => {
      if (Math.abs(accumulatedDeltaX) > 50 && !isAnimatingV2) {
        if (accumulatedDeltaX > 0 && currentSlideV2 < carouselSlidesV2.length - 1) {
          goToSlideV2(currentSlideV2 + 1);
        } else if (accumulatedDeltaX < 0 && currentSlideV2 > 0) {
          goToSlideV2(currentSlideV2 - 1);
        }
      }
      accumulatedDeltaX = 0;
    }, 150);
  }
}, { passive: false });

// Navegación con teclado V2 (solo cuando está en viewport)
const handleKeyboardV2 = (e) => {
  const v2Section = document.querySelector('#carousel-v2');
  const rect = v2Section.getBoundingClientRect();
  const isInView = rect.top < window.innerHeight && rect.bottom > 0;
  
  if (isInView) {
    if (e.key === 'ArrowLeft' && currentSlideV2 > 0 && !isAnimatingV2) {
      goToSlideV2(currentSlideV2 - 1);
    } else if (e.key === 'ArrowRight' && currentSlideV2 < carouselSlidesV2.length - 1 && !isAnimatingV2) {
      goToSlideV2(currentSlideV2 + 1);
    }
  }
};

document.addEventListener('keydown', handleKeyboardV2);

// Inicializar V2
updateButtonStatesV2();
carouselSlidesV2[0].classList.add('active-v2');
progressFill.style.width = `${(1 / carouselSlidesV2.length) * 100}%`;

// ===== SCROLLYTELLING (iPhone Air Style) =====
const storySteps = document.querySelectorAll('.story-step');
const scrollytellingDevice = document.querySelector('.scrollytelling-device');

const updateScrollytelling = () => {
  const scrollySection = document.querySelector('.scrollytelling-section');
  if (!scrollySection) return;
  
  const sectionTop = scrollySection.offsetTop;
  const sectionHeight = scrollySection.offsetHeight;
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  
  storySteps.forEach((step, index) => {
    const stepTop = sectionTop + (index * windowHeight);
    const stepBottom = stepTop + windowHeight;
    const stepCenter = stepTop + (windowHeight / 2);
    
    // Activar step cuando está en el centro del viewport
    if (scrollPosition + (windowHeight / 2) >= stepTop && 
        scrollPosition + (windowHeight / 2) < stepBottom) {
      step.classList.add('active');
      
      // Aplicar transformaciones al dispositivo según el step
      if (scrollytellingDevice) {
        const stepProgress = (scrollPosition - stepTop) / windowHeight;
        applyDeviceTransform(index + 1, stepProgress);
      }
    } else {
      step.classList.remove('active');
    }
  });
};

const applyDeviceTransform = (stepNumber, progress) => {
  // Transformaciones personalizadas por step
  switch(stepNumber) {
    case 1:
      scrollytellingDevice.style.transform = `scale(${1 + progress * 0.1})`;
      break;
    case 2:
      scrollytellingDevice.style.transform = `scale(${1.1 + progress * 0.05}) rotate(${progress * 2}deg)`;
      break;
    case 3:
      scrollytellingDevice.style.transform = `scale(${0.95 + progress * 0.1}) rotate(${-3 + progress * 3}deg)`;
      break;
    case 4:
      scrollytellingDevice.style.transform = `scale(${1.2 + progress * 0.05}) rotate(${5 - progress * 2}deg)`;
      break;
    case 5:
      scrollytellingDevice.style.transform = `scale(${1.3 + progress * 0.1})`;
      break;
  }
};

// ===== INITIAL LOAD =====
window.addEventListener('load', () => {
  revealOnScroll();
  animateRevealText();
  updateScrollytelling();
});

// ===== CURSOR FOLLOW EFFECT (OPCIONAL) =====
let cursor = null;

if (window.innerWidth > 768) {
  cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  
  // Agregar efecto hover a elementos interactivos
  const interactiveElements = document.querySelectorAll('button, a, .color-option');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-hover');
    });
    
    element.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover');
    });
  });
}
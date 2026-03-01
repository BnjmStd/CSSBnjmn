document.addEventListerner("DOMContentLoaded", () => {
  const totalSlides = 7;

  let currentSlide = 1;
  let isAnimating = false;
  let scrollAllowed = true;
  let lastScrollTime = 0;

  const slideTitles = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
  ];

  const slideDescriptions = [
    "Description for Slide 1",
    "Description for Slide 2",
    "Description for Slide 3",
    "Description for Slide 4",
    "Description for Slide 5",
    "Description for Slide 6",
    "Description for Slide 7",
  ];

  function createSlide(slideNumber, direction) {
    const $slide = document.createElement("div");
    $slide.className("slide");

    const $slideBgImg = document.createElement("div");
    $slideBgImg.className = "slide-bg-img";

    const $img = document.createElement("img");
    $img.src = `./img/slide${slideNumber}.jpg`;

    $slideBgImg.appendChild($img);
    $slide.appendChild($slideBgImg);

    if (direction === "down") {
      $slideBgImg.style.clipPath =
        "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";
    } else if (direction === "up") {
      $slideBgImg.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
    }

    return $slide;
  }

  function createMainImagewrapper(slideNumber, direction) {
    const $wrapper = document.createElement("div");

    $wrapper.className = "slide-main-img-wrapper";
    const $image = document.createElement("img");

    $image.src = `./img/slide${slideNumber}.jpg`;
    $image.alt = `Slide ${slideNumber}`;
    $wrapper.appendChild($image);

    if (direction === "down") {
      $wrapper.style.clipPath = "polygon(0 0%, 100% 0%, 100% 0%, 0 0%)";
    } else {
      $wrapper.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";
    }
    return $wrapper;
  }

  function createTextElements() {
    const $newTitle = document.createElement("h1");

    $newTitle.textContent = slideTitles[currentSlide - 1];

    gsap.set($newTitle, {
      y: direction === "down" ? "50" : "-50",
    });

    const $newDescription = document.createElement("p");
    $newDescription.textContent = slideDescriptions[currentSlide - 1];
    gsap.set($newDescription, {
      y: direction === "down" ? "20" : "-20",
    });

    const $newCounter = document.createElement("p");

    $newCounter.textContent = slideNumber;

    gsap.set($newCounter, {
      y: direction === "down" ? "18" : "-18",
    });

    return {
      $newTitle,
      $newDescription,
      $newCounter,
    };
  }

  function animateSlide(direction) {
    if (isAnimating || !scrollAllowed) return;
    isAnimating = true;
    scrollAllowed = false;

    const slider = document.querySelector(".slider");
    const currentSlideElement = document.querySelector(`.slide`);
    const mainImageContainer = document.querySelector(".slide-main-img");

    const currentMainWrapper = document.querySelector(
      ".slide-main-img-wrapper",
    );

    const titleContainer = document.querySelector(".slide-title");
    const descriptionContainer = document.querySelector(".slide-description");
    const counterContainer = document.querySelector(".count");

    const currentTitle = titleContainer.querySelector("h1");
    const currentDescription = descriptionContainer.querySelector("p");
    const currentCounter = counterContainer.querySelector("p");

    if (direction === "down") {
      currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
    } else if (direction === "up") {
      currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
    }

    const newSlide = createSlide(currentSlide, direction);
    const newMainImageWrapper = createMainImagewrapper(currentSlide, direction);
    const { $newTitle, $newDescription, $newCounter } = createTextElements(
      currentSlide,
      direction,
    );

    slider.appendChild(newSlide);
    mainImageContainer.appendChild(newMainImageWrapper);
    titleContainer.appendChild($newTitle);
    descriptionContainer.appendChild($newDescription);
    counterContainer.appendChild($newCounter);

    gsap.set(newMainImageWrapper.querySelector("img"), {
      y: direction === "down" ? "-50%" : "50%",
    });

    const tl = gsap.timeline({
      onComplete: () => {
        [
          currentCounter,
          currentDescription,
          currentTitle,
          currentMainWrapper,
          currentSlideElement,
        ].forEach((el) => {
          el?.remove();
        });
        isAnimating = false;
        setTimeout(() => {
          scrollAllowed = true;
        }, 1000);
        lastScrollTime = Date.now();
      },
    });

    tl.to(
      newSlide.querySelector(".slide-bg-img"),
      {
        clipPath:
          direction === "down"
            ? "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
            : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
        ease: CustomEase.create(".", ".87, 0, .13, 1"),
      },
      0,
    )
      .to(
        currentTitle,
        {
          y: direction === "down" ? "-50" : "50",
          duration: 1.25,
          ease: "power2.inOut",
        },
        0,
      )

      .to(
        $newTitle,
        {
          y: 0,
          duration: 1.25,
          ease: "power2.inOut",
        },
        0,
      )
      .to(
        currentDescription,
        {
          y: direction === "down" ? "-20" : "20",
          duration: 1.25,
          ease: "power2.inOut",
        },
        0,
      )
      .to(
        $newDescription,
        {
          y: 0,
          duration: 1.25,
          ease: "power2.inOut",
        },
        0,
      )
      .to(
        currentCounter,
        {
          y: direction === "down" ? "-18" : "18",
          duration: 1.25,
          ease: "power2.inOut",
        },
        0,
      )
      .to(
        $newCounter,
        {
          y: 0,
          duration: 1.25,
          ease: "power2.inOut",
        },
        0,
      );
  }

  function handleScroll(direction) {
    const now = Date.now();

    if (isAnimating || !scrollAllowed) {
      return;
    }

    if (now - lastScrollTime < 1000) {
      return;
    }

    lastScrollTime = now;
    animateSlide(direction);
  }

  document.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();

      const direction = event.deltaY > 0 ? "down" : "up";

      handleScroll(direction);
    },
    { passive: false },
  );

  let touchStartY = 0;
  let istouchActive = false;

  document.addEventListener(
    "touchstart",
    (event) => {
      touchStartY = event.touches[0].clientY;
      istouchActive = true;
    },
    {
      passive: false,
    },
  );

  window.addEventListener(
    "touchmove",
    (event) => {
      event.preventDefault();
      if (!istouchActive || isAnimating || !scrollAllowed) return;

      const touchCurrentY = event.touches[0].clientY;
      const different = touchStartY - touchCurrentY;

      if (Math.abs(different) > 10) {
        istouchActive = false; // Prevent further touch events until next touchstart
        const direction = different > 0 ? "down" : "up";
        handleScroll(direction);
        istouchActive = false; // Reset touch state after handling scroll
      }
    },
    {
      passive: false,
    },
  );
  document.addEventListener(
    "touchend",
    () => {
      istouchActive = false; // Reset touch state on touch end
    },
    {
      passive: false,
    },
  );
});

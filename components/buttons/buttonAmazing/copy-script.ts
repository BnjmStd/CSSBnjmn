const button = document.querySelector<HTMLAnchorElement>('a');

button?.addEventListener('mousemove', (e: MouseEvent) => {
    const x = e.pageX - button.offsetLeft;
    const y = e.pageY - button.offsetTop;

    button.style.setProperty('--x', `${x}px`);
    button.style.setProperty('--y', `${y}px`);
});
const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"]

const space1 = {
    size: '1px',
    selector: '.space1',
    totalStart: 300,
    duration: '8s'
}

const space2 = {
    size: '2px',
    selector: '.space2',
    totalStart: 100,
    duration: '8s'
}
const space3 = {
    size: '3px',
    selector: '.space3',
    totalStart: 100,
    duration: '4s'
}

const generateSpaceLayer = ({ size, totalStart, duration, selector }) => {
    const layer = [];
    for (let i = 0; i < totalStart; i++) {
        const color =  COLORS[Math.floor(Math.random() * COLORS.length)]
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color},
            ${x}vw ${y + 100}vh 0 ${color}`);
    }

    const container = document.querySelector(selector);
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);
};

generateSpaceLayer(space1);
generateSpaceLayer(space2);
generateSpaceLayer(space3);
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'loading_library');

function ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// Data Structure
const animations = [
    // GROUP A: GEOMETRIC
    {
        id: 'geo-1',
        folder: 'geometric-morphing',
        name: 'Morphing Shape',
        category: 'Geometric',
        html: '<div class="ld-geo-1"></div>',
        css: '.ld-geo-1 { width: 40px; height: 40px; background: var(--primary); animation: ld-geo-1-anim 2s infinite ease-in-out; }\n@keyframes ld-geo-1-anim { 0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); border-radius: 0; background: var(--primary); } 50% { transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); border-radius: 50%; background: var(--secondary); } 100% { transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); border-radius: 0; background: var(--primary); } }'
    },
    {
        id: 'geo-2',
        folder: 'geometric-grid',
        name: 'Rhythmic Grid',
        category: 'Geometric',
        html: '<div class="ld-geo-2"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>',
        css: '.ld-geo-2 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; width: 40px; }\n.ld-geo-2 span { width: 10px; height: 10px; background: var(--accent); animation: ld-geo-2-anim 1s infinite ease-in-out both; }\n.ld-geo-2 span:nth-child(1) { animation-delay: 0.1s; } .ld-geo-2 span:nth-child(2) { animation-delay: 0.2s; } .ld-geo-2 span:nth-child(3) { animation-delay: 0.3s; }\n.ld-geo-2 span:nth-child(4) { animation-delay: 0.2s; } .ld-geo-2 span:nth-child(5) { animation-delay: 0.3s; } .ld-geo-2 span:nth-child(6) { animation-delay: 0.4s; }\n.ld-geo-2 span:nth-child(7) { animation-delay: 0.3s; } .ld-geo-2 span:nth-child(8) { animation-delay: 0.4s; } .ld-geo-2 span:nth-child(9) { animation-delay: 0.5s; }\n@keyframes ld-geo-2-anim { 0%, 100% { opacity: 0.3; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1); background: white; } }'
    },
    {
        id: 'geo-3',
        folder: 'geometric-cube',
        name: 'Spinning Cube 3D',
        category: 'Geometric',
        html: '<div class="ld-geo-3"><div></div><div></div><div></div><div></div><div></div><div></div></div>',
        css: '.ld-geo-3 { width: 40px; height: 40px; transform-style: preserve-3d; animation: ld-geo-3-spin 3s infinite linear; }\n.ld-geo-3 div { position: absolute; width: 100%; height: 100%; border: 2px solid var(--secondary); opacity: 0.7; }\n.ld-geo-3 div:nth-child(1) { transform: translateZ(20px); } .ld-geo-3 div:nth-child(2) { transform: rotateY(180deg) translateZ(20px); }\n.ld-geo-3 div:nth-child(3) { transform: rotateY(90deg) translateZ(20px); } .ld-geo-3 div:nth-child(4) { transform: rotateY(-90deg) translateZ(20px); }\n.ld-geo-3 div:nth-child(5) { transform: rotateX(90deg) translateZ(20px); } .ld-geo-3 div:nth-child(6) { transform: rotateX(-90deg) translateZ(20px); }\n@keyframes ld-geo-3-spin { 0% { transform: rotateX(0deg) rotateY(0deg); } 100% { transform: rotateX(360deg) rotateY(360deg); } }'
    },
    {
        id: 'geo-4',
        folder: 'geometric-elastic',
        name: 'Elastic Band',
        category: 'Geometric',
        html: '<div class="ld-geo-4"><div></div><div></div><div></div></div>',
        css: '.ld-geo-4 { display: flex; gap: 10px; }\n.ld-geo-4 div { width: 8px; height: 40px; background: var(--primary); animation: ld-geo-4-anim 1s infinite ease-in-out; }\n.ld-geo-4 div:nth-child(2) { animation-delay: 0.1s; height: 30px; background: var(--secondary); } .ld-geo-4 div:nth-child(3) { animation-delay: 0.2s; background: var(--accent); }\n@keyframes ld-geo-4-anim { 0%, 100% { transform: scaleY(0.5); } 50% { transform: scaleY(1.5); } }'
    },
    {
        id: 'geo-5',
        folder: 'geometric-orbit',
        name: 'Orbiting Dots',
        category: 'Geometric',
        html: '<div class="ld-geo-5"><div></div><div></div><div></div><div></div></div>',
        css: '.ld-geo-5 { width: 60px; height: 60px; position: relative; animation: rotate 2s linear infinite; }\n.ld-geo-5 div { position: absolute; width: 15px; height: 15px; border-radius: 50%; background: var(--primary); }\n.ld-geo-5 div:nth-child(1) { top: 0; left: 22.5px; } .ld-geo-5 div:nth-child(2) { bottom: 0; left: 22.5px; background: var(--secondary); }\n.ld-geo-5 div:nth-child(3) { top: 22.5px; left: 0; background: var(--accent); } .ld-geo-5 div:nth-child(4) { top: 22.5px; right: 0; background: white; }\n@keyframes rotate { 100% { transform: rotate(360deg); } }'
    },
    {
        id: 'geo-6',
        folder: 'geometric-mosaic',
        name: 'Mosaic Reveal',
        category: 'Geometric',
        html: '<div class="ld-geo-6"><div></div><div></div><div></div><div></div></div>',
        css: '.ld-geo-6 { width: 40px; height: 40px; display: flex; flex-wrap: wrap; animation: rotate 4s linear infinite; }\n.ld-geo-6 div { width: 50%; height: 50%; background-color: var(--primary); animation: ld-geo-6-anim 2s infinite ease-in-out; }\n.ld-geo-6 div:nth-child(2) { background-color: var(--secondary); animation-delay: 0.5s; } .ld-geo-6 div:nth-child(3) { background-color: var(--accent); animation-delay: 1s; } .ld-geo-6 div:nth-child(4) { background-color: white; animation-delay: 1.5s; }\n@keyframes ld-geo-6-anim { 0%, 100% { transform: scale(0); opacity: 0; } 50% { transform: scale(1); opacity: 1; } }'
    },
    {
        id: 'geo-7',
        folder: 'geometric-sacred',
        name: 'Sacred Geometry',
        category: 'Geometric',
        html: '<div class="ld-geo-7"></div>',
        css: '.ld-geo-7 { width: 50px; height: 50px; position: relative; }\n.ld-geo-7::before, .ld-geo-7::after { content: \'\'; position: absolute; inset: 0; border: 3px solid var(--primary); border-radius: 4px; animation: ld-geo-7-anim 2s infinite linear; }\n.ld-geo-7::after { border-color: var(--secondary); animation-direction: reverse; transform: rotate(45deg); }\n@keyframes ld-geo-7-anim { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }'
    },

    // GROUP B: FLUID
    {
        id: 'fluid-1',
        folder: 'fluid-gooey',
        name: 'Gooey Balls',
        category: 'Fluid',
        // Note: requires filter definition in main page or included here
        html: '<div class="ld-fluid-1-filter"><div class="ld-fluid-1"></div></div>\n<!-- SVG Filter needed for effect (automatically added in head for full page, but needs to be in body for snippets sometimes if not global) -->',
        css: '.ld-fluid-1-filter { filter: url(\'#goo\'); width: 100px; height: 100px; position: absolute; display: flex; justify-content: center; align-items: center; }\n.ld-fluid-1 { position: relative; width: 100%; height: 100%; }\n.ld-fluid-1::before, .ld-fluid-1::after { content: \'\'; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 20px; height: 20px; background: var(--secondary); border-radius: 50%; animation: ld-fluid-1-anim 2s infinite ease-in-out; }\n.ld-fluid-1::after { animation-delay: -1s; background: var(--primary); }\n@keyframes ld-fluid-1-anim { 0% { transform: translate(-50%, -50%) translateX(-20px); } 50% { transform: translate(-50%, -50%) translateX(20px); } 100% { transform: translate(-50%, -50%) translateX(-20px); } }'
    },
    {
        id: 'fluid-2',
        folder: 'fluid-wave',
        name: 'Wave Motion',
        category: 'Fluid',
        html: '<div class="ld-fluid-2"><div></div><div></div><div></div><div></div><div></div></div>',
        css: '.ld-fluid-2 { display: flex; gap: 5px; }\n.ld-fluid-2 div { width: 6px; height: 40px; background: linear-gradient(to top, var(--primary), var(--accent)); border-radius: 99px; animation: ld-fluid-2-anim 1s infinite ease-in-out; }\n.ld-fluid-2 div:nth-child(odd) { animation-direction: reverse; background: linear-gradient(to top, var(--secondary), var(--primary)); }\n@keyframes ld-fluid-2-anim { 0%, 100% { height: 10px; opacity: 0.5; } 50% { height: 40px; opacity: 1; } }'
    },
    {
        id: 'fluid-3',
        folder: 'fluid-bubble',
        name: 'Bubble Rise',
        category: 'Fluid',
        html: '<div class="ld-fluid-3"></div>',
        css: '.ld-fluid-3 { width: 40px; height: 40px; border: 2px solid rgba(255,255,255,0.1); border-radius: 50%; position: relative; overflow: hidden; }\n.ld-fluid-3::after { content: \'\'; position: absolute; bottom: -50%; left: -50%; width: 200%; height: 200%; background: var(--primary); border-radius: 40%; animation: ld-fluid-3-anim 3s infinite linear; opacity: 0.8; }\n@keyframes ld-fluid-3-anim { 0% { transform: translateY(0) rotate(0deg); } 100% { transform: translateY(-30px) rotate(360deg); } }'
    },
    {
        id: 'fluid-4',
        folder: 'fluid-paint',
        name: 'Paint Drop',
        category: 'Fluid',
        html: '<div class="ld-fluid-4"></div>',
        css: '.ld-fluid-4 { width: 15px; height: 15px; background: var(--secondary); border-radius: 50%; position: relative; animation: ld-fluid-4-drop 1.5s infinite cubic-bezier(0.5, 0, 1, 0.5); }\n.ld-fluid-4::after { content: \'\'; position: absolute; top: 0; left: 0; right: 0; bottom: 0; border-radius: 50%; border: 1px solid var(--secondary); opacity: 0; animation: ld-fluid-4-ripple 1.5s infinite cubic-bezier(0, 0.2, 0.8, 1); }\n@keyframes ld-fluid-4-drop { 0% { transform: translateY(-20px); } 50% { transform: translateY(10px) scaleY(0.8); } 100% { transform: translateY(-20px); } }\n@keyframes ld-fluid-4-ripple { 40% { transform: scale(1); opacity: 1; } 100% { transform: scale(3); opacity: 0; } }'
    },
    {
        id: 'fluid-5',
        folder: 'fluid-jelly',
        name: 'Jelly Box',
        category: 'Fluid',
        html: '<div class="ld-fluid-5"></div>',
        css: '.ld-fluid-5 { width: 30px; height: 30px; background: var(--accent); border-radius: 4px; animation: ld-fluid-5-anim 0.8s infinite alternate cubic-bezier(0.5, 0.05, 0.1, 0.3); }\n@keyframes ld-fluid-5-anim { 0% { transform: translateY(0) scale(1, 1); border-radius: 4px; } 100% { transform: translateY(-20px) scale(0.9, 1.1); border-radius: 12px; } }'
    },
    {
        id: 'fluid-6',
        folder: 'fluid-energy',
        name: 'Energy Flow',
        category: 'Fluid',
        html: '<div class="ld-fluid-6"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" /></svg></div>',
        css: '.ld-fluid-6 { width: 50px; height: 50px; position: relative; }\n.ld-fluid-6 svg { width: 100%; height: 100%; animation: rotate 3s linear infinite; }\n.ld-fluid-6 circle { fill: none; stroke: var(--primary); stroke-width: 4; stroke-dasharray: 80; stroke-dashoffset: 80; stroke-linecap: round; animation: ld-fluid-6-dash 2s infinite ease-in-out; }\n@keyframes ld-fluid-6-dash { 0% { stroke-dashoffset: 80; } 50% { stroke-dashoffset: 20; transform: rotate(135deg); } 100% { stroke-dashoffset: 80; transform: rotate(450deg); } }'
    },
    {
        id: 'fluid-7',
        folder: 'fluid-smoke',
        name: 'Smoke Twirl',
        category: 'Fluid',
        html: '<div class="ld-fluid-7"><div></div><div></div><div></div><div></div></div>',
        css: '.ld-fluid-7 { width: 60px; height: 60px; position: relative; filter: blur(5px); }\n.ld-fluid-7 div { position: absolute; width: 20px; height: 20px; border-radius: 50%; background: white; opacity: 0.6; animation: ld-fluid-7-anim 2s infinite linear; }\n.ld-fluid-7 div:nth-child(1) { top: 0; left: 20px; } .ld-fluid-7 div:nth-child(2) { top: 20px; right: 0; animation-delay: -0.6s; background: var(--primary); }\n.ld-fluid-7 div:nth-child(3) { bottom: 0; left: 20px; animation-delay: -1.2s; background: var(--secondary); } .ld-fluid-7 div:nth-child(4) { top: 20px; left: 0; animation-delay: -1.8s; background: var(--accent); }\n@keyframes ld-fluid-7-anim { 0% { transform: rotate(0deg) translateX(10px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(10px) rotate(-360deg); } }'
    },

    // GROUP C: TECH
    {
        id: 'tech-3',
        folder: 'tech-circuit',
        name: 'Circuit Path',
        category: 'Tech',
        html: '<div class="ld-tech-3"><svg viewBox="0 0 100 100"><path d="M10,50 Q25,25 50,50 T90,50" /></svg></div>',
        css: '.ld-tech-3 { width: 50px; height: 50px; position: relative; display: flex; justify-content: center; align-items: center; }\n.ld-tech-3 svg { width: 100%; height: 100%; }\n.ld-tech-3 path { fill: none; stroke: var(--accent); stroke-width: 2; stroke-dasharray: 100; stroke-dashoffset: 100; animation: ld-tech-3-anim 2s infinite ease-in-out; }\n@keyframes ld-tech-3-anim { 0% { stroke-dashoffset: 100; } 50% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -100; } }'
    },
    {
        id: 'tech-5',
        folder: 'tech-neon',
        name: 'Neon Pulse',
        category: 'Tech',
        html: '<div class="ld-tech-5"></div>',
        css: '.ld-tech-5 { width: 40px; height: 40px; background: var(--bg-color); border-radius: 50%; box-shadow: 0 0 0 0 rgba(34, 211, 238, 0.7); animation: ld-tech-5-pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1); }\n@keyframes ld-tech-5-pulse { to { box-shadow: 0 0 0 20px rgba(34, 211, 238, 0); } }'
    },
    {
        id: 'tech-6',
        folder: 'tech-digital',
        name: 'Digital Bar',
        category: 'Tech',
        html: '<div class="ld-tech-6"><div></div><div></div><div></div><div></div><div></div></div>',
        css: '.ld-tech-6 { width: 60px; height: 10px; border: 1px solid var(--primary); padding: 2px; display: flex; gap: 2px; }\n.ld-tech-6 div { flex: 1; background: var(--primary); opacity: 0; animation: ld-tech-6-anim 1.5s infinite; }\n.ld-tech-6 div:nth-child(1) { animation-delay: 0.1s; } .ld-tech-6 div:nth-child(2) { animation-delay: 0.2s; }\n.ld-tech-6 div:nth-child(3) { animation-delay: 0.3s; } .ld-tech-6 div:nth-child(4) { animation-delay: 0.4s; }\n.ld-tech-6 div:nth-child(5) { animation-delay: 0.5s; }\n@keyframes ld-tech-6-anim { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }'
    },
    {
        id: 'tech-7',
        folder: 'tech-core',
        name: 'System Core',
        category: 'Tech',
        html: '<div class="ld-tech-7"></div>',
        css: '.ld-tech-7 { width: 50px; height: 50px; border: 4px solid transparent; border-top-color: var(--accent); border-bottom-color: var(--accent); border-radius: 50%; animation: rotate 2s infinite linear; position: relative; }\n.ld-tech-7::after { content: \'\'; position: absolute; inset: 6px; border: 4px solid transparent; border-left-color: var(--secondary); border-right-color: var(--secondary); border-radius: 50%; animation: rotate 1s infinite reverse linear; }'
    },

    // GROUP D: MINIMAL
    {
        id: 'min-1',
        folder: 'minimal-breathing',
        name: 'Breathing Dot',
        category: 'Minimal',
        html: '<div class="ld-min-1"></div>',
        css: '.ld-min-1 { width: 12px; height: 12px; background: var(--text-color); border-radius: 50%; animation: ld-min-1-anim 1.5s infinite ease-in-out; }\n@keyframes ld-min-1-anim { 0%, 100% { transform: scale(0.5); opacity: 0.5; } 50% { transform: scale(1.5); opacity: 1; } }'
    },
    {
        id: 'min-2',
        folder: 'minimal-pendulum',
        name: 'Pendulum',
        category: 'Minimal',
        html: '<div class="ld-min-2-wrap"></div>',
        css: '.ld-min-2-wrap { transform-origin: top center; animation: ld-min-2-swing 1s infinite alternate ease-in-out; width: 2px; height: 25px; background: var(--text-color); margin: 0 auto; position: relative; }\n.ld-min-2-wrap::after { content: \'\'; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 8px; height: 8px; background: var(--text-color); border-radius: 50%; }\n@keyframes ld-min-2-swing { from { transform: rotate(-30deg); } to { transform: rotate(30deg); } }'
    },
    {
        id: 'min-3',
        folder: 'minimal-progress',
        name: 'Line Progress',
        category: 'Minimal',
        html: '<div class="ld-min-3"></div>',
        css: '.ld-min-3 { width: 80px; height: 2px; background: rgba(255,255,255,0.1); position: relative; overflow: hidden; }\n.ld-min-3::after { content: \'\'; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--text-color); transform: translateX(-100%); animation: ld-min-3-anim 1.5s infinite cubic-bezier(0.4, 0, 0.2, 1); }\n@keyframes ld-min-3-anim { 0% { transform: translateX(-100%); } 50% { transform: translateX(0); } 100% { transform: translateX(100%); } }'
    },
    {
        id: 'min-4',
        folder: 'minimal-orbit',
        name: 'Orbit',
        category: 'Minimal',
        html: '<div class="ld-min-4"></div>',
        css: '.ld-min-4 { width: 40px; height: 40px; border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; position: relative; }\n.ld-min-4::after { content: \'\'; position: absolute; top: -3px; left: 50%; transform: translateX(-50%); width: 6px; height: 6px; background: var(--text-color); border-radius: 50%; }\n.ld-min-4 { animation: rotate 2s infinite linear; }'
    },
    {
        id: 'min-5',
        folder: 'minimal-typewriter',
        name: 'Typewriter',
        category: 'Minimal',
        html: '<div class="ld-min-5"><div></div><div></div><div></div></div>',
        css: '.ld-min-5 { display: flex; gap: 4px; align-items: flex-end; height: 20px; }\n.ld-min-5 div { width: 4px; height: 4px; background: var(--text-color); border-radius: 50%; animation: ld-min-5-anim 1s infinite; }\n.ld-min-5 div:nth-child(2) { animation-delay: 0.2s; } .ld-min-5 div:nth-child(3) { animation-delay: 0.4s; }\n@keyframes ld-min-5-anim { 0%, 100% { opacity: 0.2; transform: translateY(0); } 50% { opacity: 1; transform: translateY(-5px); } }'
    },
    {
        id: 'min-6',
        folder: 'minimal-grid',
        name: 'Fade Grid',
        category: 'Minimal',
        html: '<div class="ld-min-6"><div></div><div></div><div></div><div></div></div>',
        css: '.ld-min-6 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px; width: 24px; }\n.ld-min-6 div { width: 10px; height: 10px; background: var(--text-color); animation: opacity 1s infinite alternate; }\n.ld-min-6 div:nth-child(2) { animation-delay: 0.5s; } .ld-min-6 div:nth-child(3) { animation-delay: 0.5s; } .ld-min-6 div:nth-child(4) { animation-delay: 1s; }'
    },
    {
        id: 'min-7',
        folder: 'minimal-sandglass',
        name: 'Sandglass',
        category: 'Minimal',
        html: '<div class="ld-min-7"></div>',
        css: '.ld-min-7 { width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 15px solid var(--text-color); border-bottom: 15px solid var(--text-color); animation: ld-min-7-anim 2s infinite; }\n@keyframes ld-min-7-anim { 0% { transform: rotate(0deg); } 50% { transform: rotate(180deg); } 100% { transform: rotate(180deg); } }'
    }
];

const baseCss = ':root {\n    --bg-color: #0f172a;\n    --card-bg: #1e293b;\n    --text-color: #e2e8f0;\n    --primary: #6366f1;\n    --secondary: #ec4899;\n    --accent: #22d3ee;\n    --success: #10b981;\n}\nbody { background: var(--bg-color); color: var(--text-color); display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }\n';

// Build process
animations.forEach(anim => {
    const dir = path.join(baseDir, anim.folder);
    ensureDir(dir);

    // 1. Create style.css
    const fullCss = baseCss + '\n' + anim.css;
    fs.writeFileSync(path.join(dir, 'style.css'), fullCss);

    // 2. Create index.html (Preview)
    const gooSvg = `
    <!-- SVG Filter for Gooey Effect -->
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;">
        <defs>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
            </filter>
        </defs>
    </svg>`;

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${anim.name} - Loading Preview</title>
    <link rel="stylesheet" href="style.css">
    ${anim.id === 'fluid-1' ? gooSvg : ''}
</head>
<body>
    ${anim.html}
</body>
</html>`;

    fs.writeFileSync(path.join(dir, 'index.html'), htmlContent);
    console.log('Created ' + anim.folder);
});

let mainCssContent = `/* Import all separate loading styles */
:root {
    --bg-color: #0f172a;
    --card-bg: #1e293b;
    --text-color: #e2e8f0;
    --primary: #6366f1; /* Indigo 500 */
    --secondary: #ec4899; /* Pink 500 */
    --accent: #22d3ee; /* Cyan 400 */
    --success: #10b981; /* Emerald 500 */
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: 'Inter', sans-serif;
    margin: 0;
    overflow-x: hidden;
}

/* Individual Loading Container */
.loading-card {
    background-color: var(--card-bg);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 12px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.3s ease;
    overflow: hidden;
    cursor: pointer;
}

.loading-card:hover {
    transform: translateY(-5px);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
}

.card-label {
    position: absolute;
    bottom: 15px;
    font-size: 12px;
    color: #64748b;
    font-family: monospace;
    opacity: 0.7;
    transition: opacity 0.3s;
}

.loading-card:hover .card-label {
    opacity: 1;
    color: var(--primary);
}
`;

animations.forEach(anim => {
    mainCssContent += '\n/* ' + anim.name + ' */\n' + anim.css + '\n';
});

fs.writeFileSync(path.join(baseDir, 'styles.css'), mainCssContent);
console.log('Updated main styles.css');

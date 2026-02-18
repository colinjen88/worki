#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Add surprise micro-interactions to portfolio
"""

import re

def main():
    with open('let/index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Update Hero headline for typewriter effect
    old_hero = '''<h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                    <span class="reveal-text inline-block">Designing Logic.</span><br>
                    <span class="text-gradient reveal-text inline-block pb-2">Animating Emotion.</span>
                </h1>'''
    new_hero = '''<h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                    <span id="typewriter-line1" class="inline-block"></span><span class="typewriter-cursor">|</span><br>
                    <span id="typewriter-line2" class="text-gradient inline-block pb-2"></span>
                </h1>'''
    content = content.replace(old_hero, new_hero)
    print("✓ Typewriter HTML updated")
    
    # 2. Add typewriter CSS
    typewriter_css = '''        /* Typewriter Effect */
        .typewriter-cursor {
            animation: blink 1s step-end infinite;
            color: #6366f1;
            font-weight: 100;
        }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        
        /* Progress Bar Rainbow Shimmer */
        #scroll-progress {
            background: linear-gradient(90deg, #6366f1, #a855f7, #3b82f6, #6366f1);
            background-size: 200% 100%;
            animation: rainbow-flow 3s linear infinite;
        }
        @keyframes rainbow-flow {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }
        
        /* Cursor Trail */
        .cursor-trail {
            position: fixed;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: opacity 0.5s ease;
        }
        
        /* Shooting Stars for Night Mode */
        .shooting-star {
            position: fixed;
            width: 100px;
            height: 2px;
            background: linear-gradient(90deg, transparent, #fff, transparent);
            animation: shoot 3s linear infinite;
            opacity: 0;
            pointer-events: none;
            z-index: 1;
        }
        @keyframes shoot {
            0% {
                transform: translateX(-100px) rotate(-45deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateX(calc(100vw + 100px)) rotate(-45deg);
                opacity: 0;
            }
        }
        
        /* Card FLIP transition */
        .work-card {
            transition: transform 0.4s ease, opacity 0.4s ease;
        }
        .work-card.filtering-out {
            transform: scale(0.9) translateY(20px);
            opacity: 0;
        }
        .work-card.filtering-in {
            animation: card-appear 0.4s ease forwards;
        }
        @keyframes card-appear {
            from {
                transform: scale(0.9) translateY(20px);
                opacity: 0;
            }
            to {
                transform: scale(1) translateY(0);
                opacity: 1;
            }
        }
        
        /* Konami Success Animation */
        .konami-active {
            animation: konami-pulse 0.5s ease;
        }
        @keyframes konami-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
        }
    </style>'''
    content = content.replace('    </style>', typewriter_css, 1)
    print("✓ CSS for all effects added")
    
    # 3. Find the existing Portfolio Filter JavaScript and replace it with enhanced version including FLIP
    old_filter_js = '''        // ===== Portfolio Filter =====
        const filterButtons = document.querySelectorAll('#portfolio-filter .filter-btn');
        const workCards = document.querySelectorAll('.work-card');

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                
                // Update active button
                filterButtons.forEach(b => {
                    b.classList.remove('active', 'bg-white/10', 'text-white');
                    b.classList.add('bg-slate-800/50', 'text-slate-300');
                });
                btn.classList.add('active', 'bg-white/10', 'text-white');
                btn.classList.remove('bg-slate-800/50', 'text-slate-300');
                
                // Filter cards
                workCards.forEach(card => {
                    const category = card.dataset.category || 'all';
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });'''
    
    new_filter_js = '''        // ===== Typewriter Effect =====
        const line1Text = "Designing Logic.";
        const line2Text = "Animating Emotion.";
        const typewriterLine1 = document.getElementById('typewriter-line1');
        const typewriterLine2 = document.getElementById('typewriter-line2');
        const cursor = document.querySelector('.typewriter-cursor');
        
        async function typeWriter() {
            // Type line 1
            for (let i = 0; i < line1Text.length; i++) {
                typewriterLine1.textContent += line1Text[i];
                await new Promise(r => setTimeout(r, 80));
            }
            // Move cursor to next line
            await new Promise(r => setTimeout(r, 300));
            // Type line 2
            for (let i = 0; i < line2Text.length; i++) {
                typewriterLine2.textContent += line2Text[i];
                await new Promise(r => setTimeout(r, 80));
            }
            // Keep blinking cursor
        }
        
        // Start typing after page load
        setTimeout(typeWriter, 800);
        
        // ===== Portfolio Filter with FLIP Animation =====
        const filterButtons = document.querySelectorAll('#portfolio-filter .filter-btn');
        const workCards = document.querySelectorAll('.work-card');

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                
                // Update active button
                filterButtons.forEach(b => {
                    b.classList.remove('active', 'bg-white/10', 'text-white');
                    b.classList.add('bg-slate-800/50', 'text-slate-300');
                });
                btn.classList.add('active', 'bg-white/10', 'text-white');
                btn.classList.remove('bg-slate-800/50', 'text-slate-300');
                
                // FLIP animation for cards
                workCards.forEach(card => {
                    const category = card.dataset.category || 'all';
                    
                    if (filter === 'all' || category === filter) {
                        // Show card with animation
                        if (card.style.display === 'none') {
                            card.style.display = 'block';
                            card.classList.add('filtering-in');
                            setTimeout(() => card.classList.remove('filtering-in'), 400);
                        }
                    } else {
                        // Hide card with animation
                        card.classList.add('filtering-out');
                        setTimeout(() => {
                            card.style.display = 'none';
                            card.classList.remove('filtering-out');
                        }, 400);
                    }
                });
            });
        });
        
        // ===== Cursor Trail Effect =====
        const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
        if (!isTouchDevice) {
            const trailCount = 8;
            const trails = [];
            
            for (let i = 0; i < trailCount; i++) {
                const trail = document.createElement('div');
                trail.className = 'cursor-trail';
                trail.style.opacity = (1 - i / trailCount) * 0.5;
                trail.style.width = `${12 - i}px`;
                trail.style.height = `${12 - i}px`;
                document.body.appendChild(trail);
                trails.push({
                    element: trail,
                    x: 0,
                    y: 0
                });
            }
            
            let mouseX = 0, mouseY = 0;
            
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
            
            function updateTrails() {
                let prevX = mouseX;
                let prevY = mouseY;
                
                trails.forEach((trail, index) => {
                    const delay = (index + 1) * 0.08;
                    trail.x += (prevX - trail.x) * 0.3;
                    trail.y += (prevY - trail.y) * 0.3;
                    
                    trail.element.style.left = trail.x + 'px';
                    trail.element.style.top = trail.y + 'px';
                    
                    prevX = trail.x;
                    prevY = trail.y;
                });
                
                requestAnimationFrame(updateTrails);
            }
            
            updateTrails();
        }
        
        // ===== Konami Code Easter Egg =====
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let konamiIndex = 0;
        
        document.addEventListener('keydown', (e) => {
            if (e.key === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    triggerConfetti();
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });
        
        function triggerConfetti() {
            // Create confetti container
            const container = document.createElement('div');
            container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99999;overflow:hidden;';
            document.body.appendChild(container);
            
            // Add body pulse
            document.body.classList.add('konami-active');
            setTimeout(() => document.body.classList.remove('konami-active'), 500);
            
            // Create confetti pieces
            const colors = ['#6366f1', '#a855f7', '#3b82f6', '#ec4899', '#10b981', '#f59e0b'];
            const shapes = ['circle', 'square', 'triangle'];
            
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                const color = colors[Math.floor(Math.random() * colors.length)];
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                const left = Math.random() * 100;
                const duration = 2 + Math.random() * 2;
                const delay = Math.random() * 0.5;
                
                confetti.style.cssText = `
                    position: absolute;
                    width: ${8 + Math.random() * 8}px;
                    height: ${8 + Math.random() * 8}px;
                    background: ${color};
                    left: ${left}%;
                    top: -20px;
                    opacity: 0.8;
                    animation: confetti-fall ${duration}s ${delay}s linear forwards;
                    ${shape === 'circle' ? 'border-radius: 50%;' : shape === 'triangle' ? 'clip-path: polygon(50% 0%, 0% 100%, 100% 100%);' : ''}
                `;
                
                container.appendChild(confetti);
            }
            
            // Add keyframe dynamically
            const style = document.createElement('style');
            style.textContent = `
                @keyframes confetti-fall {
                    0% {
                        transform: translateY(0) rotate(0deg) translateX(0);
                        opacity: 0.8;
                    }
                    100% {
                        transform: translateY(110vh) rotate(${720 + Math.random() * 720}deg) translateX(${-50 + Math.random() * 100}px);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
            
            // Cleanup
            setTimeout(() => {
                container.remove();
                style.remove();
            }, 5000);
        }
        
        // ===== Night Mode Shooting Stars =====
        function checkNightMode() {
            const hour = new Date().getHours();
            if (hour >= 22 || hour < 6) {
                createShootingStars();
            }
        }
        
        function createShootingStars() {
            const container = document.createElement('div');
            container.id = 'night-stars';
            container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:hidden;';
            document.body.insertBefore(container, document.body.firstChild);
            
            // Create shooting stars periodically
            function spawnStar() {
                const star = document.createElement('div');
                star.className = 'shooting-star';
                star.style.top = `${Math.random() * 50}%`;
                star.style.left = `${Math.random() * 50}%`;
                star.style.animationDuration = `${2 + Math.random() * 2}s`;
                star.style.animationDelay = '0s';
                
                container.appendChild(star);
                
                setTimeout(() => star.remove(), 4000);
            }
            
            // Spawn initial batch
            for (let i = 0; i < 3; i++) {
                setTimeout(spawnStar, i * 2000);
            }
            
            // Continue spawning
            setInterval(spawnStar, 6000);
        }
        
        // Check on load
        checkNightMode();'''
    
    content = content.replace(old_filter_js, new_filter_js)
    print("✓ Enhanced JavaScript with all effects added")
    
    with open('let/index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("\n🎉 All surprise effects applied successfully!")
    print("\nEffects added:")
    print("  • Typewriter effect on hero headline")
    print("  • FLIP animation for portfolio filter")
    print("  • Konami code easter egg (↑↑↓↓←→←→BA) with confetti")
    print("  • Rainbow shimmer on scroll progress bar")
    print("  • Cursor trail effect (desktop only)")
    print("  • Shooting stars at night (10PM - 6AM)")

if __name__ == '__main__':
    main()

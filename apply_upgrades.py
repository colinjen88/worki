#!/usr/bin/env python3
"""
Script to apply visual design upgrades to let/index.html
"""

import re

# Read the file
with open('let/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Simplify Status Badge text
old_badge = '<span class="text-sm font-medium text-slate-300 tracking-wide">戰國策網路科技的主管您好，我想應徵貴公司的「<span class="text-white font-bold">網頁設計師</span>」職務，<br>能夠從規劃、設計到完整建置網站上線，熟SEO，我的配合度很高，希望能有這個機會，感謝。</span>'
new_badge = '<span class="text-sm font-medium text-slate-300 tracking-wide">開放職涯機會 — <span class="text-white font-bold">網頁設計師</span> 職缺</span>'
content = content.replace(old_badge, new_badge)

# 2. Add scroll progress indicator after loading screen
scroll_progress_html = '''    <!-- Scroll Progress Indicator -->
    <div id="scroll-progress" class="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary z-[60] w-0 transition-all duration-100"></div>

    <!-- Custom Cursor -->'''
content = content.replace('    <!-- Custom Cursor -->', scroll_progress_html)

# 3. Add portfolio filter buttons
old_header = '''            <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div class="reveal-text">
                    <h2 class="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Selected Works</h2>
                    <h3 class="text-4xl md:text-5xl font-bold text-white">作品列表</h3>
                </div>
            </div>'''

new_header = '''            <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div class="reveal-text">
                    <h2 class="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Selected Works</h2>
                    <h3 class="text-4xl md:text-5xl font-bold text-white">作品列表</h3>
                </div>

                <!-- Portfolio Filter -->
                <div class="flex flex-wrap gap-2" id="portfolio-filter">
                    <button data-filter="all" class="filter-btn active px-4 py-2 rounded-full text-sm font-medium border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all">全部</button>
                    <button data-filter="ui" class="filter-btn px-4 py-2 rounded-full text-sm font-medium border border-white/10 bg-transparent text-slate-400 hover:text-white hover:border-primary/50 transition-all">UI/UX</button>
                    <button data-filter="motion" class="filter-btn px-4 py-2 rounded-full text-sm font-medium border border-white/10 bg-transparent text-slate-400 hover:text-white hover:border-secondary/50 transition-all">Motion</button>
                    <button data-filter="web" class="filter-btn px-4 py-2 rounded-full text-sm font-medium border border-white/10 bg-transparent text-slate-400 hover:text-white hover:border-blue-400/50 transition-all">Web</button>
                    <button data-filter="other" class="filter-btn px-4 py-2 rounded-full text-sm font-medium border border-white/10 bg-transparent text-slate-400 hover:text-white hover:border-white/30 transition-all">其他</button>
                </div>
            </div>'''
content = content.replace(old_header, new_header)

# 4. Add data-category attributes to work cards
card_mappings = [
    ('<!-- Project 1: Graphic Design Portfolio -->\n                <a href="assets/Graphic_Portfolio.pdf" target="_blank" rel="noopener noreferrer" class="group cursor-pointer work-card block">', 
     '<!-- Project 1: Graphic Design Portfolio -->\n                <a href="assets/Graphic_Portfolio.pdf" target="_blank" rel="noopener noreferrer" class="group cursor-pointer work-card block" data-category="other">'),
    
    ('<!-- Project: GoodEats -->\n                <a href="https://goodeats.asia/" target="_blank" rel="noopener noreferrer" class="group cursor-pointer work-card block">',
     '<!-- Project: GoodEats -->\n                <a href="https://goodeats.asia/" target="_blank" rel="noopener noreferrer" class="group cursor-pointer work-card block" data-category="ui">'),
    
    ('<!-- Project: 御手國醫養生會館 改版設計試做DEMO -->\n                <a href="https://gowork.run/mass/" target="_blank" rel="noopener noreferrer" class="group cursor-pointer work-card block">',
     '<!-- Project: 御手國醫養生會館 改版設計試做DEMO -->\n                <a href="https://gowork.run/mass/" target="_blank" rel="noopener noreferrer" class="group cursor-pointer work-card block" data-category="ui">'),
    
    ('<!-- Project 2: GoldLab Web Portal -->\n                <a href="https://goldlab.tw/" target="_blank" rel="noopener noreferrer" class="group cursor-pointer work-card block">',
     '<!-- Project 2: GoldLab Web Portal -->\n                <a href="https://goldlab.tw/" target="_blank" rel="noopener noreferrer" class="group cursor-pointer work-card block" data-category="web">'),
    
    ('<!-- Project 3: Shiny Jewelry Platform -->\n                <a href="https://my8020.cloud/" target="_blank" rel="noopener noreferrer" class="group cursor-pointer work-card block">',
     '<!-- Project 3: Shiny Jewelry Platform -->\n                <a href="https://my8020.cloud/" target="_blank" rel="noopener noreferrer" class="group cursor-pointer work-card block" data-category="web">'),
    
    ('<!-- Project 4: Motion Showreel -->\n                <!-- Project 4: Motion Showreel -->\n                <a href="https://www.youtube.com/watch?v=V_f5eONwmPo" target="_blank" rel="noopener noreferrer"\n                    class="group cursor-pointer work-card block">',
     '<!-- Project 4: Motion Showreel -->\n                <a href="https://www.youtube.com/watch?v=V_f5eONwmPo" target="_blank" rel="noopener noreferrer" class="group cursor-pointer work-card block" data-category="motion">'),
    
    ('<!-- Project 5: Content SEO Strategy -->\n                <a href="https://seo.gowork.run/" target="_blank" rel="noopener noreferrer" class="group cursor-pointer work-card block">',
     '<!-- Project 5: Content SEO Strategy -->\n                <a href="https://seo.gowork.run/" target="_blank" rel="noopener noreferrer" class="group cursor-pointer work-card block" data-category="other">'),
]

for old, new in card_mappings:
    content = content.replace(old, new)

# 5. Add JavaScript for scroll progress and portfolio filter at the end of the script section
filter_js = '''
        // ===== Scroll Progress Bar =====
        const progressBar = document.getElementById('scroll-progress');
        if (progressBar) {
            window.addEventListener('scroll', () => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = (scrollTop / docHeight) * 100;
                progressBar.style.width = progress + '%';
            }, { passive: true });
        }

        // ===== Portfolio Filter =====
        const filterButtons = document.querySelectorAll('#portfolio-filter .filter-btn');
        const workCards = document.querySelectorAll('.work-card');

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                
                // Update active button
                filterButtons.forEach(b => {
                    b.classList.remove('active', 'bg-white/5', 'text-white');
                    b.classList.add('bg-transparent', 'text-slate-400');
                });
                btn.classList.add('active', 'bg-white/5', 'text-white');
                btn.classList.remove('bg-transparent', 'text-slate-400');
                
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
        });

'''

# Find the right place to insert - after the Lenis scroll handler
# Insert before the smooth scroll section
content = content.replace(
    '        // ===== Smooth Scroll for Nav Links (Native for Performance) =====',
    filter_js + '        // ===== Smooth Scroll for Nav Links (Native for Performance) ====='
)

# Write the file back
with open('let/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Changes applied successfully!")

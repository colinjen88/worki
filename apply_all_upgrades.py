#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Apply all P0/P1 visual design upgrades to portfolio index.html
"""

import re

def main():
    with open('let/index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Simplify Status Badge text
    old_badge = '戰國策網路科技的主管您好，我想應徵貴公司的「<span class="text-white font-bold">網頁設計師</span>」職務，<br>能夠從規劃、設計到完整建置網站上線，熟SEO，我的配合度很高，希望能有這個機會，感謝。'
    new_badge = '開放職涯機會 — <span class="text-white font-bold">網頁設計師</span> 職缺'
    content = content.replace(old_badge, new_badge)
    print("✓ Status badge simplified")
    
    # 2. Add scroll progress indicator HTML after loading screen
    scroll_progress_html = '''    <!-- Scroll Progress Indicator -->
    <div id="scroll-progress" class="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary z-[60] w-0 transition-all duration-150 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

    <!-- Custom Cursor -->'''
    content = content.replace('    <!-- Custom Cursor -->', scroll_progress_html)
    print("✓ Scroll progress indicator added")
    
    # 3. Add portfolio filter HTML after "作品列表" heading
    filter_html = '''                <!-- Portfolio Filter -->
                <div class="flex flex-wrap gap-2" id="portfolio-filter">
                    <button data-filter="all" class="filter-btn active px-4 py-2 rounded-full text-sm font-medium border border-white/20 bg-white/10 text-white hover:bg-white/15 transition-all">全部</button>
                    <button data-filter="ui" class="filter-btn px-4 py-2 rounded-full text-sm font-medium border border-white/20 bg-slate-800/50 text-slate-300 hover:text-white hover:border-primary/50 hover:bg-slate-700/50 transition-all">UI/UX</button>
                    <button data-filter="motion" class="filter-btn px-4 py-2 rounded-full text-sm font-medium border border-white/20 bg-slate-800/50 text-slate-300 hover:text-white hover:border-secondary/50 hover:bg-slate-700/50 transition-all">Motion</button>
                    <button data-filter="web" class="filter-btn px-4 py-2 rounded-full text-sm font-medium border border-white/20 bg-slate-800/50 text-slate-300 hover:text-white hover:border-blue-400/50 hover:bg-slate-700/50 transition-all">Web</button>
                    <button data-filter="other" class="filter-btn px-4 py-2 rounded-full text-sm font-medium border border-white/20 bg-slate-800/50 text-slate-300 hover:text-white hover:border-white/40 hover:bg-slate-700/50 transition-all">其他</button>
                </div>
            </div>

            <!-- Portfolio Grid -->'''
    content = content.replace('            </div>\n\n            <!-- Portfolio Grid -->', filter_html, 1)
    print("✓ Portfolio filter added")
    
    # 4. Update shiny_jewelry_preview.png to .jpg
    content = content.replace('shiny_jewelry_preview.png', 'shiny_jewelry_preview.jpg')
    print("✓ Jewelry preview image updated to jpg")
    
    # 5. Add data-category attributes to work cards
    # Graphic Design Portfolio (other)
    content = content.replace(
        'class="group cursor-pointer work-card block"\n                    data-category="other">\n                    <div\n                        class="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative border border-white/5 bg-slate-800 isolate">',
        'class="group cursor-pointer work-card block" data-category="other">\n                    <div\n                        class="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative border border-white/5 bg-slate-800 isolate">'
    )
    
    # 6. Add shimmer hover effect CSS before </style>
    shimmer_css = '''        /* Work Card Shimmer Hover Effect */
        .work-card div[class*="aspect-"] {
            position: relative;
            overflow: hidden;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .work-card div[class*="aspect-"]::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent 0%,
                rgba(255, 255, 255, 0.15) 50%,
                transparent 100%
            );
            transition: left 0.6s ease;
            pointer-events: none;
            z-index: 5;
        }

        .work-card:hover div[class*="aspect-"]::before {
            left: 100%;
        }

        .work-card:hover div[class*="aspect-"] {
            border-color: rgba(99, 102, 241, 0.5);
            box-shadow: 0 0 40px rgba(99, 102, 241, 0.25);
        }
    </style>'''
    content = content.replace('    </style>', shimmer_css, 1)
    print("✓ Shimmer hover effect CSS added")
    
    # 7. Add JavaScript for scroll progress and portfolio filter before closing </script>
    js_code = '''
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
        });
    </script>'''
    content = content.replace('    </script>', js_code, 1)
    print("✓ JavaScript for scroll progress and filter added")
    
    with open('let/index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("\nAll P0/P1 upgrades applied successfully!")

if __name__ == '__main__':
    main()

function switchTab(tab, index) {
    var dock = tab.closest('.cmd-dock');
    dock.querySelectorAll('.cmd-dock-tab').forEach(function(t) { t.classList.remove('active'); });
    dock.querySelectorAll('.cmd-card').forEach(function(c) { c.classList.remove('active'); });
    tab.classList.add('active');
    dock.querySelectorAll('.cmd-card')[index].classList.add('active');
}

function selectPipeline(pipelineId, index) {
    var pipeline = document.getElementById(pipelineId);
    pipeline.querySelectorAll('.pipeline-node').forEach(function(n) { n.classList.remove('active'); });
    pipeline.querySelectorAll('.pipeline-detail').forEach(function(d) { d.classList.remove('active'); });
    pipeline.querySelectorAll('.pipeline-node')[index].classList.add('active');
    pipeline.querySelectorAll('.pipeline-detail')[index].classList.add('active');
}

function copyPipeline(btn) {
    var prompt = btn.previousElementSibling;
    var text = prompt.getAttribute('data-prompt');
    navigator.clipboard.writeText(text).then(function() {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function() {
            btn.textContent = 'Copy prompt';
            btn.classList.remove('copied');
        }, 2000);
    });
}

function copyCmd(card) {
    var promptEl = card.querySelector('.cmd-card-prompt');
    var text = promptEl.getAttribute('data-prompt');
    var copyLabel = card.querySelector('.cmd-card-copy');
    navigator.clipboard.writeText(text).then(function() {
        copyLabel.textContent = 'Copied!';
        copyLabel.classList.add('copied');
        setTimeout(function() {
            copyLabel.textContent = 'Click to copy';
            copyLabel.classList.remove('copied');
        }, 2000);
    });
}

var INSTALL_PROMPT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

function copyInstallPrompt(btn) {
    var originalText = btn.textContent;
    navigator.clipboard.writeText(INSTALL_PROMPT).then(function() {
        btn.textContent = 'Copied!';
        setTimeout(function() { btn.textContent = originalText; }, 2000);
    });
}

function copyScenario(btn) {
    var card = btn.closest('.scenario-card');
    var prompt = card.querySelector('.scenario-prompt').getAttribute('data-prompt');
    navigator.clipboard.writeText(prompt).then(function() {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function() {
            btn.textContent = 'Copy prompt';
            btn.classList.remove('copied');
        }, 2000);
    });
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
}

function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('open');
}

/* ── Sticky Header ── */
(function() {
    var header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
})();

/* ── Scroll Reveal ── */
(function() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    reveals.forEach(function(el) { observer.observe(el); });
})();

/* ── Custom Cursor ── */
(function() {
    var dot = document.getElementById('cursorDot');
    var ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    var mx = -100, my = -100;
    var rx = -100, ry = -100;

    document.addEventListener('mousemove', function(e) {
        mx = e.clientX;
        my = e.clientY;
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
    });

    function lerp(a, b, t) { return a + (b - a) * t; }

    function followRing() {
        rx = lerp(rx, mx, 0.15);
        ry = lerp(ry, my, 0.15);
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        requestAnimationFrame(followRing);
    }
    followRing();

    // Hover state on interactive elements
    var hoverTargets = 'a, button, .cmd-card, .pipeline-node, .skill, .scenario-card, .cmd-dock-tab, .pipeline-copy-btn, input, [onclick]';
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest(hoverTargets)) {
            dot.classList.add('hovering');
            ring.classList.add('hovering');
        }
    });
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest(hoverTargets)) {
            dot.classList.remove('hovering');
            ring.classList.remove('hovering');
        }
    });

    // Click state
    document.addEventListener('mousedown', function() {
        dot.classList.add('clicking');
        ring.classList.add('clicking');
    });
    document.addEventListener('mouseup', function() {
        dot.classList.remove('clicking');
        ring.classList.remove('clicking');
    });
})();

/* ── Interactive Hero Canvas ── */
(function() {
    var canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var hero = document.getElementById('hero');
    var mouse = { x: -1000, y: -1000 };
    var dots = [];
    var SPACING = 32;
    var RADIUS = 1.2;
    var INFLUENCE = 160;
    var BASE_ALPHA = 0.12;
    var animId;

    function resize() {
        var rect = hero.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        buildDots();
    }

    function buildDots() {
        dots = [];
        var cols = Math.ceil(canvas.width / SPACING) + 1;
        var rows = Math.ceil(canvas.height / SPACING) + 1;
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                dots.push({ x: c * SPACING, y: r * SPACING, baseX: c * SPACING, baseY: r * SPACING });
            }
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < dots.length; i++) {
            var d = dots[i];
            var dx = mouse.x - d.baseX;
            var dy = mouse.y - d.baseY;
            var dist = Math.sqrt(dx * dx + dy * dy);
            var factor = Math.max(0, 1 - dist / INFLUENCE);
            var ease = factor * factor;

            // Displace dots away from cursor
            var pushX = 0, pushY = 0;
            if (dist > 0 && dist < INFLUENCE) {
                pushX = -(dx / dist) * ease * 12;
                pushY = -(dy / dist) * ease * 12;
            }
            d.x = d.baseX + pushX;
            d.y = d.baseY + pushY;

            var alpha = BASE_ALPHA + ease * 0.7;
            var r = RADIUS + ease * 2.5;

            // Color: near cursor = red, otherwise white
            if (ease > 0.01) {
                var red = Math.round(229 * ease + 255 * (1 - ease));
                var green = Math.round(57 * ease + 255 * (1 - ease));
                var blue = Math.round(53 * ease + 255 * (1 - ease));
                ctx.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
            } else {
                ctx.fillStyle = 'rgba(255,255,255,' + BASE_ALPHA + ')';
            }

            ctx.beginPath();
            ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
            ctx.fill();

            // Draw connections to nearby dots when near cursor
            if (ease > 0.15) {
                for (var j = i + 1; j < dots.length; j++) {
                    var d2 = dots[j];
                    var dx2 = d2.baseX - d.baseX;
                    var dy2 = d2.baseY - d.baseY;
                    var dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                    if (dist2 <= SPACING * 1.5) {
                        var dist2mouse = Math.sqrt((mouse.x - d2.baseX) * (mouse.x - d2.baseX) + (mouse.y - d2.baseY) * (mouse.y - d2.baseY));
                        var f2 = Math.max(0, 1 - dist2mouse / INFLUENCE);
                        var lineAlpha = Math.min(ease, f2 * f2) * 0.3;
                        if (lineAlpha > 0.01) {
                            ctx.strokeStyle = 'rgba(229,57,53,' + lineAlpha + ')';
                            ctx.lineWidth = 0.8;
                            ctx.beginPath();
                            ctx.moveTo(d.x, d.y);
                            ctx.lineTo(d2.x, d2.y);
                            ctx.stroke();
                        }
                    }
                }
            }
        }
        animId = requestAnimationFrame(draw);
    }

    hero.addEventListener('mousemove', function(e) {
        var rect = hero.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    hero.addEventListener('mouseleave', function() {
        mouse.x = -1000;
        mouse.y = -1000;
    });

    window.addEventListener('resize', resize);
    resize();
    draw();
})();

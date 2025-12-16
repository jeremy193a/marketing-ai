// ===================================
// AI Marketing Mentorship - Shared JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initNavigation();
  initScrollAnimations();

  // Page-specific init
  if (document.querySelector('.tools-categories')) {
    initToolsFilter();
  }

  if (document.querySelector('.week-card')) {
    initMilestones();
  }
});

// Header scroll effect
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Mobile navigation
function initNavigation() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');

  if (!toggle || !menu) return;

  // Toggle menu on hamburger click
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.toggle('active');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close on link click
  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Scroll animations using Intersection Observer
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe animatable elements
  const selectors = '.goal-card, .week-card, .tool-card';
  document.querySelectorAll(selectors).forEach(el => observer.observe(el));
}

// Week card toggle (for curriculum page)
function toggleWeek(header) {
  const card = header.closest('.week-card');
  if (card) {
    card.classList.toggle('expanded');
  }
}

// Milestone toggles (for curriculum detail items)
function initMilestones() {
  if (typeof MilestoneState === 'undefined') return;

  const storageKey = MilestoneState.DEFAULT_STORAGE_KEY;
  let storage = null;
  let state = {};

  try {
    state = MilestoneState.loadState(null, storageKey);
  } catch (_) {
    storage = createMemoryStorage();
    state = MilestoneState.loadState(storage, storageKey);
  }

  const detailItems = document.querySelectorAll('.detail-item');

  detailItems.forEach((item) => {
    const id = item.dataset.milestoneId || buildMilestoneId(item);
    if (!id) return;
    item.dataset.milestoneId = id;

    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'milestone-toggle';
    toggleBtn.setAttribute('aria-pressed', state[id] ? 'true' : 'false');
    toggleBtn.innerHTML = '<span class="milestone-check">✔</span><span class="milestone-label">Hoàn thành</span>';

    if (state[id]) {
      item.classList.add('milestone-done');
    }

    toggleBtn.addEventListener('click', () => {
      const result = MilestoneState.toggleMilestone(storage, storageKey, id);
      toggleBtn.setAttribute('aria-pressed', result.done ? 'true' : 'false');
      item.classList.toggle('milestone-done', result.done);
    });

    item.appendChild(toggleBtn);
  });
}

function buildMilestoneId(item) {
  const weekTitle = item.closest('.week-card')?.querySelector('.week-title')?.textContent || '';
  const detailLabel = item.querySelector('.detail-label')?.textContent || '';
  const raw = `${weekTitle}-${detailLabel}`.trim();
  return raw ? slugify(raw) : null;
}

function createMemoryStorage() {
  const store = new Map();
  return {
    getItem: (key) => (store.has(key) ? store.get(key) : null),
    setItem: (key, value) => store.set(key, value)
  };
}

function slugify(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

// Tools filter (for tools page)
function initToolsFilter() {
  const buttons = document.querySelectorAll('.category-btn');
  const cards = document.querySelectorAll('.tool-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.category;

      // Filter cards with animation
      cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = '';
          card.classList.remove('visible');
          requestAnimationFrame(() => {
            card.classList.add('visible');
          });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

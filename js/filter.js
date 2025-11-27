// Portfolio Filter Functionality

document.addEventListener('DOMContentLoaded', function() {
  initPortfolioFilter();
});

function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (!filterButtons.length || !portfolioItems.length) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.dataset.filter;

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filter portfolio items
      portfolioItems.forEach(item => {
        const categories = item.dataset.category;

        if (filter === 'all') {
          // Show all items
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 10);
        } else {
          // Check if item matches filter
          if (categories.includes(filter)) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        }
      });

      // Smooth scroll to portfolio grid
      const portfolioSection = document.querySelector('.portfolio-section');
      if (portfolioSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const filterHeight = document.querySelector('.filter-section').offsetHeight;
        const offset = headerHeight + filterHeight + 20;

        window.scrollTo({
          top: portfolioSection.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add transition styles
  portfolioItems.forEach(item => {
    item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  });
}

// Optional: URL hash support for direct filtering
window.addEventListener('load', function() {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const filterButton = document.querySelector(`[data-filter="${hash}"]`);
    if (filterButton) {
      filterButton.click();
    }
  }
});

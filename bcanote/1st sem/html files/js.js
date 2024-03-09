  // Function to handle smooth scrolling or navigation with offset
  function handleNavigation(target) {
    if (target === 'home') {
      window.location.href = '/index.html'; // Navigate to index.html
    } else {
      const section = document.getElementById(target);
      if (section) {
        const offset = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
          top: section.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    }
  }

  // Add event listeners to navbar links
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const target = this.getAttribute('href').substring(1);
      handleNavigation(target);
    });
  });


 // this is for the scroll to top button
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Add event listener to back-to-top button
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', scrollToTop);
  }



  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
  
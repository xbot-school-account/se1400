// Code for glitchy tooltip
  document.querySelectorAll('.tooltip-container').forEach(wrapper => {
    const tooltip = wrapper.querySelector('.tooltip');
    let timerId;

    function randomGlitch() {
      const h = tooltip.offsetHeight;
      // choose two random horizontal things
      const top  = Math.random() * h * 0.8;
      const bottom = top + Math.random() * (h - top);
      // random transforms
      const tx  = (Math.random() * 4) - 2;
      const ty  = (Math.random() * 4) - 2;
      const sk  = (Math.random() * 2) - 1;
      const op  = 0.7 + Math.random() * 0.3;
      const headsOrTails = Math.floor(Math.random() * 5) + 1;

      if (headsOrTails == 1) {
        tooltip.style.background = '#581616';
        tooltip.style.fontFamily = '"EnchantingTable"';
        tooltip.style.color = '#fff'
      } else  {
        tooltip.style.background = '';
        tooltip.style.fontFamily = '';
        tooltip.style.color = ''
      }

      tooltip.style.clip = `rect(${top}px, 9999px, ${bottom}px, 0)`;
      tooltip.style.transform = `translate(${tx}px, ${ty}px) skew(${sk}deg)`;
      tooltip.style.opacity   = op;
    }
    wrapper.addEventListener('mouseenter', () => {
      // start 60ms ticks of random glitch
      timerId = setInterval(randomGlitch, 60);
    });
    wrapper.addEventListener('mouseleave', () => {
      clearInterval(timerId);
      // reset styles
      tooltip.style.clip = '';
      tooltip.style.transform = '';
      tooltip.style.opacity = '';
      ['::before','::after'].forEach(sel => {
        const layer = tooltip.querySelector(sel);
        if (layer) layer.style.transform = '';
      });
    });
  });

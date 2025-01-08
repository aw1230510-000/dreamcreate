document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.fade-in-element');
  
  const onScroll = () => {
      elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
              element.classList.add('is-visible');
          }
      });
  };

  window.addEventListener('scroll', onScroll);
  onScroll(); // 初期表示時にもチェック
});
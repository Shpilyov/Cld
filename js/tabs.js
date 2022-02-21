document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs__link').forEach(function(tabsBtn) {
    console.log(tabsBtn)
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            console.log(path)

            document.querySelectorAll('tabs__content').forEach(function(tabContent) {
                tabContent.classList.remove('tabs__content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content-active')
        })
    })
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
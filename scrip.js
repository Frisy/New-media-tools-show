// 豆包桌面版下载页面交互功能

// 导航栏滚动效果
function initNavigationScroll() {
  const navigation = document.querySelector('.navigation-wrapper');
  if (!navigation) return;

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;
    
    // 根据滚动方向显示/隐藏导航栏
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      navigation.style.transform = 'translateY(-100%)';
    } else {
      navigation.style.transform = 'translateY(0)';
    }
    
    // 根据滚动位置调整背景透明度
    if (currentScrollY > 50) {
      navigation.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
      navigation.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    }
    
    lastScrollY = currentScrollY;
  });
}

// 文本轮播动画
function initTextCarousel() {
  const carouselTexts = [
    '帮我翻译下这张截图里的内容',
    '帮我把这篇 PDF 翻译成中文',
    '总结这个网页中的视频内容',
    '帮我快速修复这段代码',
    '帮我写一篇深刻独到的影评',
    '帮我润色下这篇文档'
  ];

  const carouselItem = document.querySelector('.carousel-item span');
  if (!carouselItem) return;

  let currentIndex = 0;

  function updateText() {
    carouselItem.style.opacity = '0';
    carouselItem.style.transform = 'translateY(10px)';
    
    setTimeout(function() {
      currentIndex = (currentIndex + 1) % carouselTexts.length;
      carouselItem.textContent = carouselTexts[currentIndex];
      carouselItem.style.opacity = '1';
      carouselItem.style.transform = 'translateY(0)';
    }, 300);
  }

  // 每3秒切换一次文本
  setInterval(updateText, 3000);

  // 添加过渡效果
  carouselItem.style.transition = 'all 0.3s ease';
}

// 功能特性切换
function initFeatureToggle() {
  // AI翻译功能切换
  const translateItems = document.querySelectorAll('#ai-translate .text-item');
  const translateImages = [
    'D:/桌面文件/素材/图12.png',
    'D:/桌面文件/素材/图10.png',
    'D:/桌面文件/素材/图11.png'
  ];
  
  for (let i = 0; i < translateItems.length; i++) {
    const item = translateItems[i];
    const index = i;
    
    item.addEventListener('click', function() {
      // 移除所有active类
      for (let j = 0; j < translateItems.length; j++) {
        translateItems[j].classList.remove('active');
      }
      
      // 添加当前active类
      item.classList.add('active');
      
      // 更新图片
      const img = document.querySelector('#ai-translate .card-img');
      if (img && translateImages[index]) {
        img.style.opacity = '0';
        setTimeout(function() {
          img.src = translateImages[index];
          img.style.opacity = '1';
        }, 200);
        img.style.transition = 'opacity 0.2s ease';
      }
    });
  }

  // 网页浏览功能切换
  const browsingItems = document.querySelectorAll('#browsing .text-item');
  const browsingImages = [
    'https://ext.same-assets.com/201931705/1201605526.png',
    'https://ext.same-assets.com/201931705/1201605526.png',
    'https://ext.same-assets.com/201931705/1201605526.png'
  ];
  
  for (let i = 0; i < browsingItems.length; i++) {
    const item = browsingItems[i];
    const index = i;
    
    item.addEventListener('click', function() {
      // 移除所有active类
      for (let j = 0; j < browsingItems.length; j++) {
        browsingItems[j].classList.remove('active');
      }
      
      // 添加当前active类
      item.classList.add('active');
      
      // 更新图片
      const img = document.querySelector('#browsing .card-img');
      if (img && browsingImages[index]) {
        img.style.opacity = '0';
        setTimeout(function() {
          img.src = browsingImages[index];
          img.style.opacity = '1';
        }, 200);
        img.style.transition = 'opacity 0.2s ease';
      }
    });
  }
}

// 平滑滚动到锚点
function initSmoothScroll() {
  const navItems = document.querySelectorAll('.view-item');
  
  for (let i = 0; i < navItems.length; i++) {
    const item = navItems[i];
    const index = i;
    
    item.addEventListener('click', function() {
      const targets = ['#desktop-assistant', '#ai-translate', '#browsing', '#ai-search', '#more-feature'];
      const targetId = targets[index];
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
}

// 按钮点击效果
function initButtonEffects() {
  const buttons = document.querySelectorAll('.main-button');
  
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    
    button.addEventListener('click', function() {
      // 添加点击动画
      button.style.transform = 'scale(0.98)';
      setTimeout(function() {
        button.style.transform = '';
      }, 150);
      
      // 模拟下载动作
      console.log('开始下载豆包电脑版...');
      
      // 这里可以添加实际的下载逻辑
      // window.open('download-link', '_blank');
    });
  }
}

// 滚动显示动画
function initScrollAnimations() {
  // 检查是否支持 IntersectionObserver
  if (!window.IntersectionObserver) {
    return;
  }
  
  const observer = new IntersectionObserver(function(entries) {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    }
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // 观察所有卡片和功能区域
  const animateElements = document.querySelectorAll('.card, .features-card, .feature-card, .ai-search');
  for (let i = 0; i < animateElements.length; i++) {
    const el = animateElements[i];
    el.classList.add('animate-element');
    observer.observe(el);
  }
}

// 初始化所有功能
function init() {
  // 等待DOM加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializeApp();
    });
  } else {
    initializeApp();
  }
}

function initializeApp() {
  initNavigationScroll();
  initTextCarousel();
  initFeatureToggle();
  initSmoothScroll();
  initButtonEffects();
  initScrollAnimations();
  
  console.log('豆包桌面版下载页面初始化完成');
}

// 启动应用
init();

const loading = {
    container: document.querySelector(".loading"),
    in(target) {
        this.container.classList.remove("loading_out");
        setTimeout(() => {
            window.location.href = target;
        }, 1000)
    },
    out() {
        this.container.classList.add("loading_out");
    }
};

// 为功能区块添加动画效果
function showFeatureCards() {
  const title = document.querySelector('.more-feature-content .title');
  const desc = document.querySelector('.more-feature-content .desc');
  const cards = document.querySelectorAll('.feature-card');
  
  // 移除所有元素的show类
  title.classList.remove('show');
  desc.classList.remove('show');
  cards.forEach(card => card.classList.remove('show'));
  
  // 触发重排
  void title.offsetWidth;
  
  // 先显示文字
  setTimeout(() => {
    title.classList.add('show');
    desc.classList.add('show');
  }, 50);
  
  // 然后显示卡片（通过CSS中的延迟实现）
  setTimeout(() => {
    cards.forEach(card => card.classList.add('show'));
  }, 50);
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  // 初始显示卡片动画
  showFeatureCards();
});
// 在script.js中修改showFeatureCards函数
function showFeatureCards() {
  // 选择所有页面的标题和描述
  const titles = document.querySelectorAll('.more-feature-content .title');
  const descs = document.querySelectorAll('.more-feature-content .desc');
  const cards = document.querySelectorAll('.feature-card');
  
  // 重置所有元素状态
  titles.forEach(title => title.classList.remove('show'));
  descs.forEach(desc => desc.classList.remove('show'));
  cards.forEach(card => card.classList.remove('show'));
  
  // 触发重排
  void titles[0].offsetWidth;
  
  // 依次显示每个页面的标题、描述和卡片
  titles.forEach((title, index) => {
    setTimeout(() => {
      title.classList.add('show');
      if (descs[index]) descs[index].classList.add('show');
    }, 50 + index * 200); // 每个页面延迟200ms，避免重叠
  });
  
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('show');
    }, 500 + index * 100);
  });
}

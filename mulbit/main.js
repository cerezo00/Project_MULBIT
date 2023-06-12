'use strict';

// ! navbar scroll
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.closest('button').dataset.link;
  const elem = document.querySelector(link);
  elem.scrollIntoView({ behavior: 'smooth' });
});
const navbar = document.querySelector('#navbar');
navbar.style.opacity = 0;
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    navbar.style.opacity = 1;
  } else {
    navbar.style.opacity = 0;
  }
});

// ! header scroll
const toMyPage = document.querySelector('.header__user-icon');
toMyPage.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.closest('button').dataset.link;
  const elem = document.querySelector(link);
  elem.scrollIntoView({ behavior: 'smooth' });
});

// ! header color change
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// ! home scroll
const homeBtns = document.querySelectorAll('.home__btn');
homeBtns.forEach((homeBtn) => {
  homeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;
    const link = target.closest('a').getAttribute('href');
    const elem = document.querySelector(link);
    elem.scrollIntoView({ behavior: 'smooth' });
  });
});

// ! Local Water
const track2 = document.querySelector('#local-water .slider-track');
const slides2 = document.querySelectorAll('#local-water .slider-slide');
const dots2 = document.querySelectorAll('#local-water .slider-dot');
let j;

const reset2 = () => dots2.forEach((dot) => dot.classList.remove('active'));

function slideTo2(n) {
  track2.style.transform = `translateX(-${n * slides2[0].offsetWidth}px)`;
  reset2();
  dots2[n].classList.add('active');
}

function activateArrows2(direction) {
  direction === 'right' ? j++ : j--;
  if (j < 0) j = 0;
  if (j > slides2.length - 1) j = slides2.length - 1;
  slideTo2(j);
}

function activateDots2(e) {
  j = e.target.dataset.index;
  slideTo2(j);
}

function activate2(e) {
  e.target.matches('#local-water .slider-dot') && activateDots2(e);
  e.target.matches('#local-water .arrow-right') && activateArrows2('right');
  e.target.matches('#local-water .arrow-left') && activateArrows2();
}

function init2(n) {
  j = n;
  slideTo2(n);
}

document.addEventListener('click', activate2, false);
window.addEventListener('load', () => init2(slides2.length - 1), false);

// !! my water chart
//chart 손보겠어요... 일단...이렇게 급한대로
var options1 = {
  series: [
    {
      name: '소비량',
      data: [6880, 4743, 7500, 6890, 8140, 8400],
    },
  ],
  chart: {
    width: 800,
    height: 400,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + 'L';
    },
    offsetY: -20,
    style: {
      fontSize: '15px',
      colors: ['#304758'],
    },
  },
  xaxis: {
    title: {
      text: '2022 💧',
      offsetY: -30,
      style: {
        fontSize: '18px',
      },
    },
    categories: ['1월', '2월', '3월', '4월', '5월', '6월'],
    position: 'top',
    labels: {
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + 'L';
      },
    },
  },
  title: {
    text: '2022 💧',
    floating: true,
    offsetY: 470,
    align: 'center',
    style: {
      color: '#444',
      fontSize: '18px',
    },
    margin: 15,
  },
};
const chart1 = new ApexCharts(document.querySelector('#chart1'), options1);
chart1.render();

var options2 = {
  series: [
    {
      name: '소비량',
      data: [9700, 11200, 10045, 7150, 8247, 6790],
    },
  ],
  chart: {
    width: 800,
    height: 400,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + 'L';
    },
    offsetY: -20,
    style: {
      fontSize: '15px',
      colors: ['#304758'],
    },
  },
  xaxis: {
    title: {
      text: '2022 💧',
      offsetY: -30,
      style: {
        fontSize: '18px',
      },
    },
    categories: ['7월', '8월', '9월', '10월', '11월', '12월'],
    position: 'top',
    labels: {
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + 'L';
      },
    },
  },
  title: {
    text: '2022 💧',
    floating: true,
    offsetY: 470,
    align: 'center',
    style: {
      color: '#444',
      fontSize: '18px',
    },
    margin: 15,
  },
};
const chart2 = new ApexCharts(document.querySelector('#chart2'), options2);
chart2.render();

var options3 = {
  series: [
    {
      name: '소비량',
      data: [4880, 6743, 7500, 7890, 6840, 9400],
    },
  ],
  chart: {
    width: 800,
    height: 400,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + 'L';
    },
    offsetY: -20,
    style: {
      fontSize: '15px',
      colors: ['#304758'],
    },
  },
  xaxis: {
    title: {
      text: '2023 💧',
      offsetY: -30,
      style: {
        fontSize: '18px',
      },
    },
    categories: ['1월', '2월', '3월', '4월', '5월', '6월'],
    position: 'top',
    labels: {
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + 'L';
      },
    },
  },
  title: {
    text: '2023 💧',
    floating: true,
    offsetY: 470,
    align: 'center',
    style: {
      color: '#444',
      fontSize: '18px',
    },
    margin: 15,
  },
};
const chart3 = new ApexCharts(document.querySelector('#chart3'), options3);
chart3.render();

// !! my water slide
const track = document.querySelector('#my-water .slider-track');
const slides = document.querySelectorAll('#my-water .slider-slide');
const dots = document.querySelectorAll('#my-water .slider-dot');
let i;

const reset = () => dots.forEach((dot) => dot.classList.remove('active'));

function slideTo(n) {
  track.style.transform = `translateX(-${n * slides[0].offsetWidth}px)`;
  reset();
  dots[n].classList.add('active');
}

function activateArrows(direction) {
  direction === 'right' ? i++ : i--;
  if (i < 0) i = 0;
  if (i > slides.length - 1) i = slides.length - 1;
  slideTo(i);
}

function activateDots(e) {
  i = e.target.dataset.index;
  slideTo(i);
}

function activate(e) {
  e.target.matches('#my-water .slider-dot') && activateDots(e);
  e.target.matches('#my-water .arrow-right') && activateArrows('right');
  e.target.matches('#my-water .arrow-left') && activateArrows();
}

function init(n) {
  i = n;
  slideTo(n);
}

document.addEventListener('click', activate, false);
window.addEventListener('load', () => init(slides.length - 1), false);

// !! MULBIT COIN animation

const coinImg = document.querySelector('.coinImg');
const coinImgContainer = document.querySelector('.coin__content__img');
const coinContentText = document.querySelector('.coin__content__text');

const showCoinText = () => {
  // coinContentText.classList.add("fadeIn")
  coinContentText.style.opacity = 1;
  coinContentText.style.animation = 'fadeIn 1s ease forwards';
};

const handleAnimationCircle = () => {
  const coinImgContainerWidth = coinImgContainer.offsetWidth;
  const coinImgWidth = coinImg.offsetWidth;
  const coinImgLeft = coinImg.getBoundingClientRect().left;
  const coinImgMarginLeft =
    (coinImgContainerWidth - coinImgWidth) / 2 - coinImgLeft;
  if (coinImgMarginLeft > 0) {
    coinImg.style.marginLeft = `${coinImgMarginLeft}px`;
  } else {
    coinImg.classList.add('paused');
    showCoinText();
  }
};
coinImg.addEventListener('animationiteration', handleAnimationCircle);

// !! ai 솔루션 탭 전환
$(document).ready(function () {
  $('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $('#' + tab_id).addClass('current');
    $('.tab-content current').fadeIn(3000);
  });
});

// !! 마이페이지
$(function () {
  $('.mytab-content > div').hide();
  $('.mytab-menu a')
    .click(function () {
      $('.mytab-content > div').hide().filter(this.hash).fadeIn();
      $('.mytab-menu a').removeClass('active');
      $(this).addClass('active');
      return false;
    })
    .filter(':eq(0)')
    .click();
});

// ! arrow-up
const arrowUp = document.querySelector('.arrow-up');
const homeHeight = document.querySelector('#home').offsetHeight;
arrowUp.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
arrowUp.style.opacity = 0;
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

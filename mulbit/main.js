'use strict';

// 나의 수도 소비량 차트
var options = {
  series: [
    {
      name: '소비량',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6],
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

var chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();

// navbar 스크롤링
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  const elem = document.querySelector(link);
  elem.scrollIntoView({ behavior: 'smooth' });
});

// 헤더 마이페이지 스크롤링
const toMyPage = document.querySelector('.header__user-icon');
toMyPage.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  const elem = document.querySelector(link);
  elem.scrollIntoView({ behavior: 'smooth' });
});

// 헤더 투명도 조절
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// 홈 스크롤링
const homeBtns = document.querySelectorAll('.home__btn');
homeBtns.forEach((homeBtn) => {
  homeBtn.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    const elem = document.querySelector(link);
    elem.scrollIntoView({ behavior: 'smooth' });
  });
});

///ai 솔루션 탭 전환
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

// 마이페이지
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

// $(function () {
//   $('.tab-content > div').hide();
//   $('.tab-menu a')
//     .click(function () {
//       $('.tab-content > div').hide().filter(this.hash).fadeIn();
//       $('.tab-menu a').removeClass('active');
//       $(this).addClass('active');
//       return false;
//     })
//     .filter(':eq(0)')
//     .click();
// });

// .prevbtn, .nextbtn 클릭시 .local-water__content 변경
$(document).ready(function () {
  $('.local-water__content').first().addClass('active');
  $('.local-water__content').hide();
  $('.active').show();

  $('#local-water__nextbtn').click(function () {
    $('.active').removeClass('active').addClass('oldActive');
    if ($('.oldActive').is(':last-child')) {
      $('.local-water__content').first().addClass('active');
    } else {
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.local-water__content').hide();
    $('.active').show();
  });

  $('#local-water__prevbtn').click(function () {
    $('.active').removeClass('active').addClass('oldActive');
    if ($('.oldActive').is(':first-child')) {
      $('.local-water__content').last().addClass('active');
    } else {
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.local-water__content').hide();
    $('.active').show();
  });
});

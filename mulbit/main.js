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

// Handle scrolling when tapping on the navbar menu
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

// 홈 스크롤링
const homeCard = document.querySelector('.home__card');
homeCard.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  const elem = document.querySelector(link);
  elem.scrollIntoView({ behavior: 'smooth' });
});

// 마이페이지
$(function () {
  $('.tab-content > div').hide();
  $('.tab-menu a')
    .click(function () {
      $('.tab-content > div').hide().filter(this.hash).fadeIn();
      $('.tab-menu a').removeClass('active');
      $(this).addClass('active');
      return false;
    })
    .filter(':eq(0)')
    .click();
});

const infoBtn = document.getElementById('infoBtn');
const walletBtn = document.getElementById('walletBtn');
const infoContent = document.getElementById('infoContent');
const walletContent = document.getElementById('walletContent');

infoBtn.addEventListener('click', function () {
  infoContent.style.display = 'block';
  infoContent.style.opacity = '1';
  walletContent.style.display = 'none';
  walletContent.style.opacity = '0';
});

walletBtn.addEventListener('click', function () {
  walletContent.style.display = 'block';
  walletContent.style.opacity = '1';
  infoContent.style.display = 'none';
  infoContent.style.opacity = '0';
});

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

// 내 지갑 바로 가기 버튼
const toMyWallet = document.querySelector('#to-my-wallet');
toMyWallet.addEventListener('click', () => {
  const scrollTo = document.querySelector('#my-page');
  scrollTo.scrollIntoView({ behavior: 'smooth' });
});

//navbar 스크롤 이벤트
// ! 아이콘을 클릭하면 안되고 그 주변을 클릭해야 스크롤이 됨. 이상함.
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {
  if (event.target.dataset.link) {
    event.preventDefault();
    const targetId = event.target.dataset.link;
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// 좌우 버튼 클릭 시 내용 업데이트하기
// const prevBtn = document.querySelector('.prevbtn');
// const nextBtn = document.querySelector('.nextbtn');
// const localWaterLeft = document.querySelector('.local-water__left');
// const localWaterRight = document.querySelector('.local-water__right');

// function updateLocalWater() {
//   // AJAX 요청 보내기
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'url/to/server/data');
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       // 서버에서 받은 데이터를 가지고 HTML 생성하기
//       const data = JSON.parse(xhr.responseText);
//       const leftHTML = `<img src="${data.leftImageUrl}" alt="${data.leftImageAlt}" />`;
//       const rightHTML = `
//         <h2>${data.title}</h2>
//         <h3>${data.subtitle}</h3>
//       `;
//       // 생성된 HTML을 요소의 innerHTML 속성에 할당하여 내용 업데이트하기
//       localWaterLeft.innerHTML = leftHTML;
//       localWaterRight.innerHTML = rightHTML;
//     } else {
//       console.error('Error fetching data');
//     }
//   };
//   xhr.send();
// }

// prevBtn.addEventListener('click', updateLocalWater);
// nextBtn.addEventListener('click', updateLocalWater);
// const prevBtn = document.querySelector('.prevbtn button');
// const nextBtn = document.querySelector('.nextbtn button');
// const image = document.querySelector('#local-water img');
// const title = document.querySelector('#local-water h2');
// const subtitle = document.querySelector('#local-water h3');

// let month = 5; // 초기값은 5월로 설정

// prevBtn.addEventListener('click', handlePrevBtnClick);
// nextBtn.addEventListener('click', handleNextBtnClick);

// function handlePrevBtnClick() {
//   month--;
//   fetchData(month);
// }

// function handleNextBtnClick() {
//   month++;
//   fetchData(month);
// }

// function fetchData(month) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', `/data?month=${month}`);
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       const data = JSON.parse(xhr.responseText);
//       image.src = data.image;
//       title.textContent = `${month}월 ${data.title}`;
//       subtitle.textContent = data.subtitle.replace('위험', '안전');
//     } else {
//       console.error('Error:', xhr.statusText);
//     }
//   };
//   xhr.send();
// }

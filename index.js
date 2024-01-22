  // 读取json文件, 拿到里面的数据

  const btn = document.querySelector('.btn');
  const card = document.querySelector('.card');
  const long = document.getElementById('logo');
  const greetings = document.querySelector('.greetings');


  btn.addEventListener('click', function () {
      card.classList.toggle('flip');
  });

  // 获取新年文案的方法
  const getGreet = async () => {
      const res = await fetch('./assets/data.json');
      const data = await res.json();
      //   随机取出data的某一项
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomtext = data[randomIndex].text;

      return randomtext
  }

  // 插入新年文案
  const insertText = async () => {
      greetings.innerHTML = await getGreet();
  }

  // 点击龙切换祝福语
  long.addEventListener('click', function () {
      // 插入文本
      insertText()
      // 发出音效
      var audio = new Audio();
      audio.src = './assets/long.mp3';
      audio.autoplay = true;

  })
  function captureAndSave() {
      console.log(1);
      const targetElement = document.getElementById('target');

      html2canvas(targetElement).then(function (canvas) {
          canvas.toBlob(function (blob) {
              // 使用 FileSaver.js 保存 Blob 对象到本地文件
              saveAs(blob, 'screenshot.png');
          });
      });
  }
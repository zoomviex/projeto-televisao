const tela = document.querySelector(".tv--screen");
const displayVol = document.querySelector(".info-vol-display");
const displayChn = document.querySelector(".info-chn-display");

let isPower = false;
let channel = 1;
let volume = 0;

const channelInfo = [
  {
    channel: 1,
    image:
      "url(https://i.pinimg.com/originals/9f/f1/55/9ff155b8e49d5e48fcaf14cc7365c720.gif)",
  },
  {
    channel: 2,
    image: "url(https://i.makeagif.com/media/9-25-2015/Rm_mcZ.gif)",
  },
  {
    channel: 3,
    image: "url(https://media1.giphy.com/media/oESgZ6uNs9xgQulYiK/giphy.gif)",
  },
  {
    channel: 4,
    image:
      "url(https://i.gifer.com/origin/0b/0ba2a8bddd05276cc46a60a586def718.gif)",
  },
  {
    channel: 5,
    image:
      "url(https://64.media.tumblr.com/b65b71ba3d2502a13240863fcbb39fe5/a377ea866ef7130e-86/s540x810/7eeab75df7b5b34889eb20e6ab880e26be5b6bb1.gif)",
  },
  {
    channel: 6,
    image:
      "url(https://media.tenor.com/4Kf6rwnlU-4AAAAC/guitar-anime-guitar.gif",
  },
  {
    channel: 7,
    image: "url(https://data.whicdn.com/images/295630510/original.gif)",
  },
  {
    channel: 8,
    image: "url(https://i.gifer.com/DbN.gif)",
  },
  {
    channel: 9,
    image:
      "url(https://64.media.tumblr.com/1e89ced13c29cf66f0fe23352bf30bb6/tumblr_moajifdbu31qeoe6zo2_500.gif)",
  },
  {
    channel: 10,
    image:
      "url(https://i.pinimg.com/originals/58/a6/59/58a6590300bcdebcaa97a93f742d516a.gif)",
  },
  {
    channel: 11,
    image:
      "url(https://media.tenor.com/qbLFlt_O0UQAAAAd/kimi-ni-nowa-your-name.gif)",
  },
  {
    channel: 12,
    image:
      "url(https://gifimage.net/wp-content/uploads/2017/09/anime-sunset-gif-5.gif)",
  },
  {
    channel: 13,
    image:
      "url(https://media1.tenor.com/images/1ff2eaa719725f41116ef7a2e6d81d0b/tenor.gif?itemid=4724980)",
  },
  {
    channel: 14,
    image:
      "url(http://78.media.tumblr.com/0ab602b708b22093a4e9989a4498bbdb/tumblr_p1uvzudrPx1rad1dao1_500.gif)",
  },
];

let channelsChange = channelInfo.lastIndex("");

// Power //
function power() {
  if (!isPower) {
    let lastChannel = localStorage.getItem("lastChannel");
    if (lastChannel) {
      channel = parseInt(lastChannel);
    } else {
      channel = 1;
      tela.style.backgroundImage = channelInfo[0].image;
    }
    channelInfo.forEach((info) => {
      if (info.channel == channel) {
        tela.style.backgroundImage = info.image;
      }
    });
    displayChn.innerHTML = `<i class="fa-solid fa-caret-right"
      style="background-image: linear-gradient(to bottom,#000000,#444141,#000000)">
         Channel ${channel}
      </i>`;
    isPower = true;
    setTimeout(() => {
      displayChn.innerHTML = " ";
    }, 1000);
  } else {
    localStorage.setItem("lastChannel", channel);
    tela.style.backgroundImage = "";
    isPower = false;
    displayChn.innerHTML = " ";
    displayVol.innerHTML = " ";
  }
}

// Channel //
function channelUp() {
  if (isPower) {
    channel++;
    if (channel > channelInfo.length) {
      channel = 1;
    }
    channelInfo.forEach((info) => {
      if (info.channel == channel) {
        displayChn.innerHTML = `<i class="fa-solid fa-caret-right"
             style="background-image: linear-gradient(to bottom,#000000,#444141,#000000)">
             Channel ${info.channel}
         </i>`;
        tela.style.backgroundImage = info.image;
        setTimeout(() => {
          displayChn.innerHTML = " ";
        }, 2000);
      }
    });
  }
}

function channelDown() {
  if (isPower) {
    channel--;
    if (channel < 1) {
      channel = 14;
    }
    channelInfo.forEach((info) => {
      if (info.channel == channel) {
        tela.style.backgroundImage = info.image;

        setTimeout(() => {
          displayChn.innerHTML = " ";
        }, 2000);
      }
    });
  }
}

// Volume //
function volumeUp() {
  if (isPower) {
    if (volume < 50) {
      volume += 5;
      displayVol.innerHTML = `<i class="fa-solid fa-volume-low" style="background-image: linear-gradient(to bottom,#000000,#444141,#000000)">  ${volume}</i>`;
      setTimeout(() => {
        displayVol.innerHTML = " ";
      }, 2000);
    } else if (volume < 100) {
      volume += 5;
      displayVol.innerHTML = `<i 
            class="fa-solid fa-volume-high" 
            style="background-image: linear-gradient(to bottom,#000000,#444141,#000000)"> 
            ${volume}
          </i>`;
      setTimeout(() => {
        displayVol.innerHTML = " ";
      }, 2000);
    }
  }
}

function volumeDown() {
  if (isPower) {
    if (volume >= 5) {
      volume -= 5;
      displayVol.innerHTML = `<i 
            class="fa-solid fa-volume-low" 
            style="background-image: linear-gradient(to bottom,#000000,#444141,#000000)"> 
            ${volume}
         </i>`;
      setTimeout(() => {
        displayVol.innerHTML = " ";
      }, 2000);
    } else {
      displayVol.innerHTML = `<i class="fa-solid fa-volume-mute" 
            style="background-image: linear-gradient(to bottom,#000000,#444141,#000000)">
          </i>`;
      setTimeout(() => {
        displayVol.innerHTML = " ";
      }, 2000);
    }
  }

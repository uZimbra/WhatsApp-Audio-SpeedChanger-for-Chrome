const times = ["1", "1.25", "1.5", "1.75", "2"];

let timesSelector = 0;

const interval = setInterval(() => {
  const header = document.querySelector("._3auIg");

  if (header) {
    clearInterval(interval);

    const button = document.createElement("button");

    button.innerHTML = "1x";
    button.classList.add("SpeedButton");

    header.appendChild(button);

    button.addEventListener("click", () => {
      timesSelector++;

      if (timesSelector > 4) {
        timesSelector = 0;
      }

      button.innerHTML = `${times[timesSelector]}x`;

      const audios = document.querySelectorAll("audio");

      audios.forEach((audio) => {
        audio.playbackRate = Number(times[timesSelector]);
      });
    });
  }
}, 1000);
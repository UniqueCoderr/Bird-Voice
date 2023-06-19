const nme = ["Bird_1", "Bird_2", "Bird_3", "Bird_4", "Bird_5", "Bird_6"]

const container = document.querySelector(".container")

nme.forEach(nme => {
    const btnEl = document.createElement("button")
    btnEl.classList.add("btn")
    btnEl.innerText = nme
    btnEl.style.backgroundImage = "url(Images/" + nme + ".jpg)"
    container.appendChild(btnEl)
    const audioEl = document.createElement("audio")
    container.appendChild(audioEl)
    audioEl.src = "Audio/" + nme + ".wav"
    btnEl.addEventListener("click", () => {
        audioEl.play() 
        btnEl.style.transform = "scale(0.9)"
        setTimeout(() => {
            btnEl.style.transform = "scale(1)"
        }, 300)
        setTimeout(() => {
            audioEl.pause(); 
            audioEl.currentTime =0;
            }, 2000);
    })
    window.addEventListener("keydown", (event) => {
        if (event.key == nme.slice(5, 6)) {
            audioEl.play()
            btnEl.style.transform = "scale(0.9)"
            setTimeout(() => {
                btnEl.style.transform = "scale(1)"
            }, 300)

            setTimeout(() => {
            audioEl.pause(); 
            audioEl.currentTime =0;
            }, 2000);
        }
    })

});
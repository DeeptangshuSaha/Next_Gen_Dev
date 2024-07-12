const modal = document.getElementById("modalWrapper")
const myBtn = document.getElementById("Btn")
const scrollContainer = document.getElementById("techStackModal");
const myGithub = 'https://api.github.com/users/DeeptangshuSaha/repos'
const projectWrapper = document.getElementById("projects")
// const projectOut = document.getElementById("projectItem")
myBtn.onclick = function (){
    modal.style.display = 'block'
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

// scroller.bind("mousewheel",function(ev, delta) {
//     let scrollTop = this.scrollTop();
//     this.scrollTop(scrollTop-Math.round(delta));
// });

async function gitFetch() {
    let repo = await fetch(myGithub,{method: "GET"})
    repo = await repo.json()
    for (let i = 0; i<6; i++) {
        projectWrapper.innerHTML += `
        <div class="projectItem">
        <img src="./D/notebook.svg" width="30px"/>
        <a href='${repo[i].html_url}' target="_blank">${repo[i].name}</a>
<!--        <p>Size: ${repo[i].size}</p>-->
        </div>`
    }
    projectWrapper.innerHTML += `<a href='https://github.com/DeeptangshuSaha?tab=repositories' target="_blank">All Repositories</a>`
}

gitFetch()
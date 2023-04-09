document.querySelectorAll('.proj-container').forEach((proj, i)=>{
    proj.style.animationDelay = `${0.075*i}s`;
})

function activate(section){
    // Update active nav link
    document.querySelector('.active-link').classList.remove('active-link');
    document.querySelector(`#${section}-link`).classList.add('active-link');

    // Update section visibility
    let activeSection = document.querySelector('.active-section');
    let newSection = document.querySelector(`#${section}-section`);
    if(activeSection == newSection) return;
    activeSection.style.animation = "fadeOut .25s forwards";
    setTimeout(()=>{
        activeSection.classList.remove('active-section');
        newSection.classList.add('active-section');
        newSection.style.animation = "fadeIn .25s forwards";
    }, 250)
}
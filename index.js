// document.querySelectorAll('.proj-container').forEach((proj, i)=>{
//     proj.style.animationDelay = `${0.075*i}s`;
// })
document.querySelector('iframe').src = window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/Resume.pdf'

let projectData = {
    0: {
        title: 'Electrocardiogram Monitor',
        date: 'March 2023 - [Current]',
        content: 
            `
                <div style="display: flex; align-items: center;">
                    <img style="width: 300px;" src="https://media.licdn.com/dms/image/C4E03AQHYMXNqBgjBkg/profile-displayphoto-shrink_400_400/0/1627411173519?e=1686787200&v=beta&t=TUitufMXm6aEpd6r4hdnSkDVnEl841kYl9GJP8k6wZQ"/>
                    <p style="margin-left: 10px;">Hello I am a student and I study a lot!</p>   
                </div>
            `
    },
    1: {
        title: 'Pulse Oximeter Device',
        date: 'March 2023 - [Current]',
        content: `<p>Nothing here yet</p>`
    },
    2: {
        title: 'Heat Stroke Detection Device',
        date: 'August 2022 - November 2022',
        content: `<p>Nothing here yet</p>`
    },
    3: {
        title: 'Valvular Heart Disease Literature Review',
        date: 'August 2022 - November 2022',
        content: `<p>Nothing here yet</p>`
    },
}

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

function selectProject(id){
    let grid = document.querySelector('.proj-grid')
    let view = document.querySelector('.project-view')
    let title = document.querySelector('.project-view .project-view-title')
    let date = document.querySelector('.project-view .project-view-date')
    let content = document.querySelector('.project-view .project-view-content')
    grid.style.animation = "fadeOut .25s forwards";
    title.innerHTML = projectData[id].title;
    date.innerHTML = projectData[id].date;
    content.innerHTML = projectData[id].content;
    setTimeout(()=>{
        grid.style.display = 'none';
        view.style.animation = "fadeIn .25s forwards";
        view.style.display = 'block';
    }, 250)
}

function resetProjectView(){
    let view = document.querySelector('.project-view')
    let grid = document.querySelector('.proj-grid')
    grid.style.animation = "fadeIn .25s forwards";
    grid.style.display = 'grid';
    view.style.display = 'none';
}
(async function render() {
    await loadRoadmapJson();
})();

async function loadRoadmapJson() {
    try {
        const resp = await fetch("index.json");
        if (resp.ok) {
            const roadmaps = await resp.json();
            roadmaps.forEach((roadmapStep, index) => {
                let justifySide = index % 2 == 0 ? 'start' : 'end';
                justifySide = justifySide == 'start' ? 1 : 2
                
                let animationDelay = 1;
                
                createStep(roadmapStep, justifySide, animationDelay);

                if (animationDelay < 3) animationDelay++;
                
                if (roadmapStep.additionalContents) {
                    roadmapStep.additionalContents.forEach(nextContent => {
                        createStep(nextContent, justifySide, animationDelay);
                        
                        if (animationDelay < 3) animationDelay++;
                    });
                }
            });
        }
    } catch (error) {
        console.log(`Erro ao carregar o arquivo JSON de Roadmap: ${error}`);
    }
}

function createStep(content, justify, delay) {
    const htmlTemplate = `
        <div class="row row-${justify} animate pop delay-${delay}">
            <section>
            ${createIconIfNecessary(content.iconClasses)}
            ${createTitleIfNecessary(content.name)}
            ${createDescriptionIfNecessary(content.description)}
            ${createLinkIfNecessary(content.link)}
            </section>
        </div>
    `;

    // https://stackoverflow.com/a/35385518
    var template = document.createElement('template');
    template.innerHTML = htmlTemplate.trim();
    const step = template.content.firstChild;

    document.querySelector(".roadmap-steps").appendChild(step);
}

function createIconIfNecessary(icons) {
    return icons ? `<i class="icon ${icons}"></i>` : '';
}

function createTitleIfNecessary(title) {
    return title ? `<div class="details"><span class="title">${title}</span></div>` : '';
}

function createDescriptionIfNecessary(description) {
    return description ? `<p>${description}</p>` : '';
}

function createLinkIfNecessary(link) {
    return link ? `<div class="bottom"><a href="${link}" target="_blank">Saiba Mais</a></div>` : '';
}
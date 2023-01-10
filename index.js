(async function render() {
    try {
        const resp = await fetch("fontend/beginners/roadmap.json");
        if (resp.ok) {
            const roadmap = await resp.json();
            createStep(roadmap, 'start');
        }
    } catch (erro) {
        console.log(`Erro ao carregar o arquivo JSON de Roadmap: ${error}`);
    }
})();

function createStep(content, justify) {
    const htmlTemplate = `
        <div class="row row-${justify == 'start' ? 1 : 2}">
            <section>
            <i class="icon ${content.iconClasses}"></i>
            <div class="details">
                <span class="title">${content.name}</span>
            </div>
            <p>${content.description || ''}</p>
            ${createLinkIfNecessary(content.link)}
            </section>
        </div>
    `;

    // https://stackoverflow.com/a/35385518
    var template = document.createElement('template');
    template.innerHTML = htmlTemplate.trim();
    const step = template.content.firstChild;

    document.querySelector(".wrapper").appendChild(step);

    if (content.nextSteps) {
        content.nextSteps.forEach(nextContent => {
            createStep(nextContent, justify == 'start' ? 'end' : 'start');
        });
    }
}

function createLinkIfNecessary(link) {
    return link ? `<div class="bottom"><a href="${link}" target="_blank">Saiba Mais</a></div>` : '';
}
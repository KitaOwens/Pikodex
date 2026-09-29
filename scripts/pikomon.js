import {pikobase} from './database.js'

export const pikomon = () => {
    let pikoHTML = '';
   
    for (const piko of pikobase) {
        pikoHTML += `
            <article class="piko-card">
                <div>
                    <img src="${piko.imageUrl}" alt="${piko.name}" class="piko-img">
                </div>
                <div class="piko-info">
                    <h2 class="piko-name">${piko.name}</h2>
                    <p class="info-text">
                        <p>category: ${piko.category}</p>
                        <p>abilities: ${piko.abilities}</p>
                        <p>weakness: ${piko.weakness}</p>
                    </p>
                </div>
            </article>
        `;
    }
    return pikoHTML
}


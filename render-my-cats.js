export function renderMyCats(catItem) {
    const catEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const colorEl = document.createElement('p');

    catEl.classList.add = 'cats';

    
    nameEl.textContent = catItem.name;
    ageEl.textContent = catItem.age;
    colorEl.textContent = catItem.color;

    catEl.append(nameEl, ageEl, colorEl);

    return catEl;
}
export function renderHomegood(homegoodItem) {
    const homegoodEl = document.createElement('div');
    const typeEl = document.createElement('p');
    const purposeEl = document.createElement('p');
    const makerEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const ageEl = document.createElement('p');

    homegoodEl.classList.add('homegood');
    makerEl.classList.add('maker');

    typeEl.textContent = homegoodItem.type;
    purposeEl.textContent = homegoodItem.purpose;
    nameEl.textContent = homegoodItem.maker.name;
    ageEl.textContent = homegoodItem.maker.age;

    homegoodEl.append(typeEl, purposeEl, makerEl);
    makerEl.append(nameEl, ageEl);

    return homegoodEl;
    
}
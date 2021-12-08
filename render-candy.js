export function renderCandy(candyItem) {
    const div = document.createElement('div');

    div.classList.add('candy');
    div.textContent = candyItem;

    return div;
}

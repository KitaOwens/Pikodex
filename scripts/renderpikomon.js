export const renderPikomon = (pikoHTML) => {
    const pikomon = document.getElementById('pikolist');

    if (pikomon) {
        pikomon.innerHTML = pikoHTML;
    }
    else {
        console.error('oops');
    }
}

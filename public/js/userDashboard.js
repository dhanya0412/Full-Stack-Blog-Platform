function showActiveClass(id) {
    document.querySelectorAll('.Container').forEach(section => {

        if (section.classList.contains('d-flex')) {
            section.classList.remove('d-flex');
            section.classList.add('d-none');

        }

    })
    document.getElementById(id).classList.remove("d-none");
    document.getElementById(id).classList.add("d-flex");
}


function searchBlogs() {
    const searchTerm = document.querySelector('input[name="search"]').value.toLowerCase();

    const allSection = document.getElementById('allBlogs');
    const mySection = document.getElementById('myBlogs');

    const visibleSection = allSection.classList.contains('d-flex') ? allSection : mySection;
    const cards = visibleSection.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


const items = document.querySelectorAll('.dropdown-item');
items.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedVal = item.getAttribute('data-value');

        const allSection = document.getElementById('allBlogs');
        const mySection = document.getElementById('myBlogs');

        const visibleSection = allSection.classList.contains('d-flex') ? allSection : mySection;
        const cards = visibleSection.querySelectorAll('.card');

        cards.forEach(card => {
            const theme = card.getAttribute('data-theme');
            if (selectedVal === 'All' || selectedVal === theme) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });





    })
})


function showSidebar() {
    const sidebar = document.querySelector('.buttons');
    sidebar.style.display = 'flex';

}

function closeSidebar() {
    const sidebar = document.querySelector('.buttons');
    sidebar.style.display = 'none';

}

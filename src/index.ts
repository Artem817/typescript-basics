interface User {
    id: number;
    name: string;
    email: string;
    company: {
        name: string;
    };
}

const modal = document.getElementById('my-modal') as HTMLDivElement;
const openBtn = document.getElementById('open-modal-btn') as HTMLButtonElement;
const closeBtn = document.getElementById('close-modal-btn') as HTMLSpanElement;
const header = document.getElementById('main-header') as HTMLElement;
const userList = document.getElementById('user-list') as HTMLUListElement;

function openModal(): void {
    modal.classList.add('show');
}

function closeModal(): void {
    modal.classList.remove('show');
}

if (openBtn) openBtn.addEventListener('click', openModal);
if (closeBtn) closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event: MouseEvent) => {
    if (event.target === modal) {
        closeModal();
    }
});


window.addEventListener('scroll', (): void => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


async function fetchUsers(): Promise<void> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const users: User[] = await response.json();
        
        userList.innerHTML = ''; 

        users.slice(0, 5).forEach((user) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${user.name}</strong><br>
                <small>${user.email}</small><br>
                <span style="color: #666; font-size: 0.9em;">Company: ${user.company.name}</span>
            `;
            userList.appendChild(li);
        });

    } catch (error) {
        console.error('Error:', error);
        userList.innerHTML = '<li style="color: red;">Failed to load data.</li>';
    }
}

fetchUsers();

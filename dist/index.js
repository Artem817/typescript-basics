"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const modal = document.getElementById('my-modal');
const openBtn = document.getElementById('open-modal-btn');
const closeBtn = document.getElementById('close-modal-btn');
const header = document.getElementById('main-header');
const userList = document.getElementById('user-list');
function openModal() {
    modal.classList.add('show');
}
function closeModal() {
    modal.classList.remove('show');
}
if (openBtn)
    openBtn.addEventListener('click', openModal);
if (closeBtn)
    closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
});
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok)
                throw new Error('Network response was not ok');
            const users = yield response.json();
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
        }
        catch (error) {
            console.error('Error:', error);
            userList.innerHTML = '<li style="color: red;">Failed to load data.</li>';
        }
    });
}
fetchUsers();

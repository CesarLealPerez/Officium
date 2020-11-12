import { writable } from 'svelte/store';

export var currentView = writable('TasksButtonsList');

export var currentRate = writable(0.0);

export const projects = writable([]);

function saveToLocalStorage() {
    window.localStorage.setItem('projects', projects);
    window.localStorage.setItem('currentRate', currentRate);
}

function loadFromStorage() {
    const savedProjects = window.localStorage.getItem('projects');
    const savedRate = window.localStorage.getItem('currentRate');
    projects.set(savedProjects);
    currentRate.set(savedRate);
}

projects.subscribe(saveToLocalStorage);

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}

export const count = createCount();
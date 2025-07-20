let elementId = 0;
let dragging = null;
let offsetX = 0;
let offsetY = 0;

function createText() {
    const el = document.createElement('div');
    el.className = 'element text';
    el.contentEditable = true;
    el.textContent = 'Edit me';
    addElement(el);
}

function createRect() {
    const el = document.createElement('div');
    el.className = 'element rectangle';
    addElement(el);
}

function addElement(el) {
    el.id = `el-${elementId++}`;
    el.style.left = '50px';
    el.style.top = '50px';
    el.addEventListener('mousedown', startDrag);
    document.getElementById('canvas').appendChild(el);
}

function startDrag(e) {
    dragging = e.target;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

function drag(e) {
    if (!dragging) return;
    const canvas = document.getElementById('canvas');
    const rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left - offsetX;
    let y = e.clientY - rect.top - offsetY;
    dragging.style.left = `${x}px`;
    dragging.style.top = `${y}px`;
}

function stopDrag() {
    dragging = null;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
}

document.getElementById('addText').addEventListener('click', createText);
document.getElementById('addRect').addEventListener('click', createRect);

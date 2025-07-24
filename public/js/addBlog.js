
const textarea = document.querySelector("form.blog-form textarea");
if (textarea) {
    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto';
        textarea.style.height = (textarea.scrollHeight) + 'px';
    });
}


const quill = new Quill('#quill-editor', {
    theme: 'snow',
    placeholder: 'Write your blog...',
    modules: {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean']
        ]
    }
});

// Set Quill HTML on submit
document.querySelector('form.blog-form').addEventListener('submit', function () {
    document.getElementById('quill-hidden').value = quill.root.innerHTML;
});

// Pre-fill in edit mode
const contentDiv = document.getElementById("blog-content");
if (contentDiv) {
    quill.root.innerHTML = contentDiv.innerHTML.trim();
}

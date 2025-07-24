
function toggleEdit(commentId) {
    const form = document.getElementById(`edit-form-${commentId}`);
    const content = document.getElementById(`content-${commentId}`);

    form.style.display = 'block';
    content.style.display = 'none';
}

function cancelEdit(commentId) {
    const form = document.getElementById(`edit-form-${commentId}`);
    const content = document.getElementById(`content-${commentId}`);

    form.style.display = 'none';
    content.style.display = 'inline';
}
function confirmDelete() {
    if (confirm("Are you sure you want to delete this blog? This action cannot be undone.")) {
        document.getElementById("delete-blog-form").submit();
    }
}

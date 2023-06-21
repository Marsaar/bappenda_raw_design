$(document).ready(function () {
    $('#example').DataTable({
      "searching" : false,
      "paging" : false,
      "info" : false,
    });
});

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const subcontent = document.querySelector('.subcontent');
      
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
    subcontent.classList.toggle('collapsed');
}

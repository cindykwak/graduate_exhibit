function includeHTML(file, containerId) {
  fetch(file)
      .then(response => response.text())
      .then(data => {
          document.getElementById(containerId).innerHTML = data;
      });
}
includeHTML('footer.html', 'footer-container');
includeHTML('sidebar.html', 'sidebar-container');

$(document).ready(function(){
  $('.menu-btn').click(function(){
    $('.side-bar').addClass('active');
    $('.menu-btn').css("visibility","hidden");
  });

  $('.close-btn').click(function(){
    $('.side-bar').removeClass ('active');
    $('.side-bar').removeClass ('active2');
    $('.menu-btn').css("visibility","visible");
  });

});


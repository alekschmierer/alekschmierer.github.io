// Get all the sidebar links
var sidebarLinks = document.querySelectorAll('.sidebar a');

document.querySelectorAll('.sidebar a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('current');
    }
  });


// Loop through each link
for (var i = 0; i < sidebarLinks.length; i++) {
  sidebarLinks[i].addEventListener('mouseenter', function(event) {
    event.target.classList.add('current1');
  });
  sidebarLinks[i].addEventListener('mouseleave', function(event) {
    event.target.classList.remove('current1');
  });
}


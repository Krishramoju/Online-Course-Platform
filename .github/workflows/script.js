document.addEventListener('DOMContentLoaded', function() {
  // Course enrollment button functionality
  const enrollButtons = document.querySelectorAll('.btn-primary');
  
  enrollButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('You have successfully enrolled in this course!');
    });
  });
});

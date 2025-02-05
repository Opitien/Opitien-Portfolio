document.addEventListener('DOMContentLoaded', (event) => {
  // Add animation to profile picture
  const profilePic = document.querySelector('.profile-pic');
  if (profilePic) {
    profilePic.addEventListener('mouseover', () => {
      profilePic.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      profilePic.style.transform = 'scale(1.1)';
      profilePic.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5)';
    });
    profilePic.addEventListener('mouseout', () => {
      profilePic.style.transform = 'scale(1)';
      profilePic.style.boxShadow = 'none';
    });
  }

  // Add animation to social icons
  const socialIcons = document.querySelectorAll('.social-icons img');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.transition = 'transform 0.3s ease, filter 0.3s ease';
      icon.style.transform = 'scale(1.2)';
      icon.style.filter = 'grayscale(0%)';
    });
    icon.addEventListener('mouseout', () => {
      icon.style.transform = 'scale(1)';
      icon.style.filter = 'grayscale(100%)';
    });
  });

  // Add animation to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transition = 'transform 0.3s ease';
      button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
    });
  });
});

// Get the right div
const rightDiv = document.querySelector('.right');
  
// Add click event listener to the right div
rightDiv.addEventListener('click', function(event) {
  // Check if the clicked element is an LI or inside an LI
  const liElement = event.target.closest('li');
  
  if (liElement) {

    const targetclass = liElement.innerText.trim().toLowerCase();
    // Get and log the inner text (trimmed to remove whitespace)
    //console.log(targetclass);

    const targetElement = document.querySelector(`.${targetclass}`);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth"
        });
    } else {
        console.warn(`No element found with class .${targetClass}`);
    }
  }
});
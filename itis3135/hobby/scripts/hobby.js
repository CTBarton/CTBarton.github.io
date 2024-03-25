function showSection(sectionId) {
 
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}
    $(document).ready(function() {
      $.getJSON('projects.json', function(data) {
        const projectContainer = $('#projectContainer');
        const projectSlider = $('<div>').addClass('project-slider');
        const sliderNav = $('<div>').addClass('slider-nav');
        const prevButton = $('<button>').attr('id', 'prevButton').text('<');
        const nextButton = $('<button>').attr('id', 'nextButton').text('>');
        
        $.each(data.projects, function(index, project) {
          const projectDiv = $('<div>').addClass('project');
          const projectTitle = $('<h2>').text(project.title);
          const projectDescription = $('<p>').text(project.description);
          const projectTools = $('<p> <bold>' ).text("Tools and Technologies: " + project.toolsAndTechnologies);
          const projectLinks = $('<p>');
    
          $.each(project.link, function(index, link) {
            const linkElement = $('<a>').attr('href', link).text(`Link ${index + 1}`);
            projectLinks.append(linkElement);
    
            if (index < project.link.length - 1) {
              projectLinks.append(', ');
            }
          });
          
          projectDiv.append(projectTitle, projectDescription, projectTools, projectLinks);
          projectSlider.append(projectDiv);
        });
    
        projectContainer.append(projectSlider, sliderNav.append(prevButton, nextButton));
        
        // Slider navigation
        const projectSliderElement = $('.project-slider');
        const prevButtonElement = $('#prevButton');
        const nextButtonElement = $('#nextButton');
        const projectWidth = $('.project').outerWidth(true);
        const scrollAmount = projectWidth + 110;
        
        prevButtonElement.on('click', function() {
          projectSliderElement.animate({ scrollLeft: '-=' + scrollAmount }, 700);
        });
        
        nextButtonElement.on('click', function() {
          projectSliderElement.animate({ scrollLeft: '+=' + scrollAmount }, 700);
        });
      });
    });

function showContent(section) {
      const sections = ['projects', 'contact', 'info', 'biography'];
      for (let i = 0; i < sections.length; i++) {
        const content = $(`#${sections[i]}Content`);
        const navItem = $(`.nav-list li:nth-child(${i + 1})`);
        if (sections[i] === section) {
          content.show();
          navItem.addClass('active');
          navItem.addClass('showContent');
        } else {
          content.hide();
          navItem.removeClass('active');
          navItem.removeClass('showContent');
        }
      }
    }
    document.addEventListener('mousemove', function(event) {
      const binaryParticle = document.createElement('div');
      binaryParticle.classList.add('binary-particle');
      binaryParticle.style.left = event.clientX + 'px';
      binaryParticle.style.top = event.clientY + 'px';
      document.body.appendChild(binaryParticle);

      setTimeout(function() {
        binaryParticle.remove();
      }, 500);
    });

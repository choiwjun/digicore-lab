// Multi-Step Contact Form

document.addEventListener('DOMContentLoaded', function() {
  initContactForm();
  initFAQ();
});

let currentStep = 1;
const totalSteps = 4;

function initContactForm() {
  const form = document.getElementById('contactForm');
  const nextButtons = document.querySelectorAll('.btn-next');
  const backButtons = document.querySelectorAll('.btn-back');
  const fileInput = document.getElementById('file');

  // Next button handlers
  nextButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      if (validateCurrentStep()) {
        goToStep(currentStep + 1);
      }
    });
  });

  // Back button handlers
  backButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      goToStep(currentStep - 1);
    });
  });

  // File upload handler
  if (fileInput) {
    fileInput.addEventListener('change', handleFileSelect);
  }

  // Form submission
  form.addEventListener('submit', handleFormSubmit);
}

function goToStep(step) {
  if (step < 1 || step > totalSteps) return;

  // Hide current step
  const currentStepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
  if (currentStepElement) {
    currentStepElement.classList.remove('active');
  }

  // Show new step
  const newStepElement = document.querySelector(`.form-step[data-step="${step}"]`);
  if (newStepElement) {
    newStepElement.classList.add('active');
  }

  // Update progress
  updateProgress(step);

  // Update current step
  currentStep = step;

  // Scroll to top of form
  document.querySelector('.contact-form-wrapper').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function updateProgress(step) {
  const progressSteps = document.querySelectorAll('.progress-step');
  const progressLine = document.getElementById('progressLine');

  // Update step circles
  progressSteps.forEach((progressStep, index) => {
    const stepNumber = index + 1;

    if (stepNumber < step) {
      progressStep.classList.add('completed');
      progressStep.classList.remove('active');
    } else if (stepNumber === step) {
      progressStep.classList.add('active');
      progressStep.classList.remove('completed');
    } else {
      progressStep.classList.remove('active', 'completed');
    }
  });

  // Update progress line
  const progressPercentage = ((step - 1) / (totalSteps - 1)) * 100;
  progressLine.style.width = progressPercentage + '%';
}

function validateCurrentStep() {
  const currentStepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
  if (!currentStepElement) return false;

  // Step 1: Project Type
  if (currentStep === 1) {
    const checkedTypes = currentStepElement.querySelectorAll('input[name="projectType"]:checked');
    if (checkedTypes.length === 0) {
      alert('최소 하나의 프로젝트 유형을 선택해 주세요.');
      return false;
    }
  }

  // Step 2: Budget
  if (currentStep === 2) {
    const selectedBudget = currentStepElement.querySelector('input[name="budget"]:checked');
    if (!selectedBudget) {
      alert('예산을 선택해 주세요.');
      return false;
    }
  }

  // Step 3: Basic Info
  if (currentStep === 3) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    let isValid = true;

    // Name validation
    if (!name.value.trim()) {
      name.classList.add('error');
      isValid = false;
    } else {
      name.classList.remove('error');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
      email.classList.add('error');
      isValid = false;
    } else {
      email.classList.remove('error');
    }

    // Phone validation
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phone.value.trim() || !phoneRegex.test(phone.value)) {
      phone.classList.add('error');
      isValid = false;
    } else {
      phone.classList.remove('error');
    }

    return isValid;
  }

  return true;
}

function handleFileSelect(e) {
  const files = e.target.files;
  const fileList = document.getElementById('fileList');

  if (!fileList) return;

  fileList.innerHTML = '';

  Array.from(files).forEach((file, index) => {
    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';
    fileItem.innerHTML = `
      <span>${file.name} (${formatFileSize(file.size)})</span>
      <span class="file-remove" data-index="${index}">삭제</span>
    `;

    fileList.appendChild(fileItem);
  });

  // Add remove handlers
  fileList.querySelectorAll('.file-remove').forEach(btn => {
    btn.addEventListener('click', function() {
      // Note: Removing individual files from FileList is complex
      // For simplicity, we'll clear all and let user re-select
      e.target.value = '';
      fileList.innerHTML = '';
    });
  });
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function handleFormSubmit(e) {
  e.preventDefault();

  // Validate final step
  const projectTitle = document.getElementById('projectTitle');
  const message = document.getElementById('message');

  let isValid = true;

  if (!projectTitle.value.trim()) {
    projectTitle.classList.add('error');
    isValid = false;
  } else {
    projectTitle.classList.remove('error');
  }

  if (!message.value.trim()) {
    message.classList.add('error');
    isValid = false;
  } else {
    message.classList.remove('error');
  }

  if (!isValid) return;

  // Collect form data
  const formData = new FormData(e.target);
  const data = {};

  // Get project types (multiple checkboxes)
  const projectTypes = [];
  document.querySelectorAll('input[name="projectType"]:checked').forEach(cb => {
    projectTypes.push(cb.value);
  });
  data.projectTypes = projectTypes;

  // Get other form fields
  for (let [key, value] of formData.entries()) {
    if (key !== 'projectType' && key !== 'file') {
      data[key] = value;
    }
  }

  // Log form data (in production, send to server)
  console.log('Form Data:', data);

  // Simulate sending email (in production, use EmailJS or backend API)
  setTimeout(() => {
    showSuccessMessage();
  }, 1000);

  // Example EmailJS integration (uncomment and configure):
  /*
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    company: data.company,
    project_types: data.projectTypes.join(', '),
    budget: data.budget,
    project_title: data.projectTitle,
    message: data.message
  }).then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    showSuccessMessage();
  }, function(error) {
    console.log('FAILED...', error);
    alert('메시지 전송에 실패했습니다. 다시 시도해 주세요.');
  });
  */
}

function showSuccessMessage() {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  form.style.display = 'none';
  successMessage.classList.add('show');

  // Hide progress bar
  document.querySelector('.form-progress').style.display = 'none';
}

// FAQ Accordion
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', function() {
      const isActive = item.classList.contains('active');

      // Close all FAQ items
      faqItems.forEach(i => i.classList.remove('active'));

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Remove error class on input
document.querySelectorAll('.form-control').forEach(input => {
  input.addEventListener('input', function() {
    this.classList.remove('error');
  });
});

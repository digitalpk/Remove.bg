document.getElementById('imageUpload').addEventListener('change', function (event) {
  const file = event.target.files[0];
  const originalImage = document.getElementById('originalImage');
  const processedImage = document.getElementById('processedImage');
  const downloadLink = document.getElementById('downloadLink');

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      originalImage.src = e.target.result;
      processedImage.src = ''; // Clear previous processed image
      downloadLink.style.display = 'none'; // Hide download link
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById('processBtn').addEventListener('click', function () {
  const fileInput = document.getElementById('imageUpload');
  const processedImage = document.getElementById('processedImage');
  const downloadLink = document.getElementById('downloadLink');

  if (fileInput.files.length === 0) {
    alert('Please upload an image first.');
    return;
  }

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('image', file);

  // Simulate processing (replace with actual API call)
  setTimeout(() => {
    processedImage.src = 'https://via.placeholder.com/500'; // Placeholder for processed image
    downloadLink.href = processedImage.src;
    downloadLink.style.display = 'inline-block';
  }, 2000);

  alert('Processing your image...');
});
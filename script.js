document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("download");

    downloadButton.addEventListener("click", function() {
      const fileUrl = 'CV.pdf';

      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'CV.pdf';
      link.style.display = 'none';

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    });
  });
function updateIframe(latitude, longitude) {
    const iframe = document.getElementById("locationIframe");
    const src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086514162714!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581bbdf08e3b7%3A0x8f0b2f08e8be0b6f!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1622625119612!5m2!1sen!2sus`;
    
    iframe.src = src;
  }
  
  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        updateIframe(latitude, longitude);
      }, function(error) {
        console.error('Error getting geolocation:', error);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const locationButton = document.querySelector('.location');
    locationButton.addEventListener('click', function() {
      getUserLocation();
    });
  });
  
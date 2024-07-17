fetch('https://developer.visa.com/vdp-api/v3/users/me', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json();
})
.then(data => {
  // Assuming the structure of the response includes ssoToken
  const ssoToken = data.ssoToken;
  alert("SSO Token: "+JSON.stringify(ssoToken));
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});

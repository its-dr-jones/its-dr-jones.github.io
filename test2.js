const iframe = document.createElement('iframe');
        iframe.src = '/';
        document.body.appendChild(iframe);
        iframe.onload = function() {
            const iframeWindow = iframe.contentWindow;
            iframeWindow.fetch('/vdp-api/v3/users/me')
                .then(response => response.json())
                .then(data => {
                    console.log('Fetch result from iframe:', data);
                })
                .catch(error => {
                    console.error('Error fetching data from iframe:', error);
                });
        };

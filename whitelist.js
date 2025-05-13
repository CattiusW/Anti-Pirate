//need async so that the api does not return after the varible is set
async function whitelist() {
    try {
        //fetch json file
        //format of json should be like so:
        //["whitelisteddomain.com", "anotheralloweddomain.co.uk", "anotherdomain.tk", "whitelisteddomain.org"]
        let url = 'your-raw-file.here'
        let api = await fetch(url);
        // json stringify
        let whitelist = await api.json();
        //get current domain
        const currentDomain = window.location.hostname;
        //check if white list includes current domain
        if (whitelist.includes(currentDomain)){
            //if white list contains domain do nothing
        } else {
            //if white list does not contain domain redirect to an about blank
            window.location.replace('about:blank');
        }
    } catch (error) {
        //if file is not reachable e.g website is offline redirect anyway! (comment out this line if your tool needs to work offline)
        window.location.replace('about:blank');
    }
}
//run the function
whitelist();

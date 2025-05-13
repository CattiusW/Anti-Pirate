# Whitelist
This script makes a fetch to a .json file (This can just be one that you have uploaded to Github and got the raw file url) and checks the current hostname of the site to the urls in the  .json file and if the url matches one in the json file, then does nothing, but if it doesn't match the page is redirected to an about:blank. This is usefull for html games and websites to stop people **ctrl-c** **ctrl-v** ing your work. **Do whatever you want with my code but please don't claim it as your own and if you do use it give me a star!**

---
## Example .json file
    [
        "example.com",
        "test.com",
        "mydomain.org",
        "anotherdomain.net"
    ]

This file would allow the domains example.com, test.com, mydomain.org and anotherdomain.net to run the code but no others.

---
## How to use the script.
1. Create a new repository and name it something like API, then create two files, one with an inconspicous name like "background.js" and another with a name like "api".
2. In the api file put the above json code and replace the domains with the ones you wouldliek to be able to use your code.
3. Get the raw file url of your file and copy it to your clipboard.
4. Copy [this](https://github.com/CattiusW/Anti-Pirate/blob/main/whitelist/whitelist.js) file into your background.js file and replace the text "your-raw-file.here" on line 7 with the url you copied in step 3. Optionally you can encrypt the script to make it unreadable with a tool like [this](https://www.html-code-generator.com/tools/html-encrypt-decrypt)
5. Save both files.
6. In the code you want to protect add this code snippet with your values,
   
        <script src="https://raw.githubusercontent.com/USERNAME/REPOSITORY/refs/heads/main/FILE.js"></script>


    

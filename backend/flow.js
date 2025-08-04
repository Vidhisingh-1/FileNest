const sendmail = require("./service/sendmail");
const { shortenurl } = require("./service/urlservice")

fileupload().then((url)=>{
    return shortenurl(url);
}).sendmail(()=>{
    sendmail(url,to);
})
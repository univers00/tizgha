let http = require("http");
let fs =require('fs');
let url = require('url');
let body =require("body/form")
let lookup = require('mime-types').lookup;
let sendemail = require("./send_email");
require("dotenv").config();

let port = process.env.port;



let server = http.createServer((req,res)=>{
    console.log(req.method);
    console.log(sendemail.test);
    
    if(req.method == "POST"){

        body(req,(err,data)=>{
            console.log(data.name);

            sendemail.transporter.sendMail({
                from: 'tizgha.anouar@outlook.com',
                to:'tizgha.anouar@outlook.com' ,
                subject: data.name+' say hi!',
                text: data.text+' '+data.email
              }, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
        });

                    // req.on('data', chunk => {
                    //     console.log(`Data chunk available: ${chunk}`)
                    // })
                    // req.on('end', () => {
                    //     //end of data
                    // })

    }



let string_url = url.parse(req.url,true).path.replace(/^\/+|\/+$/g,"");

if(string_url == ""){string_url = "index.html"}

    fs.readFile(__dirname+'/finale/'+string_url,(err,content)=>{
        if(err){
            console.error(err.message);
            return;
        }
let type_content = lookup(string_url);
        res.writeHead(200, { "Content-type": type_content});
        // res.setHeader("X-Content-Type-Options", "nosniff");
        res.end(content);
    })



    
});


server.listen(port,"localhost",()=>{
    console.log('start'+port)
});
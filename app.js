const nodemailer = require("nodemailer");
async function main(){
    let transpoerter = nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 587,
        secure: false,
        auth: {
            user: "blabla@example.ru",
            pass: "nrpzpdsdDsdsedsddwaeDUt7bsCq6deVdecde2"
        },
    });
    await transpoerter.sendMail({
        from: "blabla@example.ru",
        to: "example@gmail.com",
        subject: "Active Link",
        html: "<h1>Salom</h1>\n<p>Nima gap!</p>"
    }).then(()=>{
        console.log("Bajarildi")
    }).catch((err)=>{
        console.log("Xato! "+err)
    })
}
main()
const sgmail= require('@sendgrid/mail')

sgmail.setApiKey(process.env.sendgridAPIKey)

const sendWelcomeEmail= (email, name)=>{
    sgmail.send({
        to: email,
        from: 'f20180280@pilani.bits-pilani.ac.in',
        subject: 'Welcome for chosing us',
        text: `Hello, ${name}. Enjoy!`
    })
}

const sendDeleteEmail= (email, name)=>{
    sgmail.send({
        to: email,
        from: 'f20180280@pilani.bits-pilani.ac.in',
        subject: 'GoodBye',
        text: `Sorry to see you go, ${name}`
    })
}

module.exports= {
    sendWelcomeEmail, sendDeleteEmail
}
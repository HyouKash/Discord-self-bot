const token = require('./token.json')
const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();

const command = require('./command')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {  
  let params = msg.content.split(/ +/);  

  if (params[0] === '>paypal') {
    msg.delete(params[0])
    let paypal = new Discord.RichEmbed()

    .setColor("#336DFF")
    .setTitle("PayPal Invoice")
    .setDescription(`New PayPal order`)
    .addField("Adress", "HyouKa14@protonmail.com")
    .addField("Amout(USD)", `$${params[1]}`)
    .setThumbnail("https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png")

    msg.channel.send(paypal)
  }

  if (params[0] === '>btc') { 
    msg.delete(params[0])
    request('https://blockchain.info/ticker', function(err, res, body) {
  
      let btc = new Discord.RichEmbed()
      
      .setColor("#FF9C33")
      .setTitle("Bitcoin Invoice")
      .setDescription(`New Bitcoin order`)
      .addField("Adress", "15fYtvTP8EwTrASXL4GrifNUBxuYNg4pAe")
      .addField("Amout(USD)", `$${params[1]}`)
      .addField("BitCoin Amount", `${params[1]/(JSON.parse(body)["USD"]["buy"])}`.slice(0, 10))
      .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/600px-Bitcoin.svg.png")

      msg.channel.send(btc)
    })   
  }

  if (params[0] === `>setname`) { 
      if(!msg.member.hasPermission(["ADMINISTRATOR"])) return msg.reply("désolé tu n'as pas les permissions nécessaires.");
      if(!params[[1]]) return msg.channel.send('Veuillez écrire un nouveau pseudo.');
      msg.member.setNickname(msg.content.replace(`${params[0]}`, '')), msg.channel.send(`Le pseudo a bien été changé en : ${params.slice(1).join(" ")}`);          
  }

  if (params[0] === `>`)
  if (params[0] === `>mult`) {
    
    let result = params[1] * params[2]
    msg.channel.send(`${result}`) 
  }
  
  if (params[0] === `>div`) {
    
    let result = params[1] / params[2]
    msg.channel.send(`${result}`) 
  }

  if (params[0] === `>add`) {
    
    let result = parseInt(params[1]) + parseInt(params[2])
    msg.channel.send(`${result}`) 
  }

  if (params[0] === "/startxp") {
    if(!msg.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("Nique ta mère fils de pute");
    var interval = setInterval (function () {
      msg.channel.send("prout")
    }, 1 * 60 * 1000); 
  }

  if(params[0] === "disparais") {
    if(!msg.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]));
    const user = msg.mentions.users.first();
    if (user) {
      const member = msg.guild.member(user);
        if(member) {
          member.ban({
            reason: "osf", 
          })          
        } else {
          msg.reply("l'utilisateur n'est pas sur le serveur.");
        }
       }  
  }
})

client.login(token.hyoula);

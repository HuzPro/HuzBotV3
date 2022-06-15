var Discord = require('discord.js');

var JSONdb = require('simple-json-db');

const bot = new Discord.Client();

var Huz = "no :)";

var Jad = "no :)";

var fs = require('fs');

var wtf = require('wtf_wikipedia');

var bot_id = "no :)";

var Wall_id = "no :)";

var Huz_id = "no :)";

var Jan_id = "no :)";

var Fire_id = "no :)";

var Jad_id = "no :)";

var Ibs_id = "no :)";

var IDs = new JSONdb('./Json/Friends.json');


var ask_choice = [
"Yeah",
"No",
"Yes",
"Nu",
"Yup",
"Nope",
"Depends...",
"Maybe...",
];

var scan_msg_choices = [
"** guilty for eating too many dounuts**(HuzbotV2:wth...)",
"** is trying to find socks to wear on their head**(HuzbotV2:idk what huz was thinking...)",
"** USES HACKS ON STARVE.IO**(HuzbotV2: Good job sir, i hate that game)",
"** loves loading lines**(this is not 2010...)",
"** is still brushing his teeth...**",
"** asks too many questions :/**",
"** loves Huz's Chicks**"
];

var coin_flip = [
"Tails!",
"Heads!",
"Tails",
"Heads",
"It's feet XD"
];






var Friend_ids = 
[
  "<no :)> Amy",
  "<no :)> Eros",
  "<no :)> Ibs",
  "<no :)> Huz",
  "<no :)> Lau",
];

var truth_choices = [
"What is your least favorite thing about family gatherings?",
"What is your favorite thing about family gatherings?",
"What is a secret that you kept from your parents when you were growing up?",
"What is one thing that makes you relax?",
"What is a bad habit that you have?",
"What is something you look forward to when you retire?",
"Do you have a bucket list and if so, what is one thing on the list?",
"Do you have a weird collection of something?",
"Tell about the last dream you had and don’t leave anything out.",
"Have you ever lied about being sick so you could stay home from work or school, if so tell the story!",
"If you could do one thing you did when you were a child, what would it be?",
"What is the one thing you dislike about yourself?",
"What is the one thing you do like about yourself?",
"What is the one thing you would stand in line for?",
"If anyone (including you) in your family could win an award for the most annoying, who would it be?",
"What is the most embarrassing thing that has happened to you in front of a crowd?",
"If you could hire someone to do one thing for you, what would it be?",
"What was the most embarrassing thing that you ever did while on a date?",
"What was the worst gift you ever received?",
"What is the one thing you are the most afraid of?",
"Have you ever sent an inappropriate text to your mom or dad by accident? If yes, what was it?",
"If you could create your own job title, what would it be?",
"What is your excuse to get out of/not exercising?",
"What was the one thing you could never learn how to do no matter how hard you tried?",
"What was your favorite childhood television show and why?",
"If you had a remote control that would operate any one thing, what would you control?",
"What is one thing you did as a child that you still enjoy doing?",
"Do you prefer the big city or country life?",
"What is your guilty pleasure? >:)",
"Where is your favorite vacation spot?",
"Have you ever used a work computer for personal use? If so, What?",
"What was the worse vacation you ever had? Tell the story :D",
"If you were to bury a time capsule, what is one thing you would put in it?",
"If you were granted three wishes, what would you wish for? (YOU ONLY GET 3 WISHES NO MATTER WHAT)",
"What is your biggest pet peeve?(pet peeve = something that a particular person finds especially annoying)",
"If you could live anywhere in the world, where would it be?",
"Have you ever forgotten a special person’s birthday? If so, Who? :D",
"On a scale from 1-10, where do your patience fall?",
"If animals could talk, which one would you have a conversation with?",
"What/Who is the one thing/person that makes you cry the fastest?",
"What/Who is the one thing/person makes you laugh the fastest?",
"Have you ever been in an awkward situation in an elevator and if so who were you with and why was it awkward?",
"Who is/was your favorite teacher in school? And why? XD",
"What is currently/was your favorite subject in school?",
"What is something that you are not looking forward to?",
"Have you ever told a secret after you were told not to? If so, to whom? And what? :D",
"Are you a morning person or a night person?",
"What is one job you would never want to do?",
"Name one ice cream flavor that you love, and one that you hate?",
"When you think that no one is listening, do you sing in the shower? XD",
"What is your favorite food?",
"What is the best gift you ever received?",
"What was your favorite childhood toy?",
"If you were given a billion dollars what would you do with it? Tell step by step",
"Do you prefer the beach or the mountains? And why?",
"If you found a large amount of money, would you keep it or would you try to find the owner or something else?",
"What is your least favorite purchase?",
"What is your most favorite purchase?",
"If you were invisible what is the first thing you would do?",
"Do you prefer cats, dogs, or neither?",
"If there was one thing you could change about yourself, what would it be?",
"What's the first thing you would do if you woke up one day as the opposite sex?",
"You have to delete every app on your except for five. Name the five you would keep.",

];

var dare_choices = [
  "IF THIS IS THE CHOSEN DARE THEN EROS NEEDS TO TALK",
  "IF THIS IS THE CHOSEN DARE THEN EROS NEEDS TO TALK",
  "IF THIS IS THE CHOSEN DARE THEN EROS NEEDS TO TALK",
  "IF THIS IS THE CHOSEN DARE THEN EROS NEEDS TO TALK",
  "IF THIS IS THE CHOSEN DARE THEN EROS NEEDS TO TALK",
  "IF THIS IS THE CHOSEN DARE THEN EROS NEEDS TO TALK",
  "IF THIS IS THE CHOSEN DARE THEN EROS NEEDS TO TALK",
  "IF THIS IS THE CHOSEN DARE THEN EROS NEEDS TO TALK",
  "IF THIS IS THE CHOSEN DARE THEN EROS NEEDS TO TALK",
  "IF THIS IS THE CHOSEN DARE THEN EROS NEEDS TO TALK",
  "IF THIS IS THE CHOSEN DARE THEN EROS NEEDS TO TALK",
  "IF THIS IS THE CHOSEN DARE THEN EROS NEEDS TO TALK",
  "IF THIS IS THE CHOSEN DARE THEN EROS NEEDS TO TALK",
  "IF THIS IS THE CHOSEN DARE THEN EROS NEEDS TO TALK",
  "IF THIS IS THE CHOSEN DARE THEN EROS NEEDS TO TALK",
  "IF THIS IS THE CHOSEN DARE THEN EROS NEEDS TO TALK",
"With your eyes closed, pick someone from your contact list and send them a text saying 'HI!!!!'.",
"Stand up and do your best impersonation of the person on your right.",
"Imagine that you are a dog and act like it until your next turn.(if just texting, text like a dog would if it had a mind)",
"Describe what the sky looks like without using the words blue or white.",
"Make up a song about the host of the party.(if online, sing in voice chat)",
"For the next 15 minutes, everything you say must be spoken in baby talk.(if online, say in voice chat)",
"From now until your next turn, every time someone talks, interrupt by saying, “that’s a lie.”",
"Get down on one knee and propose to the person on your left.(if texting, the last person who send a message in the group)",
"Open Facebook and “like” the first thing that pops up even if you disagree with it.(if texting, take a screenshot)",
"For the next 10 minutes, when someone speaks, put your ear up close to them and act as though you can’t hear what they are saying.(skip if texting)",
"For the rest of the game, you must cluck like a chicken at the beginning and end of everything you say.",
"Be silent and say nothing from now until your next turn.(dont go offline, if texting)",
"Text someone you are close to and tell them that you no longer want to talk to them.(If texting take a screenshot and send what they reply)",
"Every time someone begins to talk, interrupt by saying, “hey, ya know what?” Keep it up until your next turn.",
"Sing the theme song from spongebob non-stop until your next turn.",
"Every time someone performs a dare, yell, “tis but a mere flesh wound.”",
"Every time someone tells a truth, yell, “liar.”",
"Text a friend and tell them their hair is on backward.(send screenshot if texting)",
"Call/text someone and confess your new-found love for Justin Beiber.(send screenshot if texting)",
"Tell a funny/weird 2-minute story about the night you slept in the woods.(can be fake)",
"Text your siblings and tell them that you just found out you are adopted.(send screenshot if texting)",
"From now until the end of the game, every time you talk, speak like a robot.(do it on voice chat if online)",
"Describe to the group what your last bathroom experience was like in 2 words.",
"For the rest of the game you must say your name at the beginning and the end of every sentence you speak.",
"Repeat everything the person to your left says until your next turn.(if texting, Repeat the last person who send a message)",
"You are a seat in a car, for 2-minutes talk to your passengers.",
"Text someone “hey.” Every time they respond say, “hey.” Do this ten times and on the eleventh, reply with “hi.”(keep sending hey till their eleventh response)(send screenshot if texting)",
"Send a picture of yourself (only for text) **DONT SAY NO**",
"Send a picture of yourself (only for text) **DONT SAY NO**",
"Send a picture of yourself (only for text) **DONT SAY NO**",
"Send a picture of yourself (only for text) **DONT SAY NO**",
//"",
//"",
//"",
//"",
//"",
//"",
//"",
//"",
//"",
//"",
//"",
//"",
//"",
//"",
//"",
//"",
//"",
//"",
];

var quotes = [
"Seek for happiness rather then approval. - H",
"Humans aren't humans until they make mistakes. -H",
"Life is not measured by how many breaths we take but by the moments that take our breath away. - J",
"Be the change that you wish to see in the world.",
"To live is the rarest thing in the world. Most people exist, that is all.",
"Don't cry because it's over, smile because it happened.",
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
"Be the change that you wish to see in the world.",
"Live as if you were to die tomorrow. Learn as if you were to live forever.",
"If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.",
"Logic will only get you from A to Z; imagination will get you everywhere.",
"Life isn't about finding yourself. Life is about creating yourself.",
"The only true wisdom is in knowing you know nothing.",
"Happiness is when what you think, what you say, and what you do are in harmony.",
"Humans aren't humans until they make mistakes. -H"

];















bot.on('ready', () => {
    console.log('HuzBotV3 - Ready');


      bot.user.setUsername("HuzBotV3");





});

var prefix = '.';

bot.on('message', (message) => {
  if(message.author.bot) return;


     let cont = message.content.slice(prefix.length).split(" ");

     let args_del = cont.slice(1); 
  
     var argsjoin = message.content.split(" ");

     var args = message.content.substring(prefix.length).split(" ");

    if (message.content.startsWith(prefix + 'ping')) { 
      message.channel.send('Ping?') 
     .then(msg => {
      msg.edit(`**Ping!** (took: \`[ ${msg.createdTimestamp - message.createdTimestamp}ms ]\` )`);
     });
    };

    if(message.content.startsWith(prefix + "say")) {
     if(message.author.id === Huz_id || message.author.id === Jad_id){
     	message.delete();
      message.channel.send(message.content.substr(args[0].length+1));
    
     }
    };

    if(message.content.startsWith("slap" )) {
    	message.delete();
            
              var slap_mention = message.content.substr(args[0].length+1);
               /*if(!slap_mention) {
              message.reply(".... mention someone so i can slap them...").then(msgSent => {
               setTimeout(() => { msgSent .delete(); }, 5000); 
              })
              return;
             } else {*/
             message.channel.send(`${message.author}` + "** Slapped :clap:** **" + message.content.substr(args[0].length+1) + "**");
               
            
             //};
    }

    if(message.content.startsWith("Slap" )) {
      message.delete();
            
              var slap_mention = message.content.substr(args[0].length+1);
               if(!slap_mention) {
              message.reply(".... mention someone so i can slap them...").then(msgSent => {
               setTimeout(() => { msgSent .delete(); }, 5000); 
              })
              return;
             } else {
             message.channel.send(`${message.author}` + "** Slapped :clap:** **" + slap_mention + "**");
               
            
             };
    }

    if(message.content.startsWith("stab" )) {
              message.delete();
                      /*var stab_mention = message.content.users.first;
                      if(!stab_mention) {
                     message.reply(".... mention someone so i can stab them...").then(msgSent => {
                      setTimeout(() => { msgSent .delete(); }, 5000); 
                     })
            };*/
             message.channel.send(`${message.author}` + "** Stabbed :knife:** **" + message.content.substr(args[0].length+1) + "**");
    };

    if(message.content.startsWith("Stab" )) {
      message.delete();
              /*var stab_mention = message.content.substr(args[0].length+1);
              if(!stab_mention) {
             message.reply(".... mention someone so i can stab them...").then(msgSent => {
              setTimeout(() => { msgSent .delete(); }, 5000); 
             })
    };*/
       message.channel.send(`${message.author}` + "** Stabbed :knife:** **" + message.content.substr(args[0].length+1) + "**");
};

    if(message.content.startsWith("kiss" )) {
    	message.delete();
             
              var kiss_mention = message.content.substr(args[0].length+1);
             message.channel.send(`${message.author}` + "** kissed :kissing:** **" + message.content.substr(args[0].length+1) + "**");
             
    };

    if(message.content.startsWith("hug" )) {
      message.delete();
             
             
            
              var hug_mention = message.content.substr(args[0].length+1);
              if(!hug_mention) {
                message.channel.send("...Who/What do i hug? A WALL !!!?").then(msgSent =>{
                  setTimeout(() => { msgSent.delete(); }, 5000)
                } )
              } else {
               
             
             message.channel.send(`${message.author}` + "** hugged :hugging:** **" + hug_mention + "**");
               
            }
    };
    //===============================================================================================================
    if(message.content.startsWith(prefix + "truth")) {

      message.channel.send(truth_choices[Math.floor(Math.random() * truth_choices.length)])

    } else {

    if(message.content.startsWith(prefix + "t")) {
      
      message.channel.send(truth_choices[Math.floor(Math.random() * truth_choices.length)])
       
     }
    };

    if(message.content.startsWith(prefix + "dare")) {
    	message.channel.send(dare_choices[Math.floor(Math.random() * dare_choices.length)])
    } else {

    if(message.content.startsWith(prefix + "d")) {
      
      message.channel.send(dare_choices[Math.floor(Math.random() * dare_choices.length)])
      }
    };

    if(message.content.startsWith(prefix + "picktd")) {
      message.channel.send(Friend_ids[Math.floor(Math.random() * Friend_ids.length)])
    };
    //================================================================================================================
    if(message.content.startsWith(prefix + "ghi")) {
      message.channel.sendFile("./Storage/gif_test.gif");
    
    }


    if(message.content.startsWith(prefix + "add")) {
      message.channel.send("https://discordapp.com/oauth2/authorize?client_id=" + bot_id + "&permissions=134184&scope=bot")
    }

    if(message.content.startsWith(prefix + "rem")) {
      message.delete();
      async function purge() {
         message.delete();
         if(message.author.id != Wall_id && message.author.id != Huz_id && message.author.id != Jan_id && message.author.id != Fire_id && message.author.id != Jad_id) {
            message.reply('You need to be a Beta Tester to use this command.'); // This tells the user in chat that they need to be a beta tester.
          } else {
            console.log(args_del[0]);
            if (isNaN(args_del[0])) {
                // Sends a message to the channel.
                message.reply('Please use a number as your arguments. \n Usage: `' + prefix + 'rem <amount>`'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            var fetched = await message.channel.fetchMessages({
                limit: args_del[0]
            }); // This grabs the last number(args) of messages in the channel..... i think....
            console.log(fetched.size + ' messages found, deleting...'); // Sends msg in console of how many msgs deleting?.... i guess lol
            // The deleteing part???
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.



            // tbh idk what this is lol But....i do need to make sure this is inside the (case)
             }
         }
         purge();
    }

    if(message.content.startsWith(prefix + "calc")) {
      var Discord = require('discord.js')
         var math = require('math-expression-evaluator');
         var stripIndents = require('common-tags').stripIndents;
         var send = message.content.slice(prefix.length).split(" ").slice(1)

         if (send.length < 1) {
         return message.reply(':negative_squared_cross_mark:You must provide a equation to be solved on the calculator');
         }

         const question = send.join(' ');

         let answer;
         try {
         answer = math.eval(question);
         } catch (err) {
         console.log(err);
         return message.reply(`Invalid math equation: ${err}`);
         }
          var embed = new Discord.RichEmbed()
          .setColor(0x07AEED)
          .setDescription(`**Question: **${question} **:thinking: Answer: **${answer}`) 
          message.channel.send({embed}) 
    }

    if(message.content.startsWith(prefix + "scan")) {
      var user = message.mentions.users.first();
          //message.delete();
          if (args[1]) message.channel.sendMessage(`${user}` + scan_msg_choices[Math.floor(Math.random() * scan_msg_choices.length)]); 
          if (!user) return message.reply("**You should mention someone first!**")
    };


    if(message.content.startsWith(prefix + "ask")) {
      if (args[1]) message.reply(ask_choice[Math.floor(Math.random() * ask_choice.length)]);
         else message.reply("**You need to ask a Question**");
    };


    if(message.content.startsWith(prefix + "cf")) {
      //message.delete();
         message.reply(`**The legendary coin landed on.....` + coin_flip[Math.floor(Math.random() * coin_flip.length)] + `** `);
    };

    if(message.content.startsWith(prefix + "av")) {
      var user = message.mentions;
      var Discord = require('discord.js');
       if (!user) {
         var embed = new Discord.RichEmbed()
         .setImage(message.author.avatarURL)
         .setTitle("Your Avatar")
         .setColor(0x07AEED)
         .setDescription(message.author)
         .setFooter("Command used by " + message.author.username)
         message.channel.send({embed})
       } else {
         var embed = new Discord.RichEmbed()
         .setImage(message.mentions.avatar)
         .setTitle(message.mentions.username + "'s Avatar")
         .setColor(0x07AEED)
         .setDescription(message.author)
         .setFooter("Command used by " + message.author.username)
         message.channel.send("`" + message.mentions.users.avatarURL + "`")
      };

    }

    if(message.content.startsWith(prefix + "i")) {
      var info = message.mentions.members.first() || message.guild.members.get(`${args[0]}`);
      var Discord = require('discord.js');
      var user = args[1]
      var mention = message.mentions._members.first();

      message.channel.send("`"+mention+"`");
      

    }

    if(message.content.startsWith(prefix + "quote")) {
      message.reply("**Quote: " + quotes[Math.floor(Math.random()* quotes.length)] + "**")
    }

    /*if(message.content.startsWith(prefix + "pick")) {
      if(args[2] = "or", args[4] = "or", args[6] = "or", args[8] = "or", args[10] = "or") {
        if(args[2] != "or"  )

       var pick1 = args[1]
       var pick2 = args[3]
       var pick3 = args[5]
       var pick4 = args[7]
       var pick5 = args[9]
       var finalpick = [pick1, pick2, pick3, pick4, pick5]
       message.channel.send("**I Picked:** " + finalpick[Math.floor(Math.random()* finalpick.length)])
       return
      } else if (args[2] = "or", args[4] = "or", args[6] = "or", args[8] = "or") {
        var pick1 = args[1]
       var pick2 = args[3]
       var pick3 = args[5]
       var pick4 = args[7]
       var finalpick = [pick1, pick2, pick3, pick4]
       message.channel.send("**I Picked:** " + finalpick[Math.floor(Math.random()* finalpick.length)])
       return
      } else if (args[2] = "or", args[4] = "or", args[6] = "or") {
        var pick1 = args[1]
       var pick2 = args[3]
       var pick3 = args[5]
       var finalpick = [pick1, pick2, pick3]
       message.channel.send("**I Picked:** " + finalpick[Math.floor(Math.random()* finalpick.length)])
       return
      } else if (args[2] = "or", args[4] = "or") {

        var pick1 = args[1]
        var pick2 = args[3]
        var pick3 = args[5]
        var finalpick = [pick1, pick2, pick3]
        message.channel.send("**I Picked:** " + finalpick[Math.floor(Math.random()* finalpick.length)])
        return
      } else if (args[2] = "or") {
        var pick1 = args[1]
        var pick2 = args[3]
        var finalpick = [pick1, pick2]
        message.channel.send("**I Picked:** " + finalpick[Math.floor(Math.random()* finalpick.length)])
        return
      } else {
        return;
      }
    }; */

    if(message.content.startsWith(prefix + "help")) {
      var Discord = require('discord.js')
      var embed = new Discord.RichEmbed()
      .setTitle( `Here are the commands for the bot:`)
      .setDescription("**.ping: **To know how slow Huz's net is :(\n**.cf** Flippin coinz xD\n**.i** For stalking people :eyes:\n**.av** have a small screen like huz? NO PROBLEM!!!\n**.ask** For Asking bot for personal life advice (Can me mean)\n**.quute** Stupid sentences famous people said...\n**.calc** 2+2 thats 4, -1 that's 3 QUACK MAFS\n**.scan** :spy: Scan people for threats\n**.add** Dont do it.... Just dont.... Trust me, you dont need it...")
      message.channel.send(message.author, {embed})
    }

    if(message.content.startsWith(prefix + "google")) {
      var google = require('google');
      google.resultsPerPage = 4
       var nextCounter = 0
       google(args_del, function (err, res) {
        if (err) { console.error(err) }

       for (var i = 0; i < res.links.length; ++i) {
        var link = res.links[i];
        var title = link.title
        var Discord = require('discord.js')
        var embed = new Discord.RichEmbed()
        .setDescription(link.description)
        message.channel.send(link.title ,{embed})
        console.log("**Googled:" + link.description + "**" + "\n")
        }
       })
    }

    if(message.content.startsWith(prefix + "wiki")) {
      var newargs = message.content.split(" ").slice(1)
      var newargs1 = newargs.join(" ").replace("  ", "_")
      var newargs2 = newargs.join(" ").replace(",", " ")
      wtf.from_api(newargs1, 'en', function(markup) {
        var noinfo = wtf.plaintext(markup).substring(0, 1)
        var text = wtf.plaintext(markup).substring(0, 500)
        var Discord = require('discord.js')
        var embed = new Discord.RichEmbed()
      if(text.length = 0) {
        var Discord = require('discord.js')
        var embed = new Discord.RichEmbed()
        .setDescription(`For more info on ` + newargs + `:[Click here](https://en.wikipedia.org/wiki/${newargs1})`)
        message.channel.send(`** ${message.author} I can't Give Text Informations about**` + "`" + newargs2 + "`", {embed})
      } else {
        var Discord = require('discord.js')
        var embed = new Discord.RichEmbed()
        .setDescription(text + ' For more information on ' + newargs + '[Click here](https://en.wikipedia.org/wiki/${newargs1})')
        message.channel.send(`** ${message.author} I can't Give Text Informations about**` + "`" + newargs2 + "`", {embed})
      }
    }

      )}

      /*if(message.channel.send(prefix + "screen")) {
        var fs = require('fs');
        var screenshot = require('screenshot-stream');
        var stream = screenshot( args[0] , args[2], {crop: true});
      stream.pipe(fs.createWriteStream('website-1920x1080.png'));
      }*/
      
      if(message.content.includes("test")){
        message.channel.send("yo it works")
      }


























});



bot.login("YOU THOUGHT I'D MISS THIS DIDNT YOU? YOU ARE A NAUGHTY NAUGHTY PERSON!");

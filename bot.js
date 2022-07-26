alert("This bot works based on a predefned template. Kindly see the source code for the template.");
alert("Also, I am open to reviews, corrections or how I can better improve it. Thank you!");
alert("One more thing, pardon my designs. It probably sucks");

function Mybot(){
    this.possibleMessage = ["hi", "how old are you?", "how long have you been in existence?", "who is the president of nigeria?"];
    this.possibleReplies = ["Hey! You are chatting with Jarvis, how may I be of help?", "I was created a very long time ago by my master", "A very long time ago unknown to me", "The incumbent president is PMB"];

    this.chatBody = document.querySelector("#chatbody");
    this.input = document.getElementById("txt");
    //creating a message
    this.create = function(Msg, msgBody, type = "receive"){
        let msgBox = document.createElement("div");
        msgBox.setAttribute("class", "box");
        let text = document.createElement("div");
        let textcont = document.createElement("div");
        textcont.setAttribute("class", "textcont");
        if (type == "receive"){
            text.style.color= 'white';
            text.style.float = 'right';
            text.setAttribute('class', 'user');
        } else {
            text.style.color= 'white';
            text.setAttribute('class', 'bot');
        }
        textcont.appendChild(text);
        msgBox.appendChild(textcont);
        msgBody.appendChild(msgBox);
        text.innerHTML = Msg;
    };
    //a receive method
    this.receive = function(Msg){
        this.Msg = Msg;
        this.bx = document.createElement("div");
        this.bx.style.backgroundColor = 'blue';
        this.create(Msg, this.chatBody, "receive");
    };
    
    let self = this;
    //checking for corresponding reply
    function chatBot(){
        let userMsg = self.input.value;
        self.receive(userMsg);
        let lcase = userMsg.toLowerCase();
        let eachWord = lcase.split(" ");

        if ((eachWord.length > 3) || (lcase == 'hi')){
            let x = 0;
            while(x < self.possibleMessage.length){
                let message = self.possibleMessage[x];
                let check = message.includes(lcase);
                let check2 = lcase.includes('alexei open');
                let check3 = lcase.includes('alexei call');
                let check4 = lcase.includes('alexei mail');
                let last = eachWord[eachWord.length-1];
                if (check == true){
                    self.reply(self.possibleReplies[x]);
                }
                x++;
            }
        } else{
            return
        }
    }

    // reply method
    this.reply = function(Msg){
        this.create(Msg, this.chatBody, "reply");
    };

    //onclick event
    let butt = document.querySelector("button")
    butt.onclick = function(e){
        e.preventDefault();
        if (self.input.value.trim().length != 0){
            chatBot();
            
        }
        self.input.value = '';
    };
}

let bot1 = new Mybot();
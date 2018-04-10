var myBot = new BotUI('hello-world');

    myBot.message.add({ // show a message
      delay: 200,
      content: 'Hello, my name is eillon.'
    }).then (function (){
      myBot.message.add({
        delay: 1000,
        loading: true,
        content: 'What is your name?'
      });
    }).then (function(){
      return myBot.action.text({
        action: {
          placeholder: 'Your Name'
        }
      });
    }).then (function (res){
      return myBot.message.add({
        delay: 1000,
        loading: true,
        content: `Hello ${res.value}. I like your name.`
       });
     }).then (function (){
       return myBot.message.add({
         delay: 1000,
         loading: true,
         content: 'What can i do for you?'
       })
     }).then (function (){
       return myBot.action.button({
        action: [
          {
            text: 'Your photo',
            value: 'your photo'
          },
          {
            text: 'Your contacts',
            value: 'your contacts'
          }/*,
          {
            text: 'Your hobbies',
            value: 'your hobbies'
          }*/
        ]
      })
    }).then(function (res){
      switch (res.value) {
        case 'your photo':
          return myBot.message.add ({
          delay: 1000,
          loading: true,
          content: `This is me 23333... ![me](./me.jpg)`
        });
        break;
        case 'your contacts':
          return myBot.message.add ({
          delay: 1000,
          loading: true,
          content: `Go ahead, try [my website](http://eillon.github.io) or <a href="mailto:1377437556@qq.com">Email me.</a> </br>
                    Here is my [Github address](https://github.com/eillon).`
        });
        break;/*
        case 'your hobbies':
          return myBot.message.add ({
            delay: 1000,
            loading: true,
            content: `i like coding, that's all.`
          })*/
        default:
      }
    }).then(function(){
      return myBot.message.add ({
        delay: 1000,
        loading: true,
        content: `Do you want to try it again?`
      })
    }).then(function(){
      return myBot.action.button({
        action:[{
          text: 'YES',
          value: 'yes'
        }, {
          text: 'NO',
          value: 'no'
        }]
      })
    }).then (function(res){
      switch (res.value) {
        case 'yes':
          return myBot.action.button({
           action: [
             {
               text: 'Your photo',
               value: 'your photo'
             },
             {
               text: 'Your contacts',
               value: 'your contacts'
             }/*,
             {
               text: 'Your hobbies',
               value: 'your hobbies'
             }*/
           ]
         }).then(function (res){
           switch (res.value) {
             case 'your photo':
               return myBot.message.add ({
               delay: 1000,
               loading: true,
               content: 'This is me 23333... ![](./me.jpg)'
             });
             break;
             case 'your contacts':
               return myBot.message.add ({
               delay: 1000,
               loading: true,
               content: `Go ahead, try [my website](http://eillon.github.io) or <a href="mailto:1377437556@qq.com">Email me.</a> </br>
               Here is my [Github address](https://github.com/eillon).`
             });
             break;/*
             case 'your hobbies':
               return myBot.message.add ({
                 delay: 1000,
                 loading: true,
                 content: `i like coding. it's my life.`
               })*/
             default:
           }
         })
          break;
        default:

      }
    }).then(function(){
      return myBot.message.add({
        delay: 2000,
        loading: true,
        content: 'Leave your message so I can inform my master.'
      })
    }).then(function(){
      return myBot.action.text({
        action: {
          placeholder: 'Your message'
        }
      })
    }).then(function(){
      return myBot.message.add({
        delay: 1000,
        loading: true,
        content: 'Well, i fooled you. I will keep it myself.'
      })
    }).then(function(){
      return myBot.message.add({
        delay: 1000,
        loading: true,
        content: 'Bye bye!'
      })
    })

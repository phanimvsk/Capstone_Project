import React from 'react';
import _ from "lodash";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = async(message) => {

    console.log(`message recieved ${JSON.stringify(message)}`);

   const fetchdata = await fetch(`http://15.207.83.146:8000/query`,{ 
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: message })}) 
    
        const jsondata = await fetchdata.json();
        console.log(`jsondata is =========================== ${JSON.stringify(jsondata)}`);
        if(jsondata.answers.length>0){
      const filterdata =  _.filter(jsondata.answers,function(o){return o.answer.length>15 });
      console.log(`filterdata is ************************************ ${JSON.stringify(filterdata)}`);
      if(filterdata.length>0){
        const ordereddata = _.orderBy(filterdata,['score'],['desc']);
        console.log(`ordered data after lodash is ${JSON.stringify(ordereddata)}`);
        const botMessage = createChatBotMessage(ordereddata[0].answer);
  
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      }
      else{
        const botMessage = createChatBotMessage("I am still learning, Please ask me other Question. I will get back to you soon.");
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      }
     
    
        }
        else{
          const botMessage = createChatBotMessage("I am still learning, Please ask me other Question. I will get back to you soon.");
          setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
          }));
        }
   
   
       // console.log(`jsondata from fetch ${JSON.stringify(jsondata)}`);

  
  };

 /*  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
 */
  // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
  return (
   
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello
          
          },
        });
      })}
    </div> 
  );
};

export default ActionProvider;
const tryGetErrorMessage = (err) => {
  try {
    return JSON.stringify(err.originalError.response.data)
  } catch (err) {
    return ''
  }
}

export const lineReply = (replyToken, message, lineClient) => {
  console.log(message)
  var messages = [];
  if (typeof message === 'string') {
    messages = [{
      text: message,
      type: 'text'
    }];
  } else if (Array.isArray(message)) {
    message.forEach(msg => {
      if (typeof msg === 'string') {
        let singleMessage = {
          text: msg,
          type: 'text'
        };
        messages.push(singleMessage);
      } else {
        messages.push(msg);
      }
    });
  } else {
    if (!message || !message.type) throw new Error('Your LINE message is required to have a type');
    messages = [message];
  }

  return lineClient.replyMessage(replyToken, messages)
    .catch(err => {
      console.error(`replyMessage error: ${tryGetErrorMessage(err)}`)
    })

}

module.exports = lineReply;

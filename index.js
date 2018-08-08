var wsUri = "wss://echo.websocket.org/";
var comments = ["i do now", "i think that", "this will cool!", "ok", "yes", "no"];

  

  
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
  

  function onOpen(evt)
  {
    console.log('connected to echo')
  }

  function onClose(evt)
  {
    console.log("disconnected")
  }

  function onMessage(evt)
  {
    doSend("Echo Bot: " + comments[Math.floor(Math.random() * comments.length)])
    
  }

  function onError(evt)
  {
    console.log('error')
  }

  function doSend(message)
  {
    
    websocket.send(message);
  }

  

  

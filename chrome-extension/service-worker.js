chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  (async () => {
    try {
      const body = { input_text: message };
      const res = await fetch('http://localhost:3000/translate', {
        method: 'POST',    
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      });
      const {output_text} = await res.json();
      sendResponse(output_text);
    } catch (err) {
      console.log(err);
    }
  })();
  return true;
});

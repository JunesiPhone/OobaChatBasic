const chatForm = document.querySelector('.chat_form')
const chat = document.querySelector('.chat');

function scrollToBottom(){
  chat.scrollTop = chat.scrollHeight;
}

function createBubble(text, type){
  text = text.trim();
  let holder = document.createElement('div');
  if(type === 'user_bubble'){
    holder.className = 'right_bubble_holder';
  }else{
    holder.className = 'left_bubble_holder';
  }

  let chatbubble = document.createElement('p');
  chatbubble.innerHTML = text;
  chatbubble.className = type + ' bubbles';
  holder.appendChild(chatbubble);
  chat.appendChild(holder);
  scrollToBottom();
}

chatForm.addEventListener('submit', async (e) => {
  createBubble(chatForm.title.value, 'user_bubble'); 
  e.preventDefault()
  const res = await fetch('/ooba/response', {
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({title: chatForm.title.value}),
    method: 'POST'
  });
  const data = await res.json()
  createBubble(data.tags.content, 'ai_bubble');
});
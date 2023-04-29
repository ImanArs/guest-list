const spisok = document.getElementById('spisok')

let url = 'https://636a27e5b10125b78fd2189a.mockapi.io/todo'

const getData = () => {
  fetch("https://636a27e5b10125b78fd2189a.mockapi.io/todo")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        let userCard = "";
        // cart = data
        data.forEach(item => {
          userCard += newCard(item.name, item.phone, item.partner)
        });
        spisok.innerHTML = userCard
      })
    }
getData()
const newCard = (name,phone, partner) => {
  return `
    <div class="card">
      <h1>${name} & ${partner}</h1>
      <p>${phone}</p>
    </div>
  `
}
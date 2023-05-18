const spisok = document.getElementById('spisok')

let url = 'https://636a27e5b10125b78fd2189a.mockapi.io/todo'

const getData = () => {
  fetch("https://64662253228bd07b355c9c1c.mockapi.io/wedding")
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
  console.log();
  return `
    <div class="card">
      <h1>${name} & ${partner}</h1>
      <a href="tel:+996${phone.slice(1)}">${phone}</a>
      <a ></a>
    </div>
  `
}
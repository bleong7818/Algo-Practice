function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos/5')
        .then(res => res.json())
        .then(data => {
            const results = 
            `
                <div class="more text">
                    ${data.title}
                </div>
            `;
            document.getElementById('text')
                .insertAdjacentHTML("afterbegin", results);
        }).catch(err => {
            console.log(err);
        });
}
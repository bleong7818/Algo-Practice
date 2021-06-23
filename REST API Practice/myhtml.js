function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => {
            const results = 
            `
                <div class="more text">
                    ${data.title}
                </div>
                <div class="more text">
                    Completed: ${data.completed}
                </div>

            `;
            document.getElementById('text')
                .insertAdjacentHTML("afterbegin", results);
        }).catch(err => {
            console.log(err);
        });
}
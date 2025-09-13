

window.onload = function () {
    const button = document.getElementById("button");

    const text = document.getElementById("fact");

    console.log(button);

    const randomFacts = ["It is the main residence of Japan's Emperor.", 'Located on the former site of Edo Castle.',
    'The inner grounds are rarely open to the public.', 'Surrounded by moats and massive stone walls.', 'Open to visitors on the Emperor’s birthday.']

    function change() {
        console.log('running');
        const currentText = text.innerHTML;
        console.log(currentText)

        const index = Math.floor(Math.random() * 5);

        if (currentText !== randomFacts[index]) {
            text.innerHTML = randomFacts[index];
        } else {
            change();
        }

    }

    button.addEventListener("click", change);
}

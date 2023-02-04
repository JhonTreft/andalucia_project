const SimpleMansonrry = () => {
    const items = document.querySelectorAll(".mansonrry-item");
    items.forEach((item, index) => {
        console.log(item, index);
        if (index % 2 === 0) {
            item.style.alignSelf = "start";
        } else { 
            item.style.alignSelf = "end";
        }
    })
}

/* init */
SimpleMansonrry()

window.addEventListener("DOMContentLoaded", function(e) {
    console.log("The page is loaded");
    const btns = document.querySelectorAll("button[data-order]");
    console.log(btns.values);

    btns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            const btn = e.currentTarget;
            const container = btn.parentNode;

            const order = {
                id: btn.getAttribute("data-order"),
                title: container.querySelector(".title").innerText,
                price: container.querySelector(".price").innerText,
                desc: container.querySelector(".desc").innerText
            }

            localStorage.setItem("order", JSON.stringify(order));

            const url = window.location.href.replace("pies.html", "order.html");
            window.location.href = url;

        })
    });

btns.forEach(function(elem, index){
        console.log(`element: ${elem} at index: ${index}; pie: ${elem.getAttribute("data-order")}`);
    })
});

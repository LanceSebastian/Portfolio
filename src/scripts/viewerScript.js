document.addEventListener("click", e => {
    const item = e.target.closest("figure")
    if (!item) return;

    document.querySelectorAll(".viewImage").forEach(e1 => e1.remove())

    const imgSrc = item.querySelector("img").src;
    const figCap = item.querySelector("figcaption");
    const title = figCap.querySelector("h3").innerHTML;
    const caption = figCap.querySelector("p").innerHTML;

    const view = document.createElement("div");
    view.className = "viewImage";
    view.innerHTML = `
    <span class="close" onclick="closeView()">&times;</span>
    <img src="${imgSrc}">
    <div class = "caption">
        <h3>${title}</h3>
        <p>${caption}</p>
    </div>
    `

    item.insertAdjacentElement("afterend", view);
})


function closeView() {
    document.querySelectorAll(".viewImage").forEach(e => e.remove())
}   
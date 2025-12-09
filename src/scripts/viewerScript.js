let target = document.getElementById("modalTarget");

document.addEventListener("click", e => {
    const item = e.target.closest("figure")
    const exist = document.querySelector(".modalContent");
    if (!item) return;

    const imgSrc = item.querySelector("img").src;
    const figCap = item.querySelector("figcaption");
    const title = figCap.querySelector("h3").innerHTML;
    const caption = figCap.querySelector("p").innerHTML;

    const modal = document.createElement("div");
    modal.className = "modalContent";
    modal.id = "modalContent";
    modal.innerHTML = `
    <img src="${imgSrc}">
    <div class = "caption">
        <h3>${title}</h3>
        <p>${caption}</p>
    </div>
    `;

    target.style.display = "block";
    if (exist) exist.replaceWith(modal);
    else target.append(modal);
})


function closeView() {
    target.style.display = "none";
}   
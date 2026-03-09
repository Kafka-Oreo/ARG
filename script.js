let lang="zh"

function toggleLanguage(){

lang = lang==="zh" ? "en" : "zh"

document.querySelector(".lang-btn").innerText =
lang==="zh" ? "English" : "中文"

document.querySelectorAll("[data-zh]").forEach(el=>{

el.innerText = el.dataset[lang]

})

}

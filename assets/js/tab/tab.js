let tabs = document.getElementById('tabs');
let content = document.querySelectorAll('.content');
const tabsElement = Array.from(document.querySelectorAll('.tab-btn'));

//  Tabs

function changeClass(el){
    for(let i = 0; i < tabs.children.length; i++){
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

for (let index = 0; index < tabsElement.length; index++) {
tabsElement[index].addEventListener('click',function(event){
    let currTab = event.target.dataset.btn;
    changeClass(event.target);
    for (let i = 0; i < content.length; i++){
        content[i].classList.remove('active');
        if(content[i].dataset.content == currTab){
            content[i].classList.add('active');
        }
         if (content[i].dataset.all === currTab) {
                 content[i].classList.add('active');
            }
    }
})
}

// function changeClass(el){
//     for(let i = 0; i < tabs.children.length; i++){
//         tabs.children[i].classList.remove('active');
//     }
//     el.classList.add('active');
// }

// tabs.addEventListener('click',function(event){
//     let currTab = event.target.dataset.btn;
//     changeClass(event.target);
//     for(let i = 0; i < content.length; i++){
//         content[i].classList.remove('active');
//         if(content[i].dataset.content === currTab){
//             content[i].classList.add('active');
//         }
//          if (content[i].dataset.all === currTab) {
//                  content[i].classList.add('active');
//              }
//     }


// })

// var tabs = document.getElementById('tabs');
// var content = document.querySelectorAll('.content');
// var tabsElement = Array.from(document.querySelectorAll('.tab-btn'))

// function changeClass(el) {
//     for (var i = 0; i < tabs.children.length; i++) {
//         tabs.children[i].classList.remove('active');
//     }
//     el.classList.add('active');
// }

// for (let index = 0; index < tabsElement.length; index++) {
//     tabsElement[index].addEventListener('click', function (e) {
//         var currTab = event.target.dataset.btn;
//         changeClass(event.target);
//         for (var i = 0; i < content.length; i++) {
//             content[i].classList.remove('active');
//             if (content[i].dataset.content === currTab) {
//                 content[i].classList.add('active');
//             }
//             if (content[i].dataset.all === currTab) {
//                 content[i].classList.add('active');
//             }
//         }
//     })
// }
const list_items= [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 21",
    "Item 22",
    "Item 23",
    "Item 24",
];

const listElement= document.getElementById('list');
const paginationElement=document.getElementById('pagination');
let currentPage=3;
let rows=5;
function displayList(items,wrapper,rows_per_page,page){
    wrapper.innerHTML="";
    page--;
    let start=rows_per_page* page;
    let end=start+ rows_per_page;
    let paginatedItems=items.slice(start,end);
    // The slice() method slices out a piece of an array into a new array.
    // The slice() method can take two arguments like slice(1, 3).
    // The method then selects elements from the start argument, and up to (but not including) the end argument.
    console.log(paginatedItems);
    for (let i=0;i<paginatedItems.length; i++)
    {
        let item=paginatedItems[i];
        let itemElement=document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerText=item;
        wrapper.appendChild(itemElement);
    }
    SetupPagination(items,paginationElement,rows_per_page)

}
function SetupPagination(items,wrapper,rows_per_page){
    wrapper.innerHTML="";
    let page_count=Math.ceil(items.length/rows_per_page);
    for(let i=1;i<page_count+1;i++){
        let btn=PaginationButton(i,items);
        wrapper.appendChild(btn);
    }
}
function PaginationButton(page,items){
    let button= document.createElement('button');
    button.innerText=page;
    if(currentPage==page) button.classList.add('active');
    button.addEventListener('click',function(){
        currentPage=page;
        displayList(items,listElement,rows,currentPage);
        // let currentButton=document.querySelector('.pagenumbers button.active');
        // currentButton.classList.remove('active');
        button.classList.add('active');
    })
    return button;
}
displayList(list_items,listElement,rows,currentPage)
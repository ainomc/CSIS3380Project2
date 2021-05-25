//The list of the all contacts
const contacts = document.getElementsByClassName('contact-item cf');
//Max number of items per page.
const max_items_per_page = 10;

showPage(contacts,1); //Show the first page.
appendPageLinks(contacts); //Add the page links.
showSearchBar(); //Add the search bar.

/*
The showPage function, shows a page of 'max_items_per_page' items 
for a given list.
*/

function showPage(list,page) {

   //Get the start and end index for a given page.
let start_index = (page*max_items_per_page)-max_items_per_page;
let end_index = page*max_items_per_page;

//Use the start and end index to hide all nonactive list elements,
//and unhide all active ones.
for (let i = 0; i < list.length;i++) {
    list[i].hidden = (i < end_index && i >= start_index) ? false : true;
}
}

/*
The appendPageLinks function, displays page links for a given list,
allowing page navigation.
*/

function appendPageLinks(list) {

//Get, and create the DOM elements for the page links.
let page_div = document.getElementsByClassName('page')[0];

let div = document.createElement('div');
div.className = 'pagination';
page_div.appendChild(div);

let list_of_elements = document.createElement('ul');
div.appendChild(list_of_elements);

let number_of_pages = list.length / max_items_per_page ;

    /*
        The page_link_clicked function, catch a click event on a page link
        and changes the page.
    */
    function page_link_clicked(e) {
        let page_list = list_of_elements.getElementsByTagName('a');
        let page_id = 0;
        for (let i = 0; i < page_list.length;i++) {

            if (page_list[i] === e.target) {

            page_list[i].className = 'active';
            page_id = i+1;

            } else {
            page_list[i].className = '';
            }
        
        }
        showPage(list,page_id);
    }

    /*
        The add_a_element function, adds an 'a' element to a page link.
    */

    function add_a_element(li,page) {
        let element = document.createElement('a');
        element.href = '#';
        element.textContent = page;
        if (page === 1) element.className = 'active';
        element.addEventListener('click', page_link_clicked);
        li.appendChild(element);
    }

    for (let i = 0; i < number_of_pages;i++) {
        let element = document.createElement('li');
        add_a_element(element,i+1);
        list_of_elements.appendChild(element);
    }
}

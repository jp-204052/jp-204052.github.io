var books = ['One Thousand and One Nights', '20,000 Leagues Under the Sea', 'To Kill a Mocking Bird', 'Harry Potter'];

window.onload = function(){
    printBooks(books);
}

function printBooks(val){
    let list = document.getElementById('bookTitles');
    list.innerHTML = '';

    for(let i = 0; i < val.length; i++){
        let li = document.createElement('li');
        li.innerHTML = val[i];
        list.appendChild(li);
    }
}

function sortBooks(val){
    let sorted = new Array();
    switch(val){
        case 'original':
            printBooks(books);
            break;
        case 'alphabetical':
            sorted = books.slice().sort();
            printBooks(sorted);
            break;
        case 'reverse':
            sorted = books.slice().sort();
            sorted = sorted.reverse();
            printBooks(sorted);
            break;
    }
}
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

    // form submit event
    form.addEventListener('submit', addItem);
    //delete event
    itemList.addEventListener('click', removeItem)
    // add item
    function addItem(e) {
        e.preventDefault();
       
        // get input value
        var newItem = document.getElementById('item').value;

        // create new li element
        var li = document.createElement('li');
        //add class
        li.className = 'list-group-item';
        // add text node with input value
        li.appendChild(document.createTextNode(newItem));
        
        // create del button

        var deletebtn = document.createElement('button');

        // add classes to del button

        deletebtn.className = 'btn btn-danger btn-sm float-right delete';

        //append text node
        deletebtn.appendChild(document.createTextNode('X'));
        // appenc btn to li
        li.appendChild(deletebtn)

        // create edit button
        var editBtn = document.createElement('button');
        // add classes to edit button
        editBtn.className = 'btn btn-primary btn-sm float-right ml-2 edit'; // Added 'edit' class
         // append text node
        editBtn.appendChild(document.createTextNode('Edit'));
        // append edit button to li
        li.appendChild(editBtn);

        itemList.appendChild(li);

    }

    // remove item
    function removeItem(e){
        if(e.target.classList.contains('delete')){
            if(confirm('Are you sure?')){
                var li = e.target.parentElement;
                 itemList.removeChild(li);
            }
        }       
     }
    
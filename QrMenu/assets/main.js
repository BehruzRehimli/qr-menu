const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        
        
        dropdownItems.forEach(item => {
            item.classList.remove('active');
            item.classList.remove('d-none');
        });
       
        
        this.classList.add('active');
        this.classList.add('d-none');
        
        const button = document.getElementById('dropdownMenuButton1');
        const img = this.querySelector('img').outerHTML;
        const text = this.textContent.trim();
        button.innerHTML = img + ' ' + text;
    });
});


        $(document).ready(function(){
            $("#myInput").on("keyup", function() {
              var value = $(this).val().toLowerCase();
              $(".myList li").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
            });
          });







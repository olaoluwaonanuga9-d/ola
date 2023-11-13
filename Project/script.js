function myFunction() {
    document.getElementById("myDropdown") .classList.toggle("show");
}
window.onclick = function(event) {
    if
    ( !event.terget.matches('.dropbtn')
    ) {
        var dropdowns =
        document.getElementsByClassName("dropdown-content");
        var i;
        for ( i = 0; i < dropdowns.length; i++ ) {
            var openDropdown = dropdowns[i];
            if
            (openDropdown.classList.contains('shows')) {
              openDropdown.classList.remove('shows')  
            }
        }
    }
}
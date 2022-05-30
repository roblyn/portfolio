function navbar() {
    const menulist = document.getElementById ('dropdown')
     if (menulist.style.display === 'none' ){
        menulist.style.display = 'block';
     } else {
       menulist.style.display = 'none';
    }
}


        document.addEventListener('DOMContentLoaded', () => {
            const menuItems = document.querySelectorAll('.navbar-wrapper li');

            menuItems.forEach(item => {
                item.addEventListener('mouseenter', () => {
                    const dropdown = item.querySelector('ul');
                    if (dropdown) {
                        dropdown.style.display = 'block';
                    }
                });

                item.addEventListener('mouseleave', () => {
                    const dropdown = item.querySelector('ul');
                    if (dropdown) {
                        dropdown.style.display = 'none';
                    }
                });
            });
        });


        const menu_btn = document.querySelector('.hamburger');
        const mobile_menu = document.querySelector('.mobile-nav');
        menu_btn.addEventListener('click',function (){
            menu_btn.classList.toggle('is-active');
            mobile_menu.classList.toggle('is-active');
        });
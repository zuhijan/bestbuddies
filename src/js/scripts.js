
import './modules/video';
import './modules/form';
<<<<<<< HEAD
import './modules/validate';
=======
>>>>>>> 882a2d99a7943b80ddf0db996ff6e0c8d041e70f

(function () {

    document.addEventListener('click', function(event) {

        if (event.target.closest('.open-icon')) {
            document.querySelector('.open-icon').classList.add('open-icon_inactive');
            document.querySelector('.header__share-icons').classList.remove('share-icons_inactive');
            if (window.innerWidth <= 970) {
                document.querySelector('.header__company-name').classList.add('company-name_close');
            }

        };
        if (!event.target.closest('.open-icon')) {
            document.querySelector('.open-icon').classList.remove('open-icon_inactive');
            document.querySelector('.header__share-icons').classList.add('share-icons_inactive');
            document.querySelector('.header__company-name').classList.remove('company-name_close');
        };

    });

    document.addEventListener('scroll', () => {

        let headerHeight = document.querySelector('.header').offsetHeight;
        let teamHeight = document.querySelector('.team').offsetTop;
        let scrollHeight = window.pageYOffset;
<<<<<<< HEAD

=======
    
>>>>>>> 882a2d99a7943b80ddf0db996ff6e0c8d041e70f
        if (teamHeight > (scrollHeight)) {
            document.querySelector('.header').style.position = 'sticky';
        };
        if (teamHeight <= (scrollHeight - headerHeight)) {
            document.querySelector('.header').style.position = 'static';
        };
<<<<<<< HEAD

=======
    
>>>>>>> 882a2d99a7943b80ddf0db996ff6e0c8d041e70f
    });

    document.getElementsByClassName('copier').forEach( el => {
        el.addEventListener('click', function() {
        let copytext = document.createElement('input');
<<<<<<< HEAD
        copytext.value = window.location.href;
=======
        copytext.value = window.location.href; 
>>>>>>> 882a2d99a7943b80ddf0db996ff6e0c8d041e70f
        document.body.appendChild(copytext);
        copytext.select();
        document.execCommand('copy');
        document.body.removeChild(copytext);
       });
    });

})();

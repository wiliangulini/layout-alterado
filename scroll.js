<script>

let lazyImages = [...document.querySelectorAll('.lazy-image')]
let inAdvance = 300

function lazyLoad() {
    lazyImages.forEach(image => {
        if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
            image.src = image.dataset.src
            image.onload = () => image.classList.add('loaded')
        }
    })

    // if all loaded removeEventListener
}

lazyLoad()

window.addEventListener('scroll', _.throttle(lazyLoad, 16))
window.addEventListener('resize', _.throttle(lazyLoad, 16))
</script>

// cdn de biblioteca que nao tem nada a ver com o codigo a cima
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.plugins.min.js"></script>
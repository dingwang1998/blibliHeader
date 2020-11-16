const images = document.querySelectorAll('.animated-banner > div > img')

const bannner = document.querySelector('.animated-banner')

bannner.addEventListener('mousemove', (e)=>{
    let percentage = e.clientX / window.outerWidth

    let offset = 20 * percentage
    let blur = 20

    for(let [index, image] of images.entries()){
        offset *= 1.3;
        let blurValue = (Math.pow((index / images.length - percentage), 2) * blur)
        image.style.setProperty('--offset',` ${offset}px`)
        image.style.setProperty('--blur',` ${blurValue}px`)
    }
    bannner.addEventListener('mouseleave', (e)=>{
        for(let [index, image] of images.entries()){
            image.style.setProperty('--offset', 0 + 'px')
            image.style.setProperty('--blur', 0 +'px' )
        }
    })
})




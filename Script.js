const containerScroll = document.querySelector('.container-scroll');
    const scrollWidth = containerScroll.scrollHeight
    const containerWidth = containerScroll.offsetWidth;
setInterval(() => {
    containerScroll.scrollLeft +=2
    if(scrollPositiion >= (scrollWidth - containerWidth)){
       
        scrollPosition = 0
    
    }
},20);
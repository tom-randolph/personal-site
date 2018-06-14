const media = window.matchMedia("(max-width: 1200px)")

function promptDownload(x){
    if (x.matches){
        console.log("small")
        const portfolio=document.getElementById("portlink")
        portfolio.download="Tom Randolph Portfolio.pdf";
        console.log(portfolio)

        const resume=document.getElementById("reslink")
        resume.download="Tom Randolph Resume.pdf";
        console.log(resume)
       
    }
}

window.onload=promptDownload(media);
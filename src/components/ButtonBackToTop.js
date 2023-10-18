
const ButtonBackToTop = () => {
    let mybutton;
    window.onscroll = function () {
        mybutton = document.getElementById("btn-back-to-top");
        scrollFunction(mybutton)
    }
    function scrollFunction(mybutton) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display= "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <button 
            onClick={backToTop}
            id="btn-back-to-top"
            variant="outline-info"
            className="btn-floating"
            size="sm"
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                display: "none",
                backgroundColor: "#01959a",
                border: "none",
                borderRadius: "50%",
                padding: "5px",
              }}
        >
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    );
}

export default ButtonBackToTop;
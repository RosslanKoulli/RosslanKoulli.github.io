function changeCursor(event){

    event.preventDefault();


    if(event.type === "mousedown"){
        switch (event.button) {
            case 0:
                document.body.classList.remove("right-click-cursor","drag-cursor");
                document.body.classList.add("left-click-cursor");
                break;
            case 2:
                document.body.classList.remove("left-click-cursor","drag-cursor");
                document.body.classList.add("right-click-cursor");
                break;
        }
    }else if(event.type === "mouseup"){
        document.body.classList.remove("left-click-cursor","right-click-cursor","drag-cursor");

    }else if(event.type === "mousemove"){
        if(event.buttons === 1) {
            document.body.classList.remove("left-click-cursor","right-click-cursor");
            document.body.classList.add("drag-cursor");
        }
    }
}

document.addEventListener("mousedown",changeCursor);
document.addEventListener("mouseup",changeCursor);
document.addEventListener("mousemove",changeCursor);

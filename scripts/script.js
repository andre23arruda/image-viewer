var files = null
var actual_file = 0
var x = 0

function fade_screen(){
    document.querySelector("body").style.backgroundColor = 'black'
}

function select_files() {
    preview = document.querySelector('img')
    files = document.querySelector('input[type=file]').files
    file = files[actual_file]
    display_image(file)
}

function display_image(file){
    reader  = new FileReader();
    reader.onloadend = function () {
      preview.src = reader.result
    }

    if (file) {
      reader.readAsDataURL(file)
      preview.style.display = 'inline'
      document.querySelector('.image-container').style.display = 'flex'
      document.querySelector('h1').style.marginBottom = '15px'
    }
    else {
      preview.src = "";
      preview.style.display = 'none'
      document.querySelector('.image-container').style.display = 'none'
      document.querySelector('h1').style.marginBottom = '300px'
    }
}


function change_image(key){
    actual_file = key == '+' ? actual_file + 1 : actual_file - 1
    if(actual_file == files.length){
        actual_file = 0
    }
    else if(actual_file < 0){
        actual_file = files.length - 1
    }
    file = document.querySelector('input[type=file]').files[actual_file]
    display_image(file)
    console.log(actual_file)
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


input = document.querySelector("body")

input.addEventListener("keydown", function() {
    if (event.keyCode === 37) {
        event.preventDefault();
        change_image();
    }
});

input.addEventListener("keydown", function() {
    if (event.keyCode === 39) {
        event.preventDefault();
        change_image('+');
    }
});

input.addEventListener("keydown", function() {
    if (event.keyCode === 27) {
        event.preventDefault();
        display_image(null)
    }
});
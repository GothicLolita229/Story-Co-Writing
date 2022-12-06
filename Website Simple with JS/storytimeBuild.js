fetch("header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

  fetch("footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });


function formSubmit()
{
var mainName = document.querySelector("#mainCharName").value;
var supName = document.querySelector("#supCharName").value;
var country = document.querySelector("#country").value;
var type = document.querySelector("#typeOfLit").value;
var genre = document.querySelector("#genre").value;
var location = document.querySelector("#location").value;
var level = document.querySelector("#level").value;
var comments = document.querySelector("#commentBox").value;

//display above in div "yourStory"
var display = "Your Main Character is: " + mainName + "\n" +
            "Supporting Character: " + supName + "\n" +
            "The " + genre + " "+ type + " is set in " + location + ", " + country + ".\n" +
            "Your input: \n" + comments + "\n" +
            "Reading Level " + level;

document.getElementById("previewBody").innerText = display;
}

const openPreviewButtons = document.querySelectorAll("[data-preview-target]");
const closePreviewButtons = document.querySelectorAll("[data-closePreview-button]");
const overlay = document.getElementById("overlayPreview");

openPreviewButtons.forEach(button => {
    button.addEventListener("click", function() {
        formSubmit();
        const preview = document.querySelector(button.dataset.previewTarget);
        openPreview(preview);
    });
});
overlay.addEventListener("click", function() {
    const previews = document.querySelectorAll(".preview.active")
    previews.forEach(preview => 
        {
            closePreview(preview)
    });
});

closePreviewButtons.forEach(button => {
    button.addEventListener("click", function() {
        const preview = button.closest(".preview")
        closePreview(preview);
    });
});

function openPreview(preview)
{
    if(preview == null) return
    preview.classList.add("active");
    overlay.classList.add("active");
}

function closePreview(preview)
{
    if(preview == null) return
    preview.classList.remove("active");
    overlay.classList.remove("active");
}



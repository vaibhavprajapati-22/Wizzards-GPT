function sendMessage() {
    const userMessage = document.getElementById('user-input').value;
    addMessage('user', userMessage);

    // Send userMessage to the server for processing with GPT and document handling.
    // Receive a response from the server and add it to the chat history.
    // You'll need server-side code for this part.

    // For demonstration purposes, let's assume a simple response from the server:
    const response = "Here is the response to your query from the document.";
    addMessage('bot', response);
}

  function addMessage(sender, message) {
    const chatHistory = document.getElementById('chat-history');
    const messageContainer = document.createElement('div');
    messageContainer.className = sender + '-message';
    messageContainer.innerHTML = message;
    chatHistory.appendChild(messageContainer);

    // Scroll to the bottom of the chat history
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }

// Add JavaScript to handle the file uploads
let selectedFile;

function handleFileUpload(inputId) {
            const fileInput = document.getElementById(inputId);

            fileInput.addEventListener('change', function () {
                 selectedFile = fileInput.files[0];
                if (selectedFile) {
                    if (selectedFile.type === 'text/plain'){
                        // Do something with the text file, e.g., read its content
                        const reader = new FileReader();
                        reader.onload = function (e) {
                            const fileContent = e.target.result;
                            console.log('File content:', fileContent);
                        };
                        reader.readAsText(selectedFile);
                    } 
                    // else {
                    //     alert('Please select a text file.');
                    // }
                }
            });
        }

    //     // Add event listeners for each upload button
    //     const uploadButton1 = document.getElementById('uploadButton1');
    //     const uploadButton2 = document.getElementById('uploadButton2');
    //     const uploadButton3 = document.getElementById('uploadButton3');

    //     uploadButton1.addEventListener('click', function () {
    //         document.getElementById('fileInput1').click();
    //     });

    //     uploadButton2.addEventListener('click', function () {
    //         document.getElementById('fileInput2').click();
    //     });

    //     uploadButton3.addEventListener('click', function () {
    //         document.getElementById('fileInput3').click();
    //     });

    //     // Set up event handlers for each file input
    //     handleFileUpload('fileInput1');
    //     handleFileUpload('fileInput2');
    //     handleFileUpload('fileInput3');



        
        
    //         document.getElementById("openPageButton1").addEventListener("click", function() {
    //             if(selectedFile==null){
    //                 alert("Please select file")
    //             }
    //             else{
    //             window.open("pdfpage.html", "_blank");
    //             }
    //         });
    //     document.getElementById("openPageButton2").addEventListener("click", function() {
    //         if(selectedFile==null){
    //             alert("Please select file")
    //         }
    //         else{
    //         window.open("txtpage.html", "_blank");
    //         }
    //     });
    //     document.getElementById("openPageButton3").addEventListener("click", function() {
    //         if(selectedFile==null){
    //             alert("Please select file")
    //         }
    //         else{
    //         window.open("docpage.html", "_blank");
    //         }
    //     });

    // Get all elements with the "btn1" class and convert them to an array
    var elements = Array.from(document.getElementsByClassName("btn1"));


    // signup
    // Add a click event listener to each element
    elements.forEach(function(element) {
        element.addEventListener("click", function() {
            window.location.href = "../static/signup.html";
        });
    });

    // document.getElementById("openPageButton1").addEventListener("click", function() {
    //     if(selectedFile==null){
    //         alert("Please select file")
    //     }
    //     else{
    //     window.open("abcde.html", "_blank");
    //     }
    // });


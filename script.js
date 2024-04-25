$(document).ready(function(){
    $('#feedbackForm').submit(function(event){
        event.preventDefault();
        var formData = new FormData(this);
        $.ajax({
            type: 'POST',
            url: 'feedback.php', 
            data: formData,
            processData: false,
            contentType: false,
            success: function(response){
                loadFeedbacks();
            }
        });
    });

    function loadFeedbacks(){
        $.ajax({
            type: 'GET',
            url: 'feedbacks.php',
            success: function(response){
                $('#feedbackList').html(response);
            }
        });
    }
    loadFeedbacks();
});
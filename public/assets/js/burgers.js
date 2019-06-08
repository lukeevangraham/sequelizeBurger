(document).ready(function () {
    // Getting a reference to the input field where user adds a new burger
    var $newItemInput = $("#ca");

    // Adding event listeners to the form to create a new object, and the button to delete
    // an Author
    $(document).on("submit", "#burger-form", handleAuthorFormSubmit);
    $(document).on("click", ".change-devour", handleDeleteButtonPress);

    // Getting the initial list of Authors
    getBurgers();



    // This function grabs todos from the database and updates the view
    function getBurgers() {
        $.get("/api/burgers", function (data) {
            burgers = data;
            initializeRows();
        });
    }



    // Make sure we wait to attach our handlers until the DOM is fully loaded.
    // $(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        // var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: 0
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devoured state to true");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // $(".create-form").on("submit", function (event) {

    // Make sure to preventDefault on a submit event.
    // event.preventDefault();

    // var newBurger = {
    //     burger_name: $("#ca").val().trim(),
    //     devoured: "false"
    // };

    // // Send the POST request.
    // $.ajax("/api/burgers", {
    //     type: "POST",
    //     data: newBurger
    // }).then(
    //     function () {
    //         console.log("created new burger");
    //         // Reload the page to get the updated list
    //         location.reload();
    //     }
    // );




    // });

    function insertTodo(event) {
        event.preventDefault();
        var burger = {
            burger_name: $newItemInput.val().trim(),
            devoured: false
        };

        $.post("/api/todos", burger, getBurgers);
        $newItemInput.val("");
    }

});

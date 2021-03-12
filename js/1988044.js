function loadData(request, targetID, sourceID) {
    $.ajax({
        url: "https://web1-api.herokuapp.com/api/" + request,
        cache: false,
        success: function(data) {
            let jsonData = {
                data: data
            };
            let target = $(targetID);
            let source = $(sourceID).html();
            let template = Handlebars.compile(source);
            $(target).html(template(jsonData));
        }
    });
}
function loadData(request, targetID, sourceID) {
    $.ajax({
        url: "https://web1-api.herokuapp.com/api/" + request,
        cache: false,
        success: function(data) {
            let jsonData = {
                data: data
            };
            let target = $(targetID);
            let template = Handlebars.templates[sourceID];
            // let source = $(sourceID).html();
            // let template = Handlebars.compile(source);
            $(target).html(template(jsonData));
        }
    });
}

function searchData(keyword) {
    $('#content').addClass('container');
    $('#content').addClass('py-5');
    $('#small-banner').css('visibility', 'visible');
    loadData(`search?keyword=${keyword}`, '#content', 'search-results');
    return false;
}

function loadSearchDataDetails(type, id) {
    let template = 'about-details';
    if (['blogs', 'gallery'].includes(type)) {
        template = `blog-blogs-details`;
    } else if (['aboutus', 'team', 'visions', 'products'].includes(type)) {
        template = 'about-details';
    }
    loadData(`${type}/${id}`, '#content', template);
}

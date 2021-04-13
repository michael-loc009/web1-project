(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about-aboutus'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h3 class=\"text-dark\">About Us</h3>\r\n<img class=\"round-img\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbpath") || (depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbpath","hash":{},"data":data,"loc":{"start":{"line":3,"column":28},"end":{"line":3,"column":41}}}) : helper)))
    + "\" alt=\"about-us-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":3,"column":57},"end":{"line":3,"column":63}}}) : helper)))
    + "\" /> "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":3,"column":68},"end":{"line":3,"column":81}}}) : helper))) != null ? stack1 : "")
    + "\r\n<p>\r\n    <a href=\"#\" class=\"readmore\" onclick=\"loadData('aboutus/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":60},"end":{"line":5,"column":66}}}) : helper)))
    + "', '#content', 'about-details')\">Read more</a>\r\n</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":7,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['about-details'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container py-5 mb-5\">\r\n    <h3 class=\"text-dark\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":8,"column":26},"end":{"line":8,"column":34}}}) : helper)))
    + "</h3>\r\n    <div>\r\n        <img class=\"round-img pull-left\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"imagepath") || (depth0 != null ? lookupProperty(depth0,"imagepath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagepath","hash":{},"data":data,"loc":{"start":{"line":10,"column":46},"end":{"line":10,"column":59}}}) : helper)))
    + "\" /> "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":10,"column":64},"end":{"line":10,"column":81}}}) : helper))) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!--small-banner-->\r\n<div class=\"container-fluid\" id=\"small-banner\">\r\n</div>\r\n<!--/small-banner-->\r\n<!--details-->\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":0},"end":{"line":13,"column":9}}})) != null ? stack1 : "")
    + "<!--/details-->";
},"useData":true});
templates['about-team'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"col-md-3\">\r\n    <a href=\"#\" onclick=\"loadData('team/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":3,"column":40},"end":{"line":3,"column":46}}}) : helper)))
    + "', '#content', 'about-details')\">\r\n        <img class=\"img-rounded\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbpath") || (depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbpath","hash":{},"data":data,"loc":{"start":{"line":4,"column":38},"end":{"line":4,"column":51}}}) : helper)))
    + "\" alt=\"team-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":63},"end":{"line":4,"column":69}}}) : helper)))
    + "\" />\r\n    </a>\r\n    <p class=\"text-dark font-weight-bold pt-3 \">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":48},"end":{"line":6,"column":56}}}) : helper)))
    + "</p>\r\n    <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":7,"column":7},"end":{"line":7,"column":18}}}) : helper)))
    + "</p>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":9,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['about-testimonials'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"col\">\r\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":5,"column":11},"end":{"line":5,"column":22}}}) : helper)))
    + "</p>\r\n        <div class=\"text-white\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":32},"end":{"line":6,"column":40}}}) : helper)))
    + "</div>\r\n        <a href=\"mailto:"
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":7,"column":24},"end":{"line":7,"column":33}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":7,"column":35},"end":{"line":7,"column":44}}}) : helper)))
    + "</a>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h3 class=\"text-white\">Testimonials</h3>\r\n<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":9,"column":13}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['about-visions'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n        <a href=\"#\" onclick=\"loadData('visions/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":47},"end":{"line":5,"column":53}}}) : helper)))
    + "', '#content', 'about-details')\">\r\n            <img class=\"round-img\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbpath") || (depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbpath","hash":{},"data":data,"loc":{"start":{"line":6,"column":40},"end":{"line":6,"column":53}}}) : helper)))
    + "\" alt=\"vision-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":6,"column":67},"end":{"line":6,"column":73}}}) : helper)))
    + "\" />\r\n        </a>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n        <a href=\"#\" onclick=\"loadData('visions/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":10,"column":47},"end":{"line":10,"column":53}}}) : helper)))
    + "', '#content', 'about-details')\">\r\n            <h4 class=\"my-0 py-0\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":11,"column":34},"end":{"line":11,"column":42}}}) : helper)))
    + "</h4>\r\n        </a>\r\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":13,"column":11},"end":{"line":13,"column":22}}}) : helper)))
    + "</p>\r\n    </div>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h3 class=\"text-dark\">Our Vision</h3>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":16,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['blog-blogs-archives'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li><a href=\"#\" onclick=\"loadBlogs('blogs/archives/"
    + alias4(((helper = (helper = lookupProperty(helpers,"month") || (depth0 != null ? lookupProperty(depth0,"month") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data,"loc":{"start":{"line":2,"column":51},"end":{"line":2,"column":60}}}) : helper)))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":2,"column":61},"end":{"line":2,"column":69}}}) : helper)))
    + "')\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"monthString") || (depth0 != null ? lookupProperty(depth0,"monthString") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monthString","hash":{},"data":data,"loc":{"start":{"line":2,"column":73},"end":{"line":2,"column":88}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":2,"column":90},"end":{"line":2,"column":98}}}) : helper)))
    + "</a></li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['blog-blogs-categories'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li><a href=\"#\" onclick=\"loadBlogs('blogs/categories/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":53},"end":{"line":2,"column":59}}}) : helper)))
    + "')\">Blog. "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":69},"end":{"line":2,"column":77}}}) : helper)))
    + "</a></li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['blog-blogs-details'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"blog py-3\">\r\n    <h4>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":16}}}) : helper)))
    + "</h4>\r\n    <div>by "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":22}}}) : helper)))
    + " in <a href=\"#\" onclick=\"loadBlogs('blogs/categories/"
    + alias4(((helper = (helper = lookupProperty(helpers,"categoryId") || (depth0 != null ? lookupProperty(depth0,"categoryId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoryId","hash":{},"data":data,"loc":{"start":{"line":4,"column":75},"end":{"line":4,"column":89}}}) : helper)))
    + "')\">Blog. "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a>\r\n        on "
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":5,"column":11},"end":{"line":5,"column":19}}}) : helper)))
    + " Hits: 210 <a href=\"#\">Comments ("
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + ")</a></div>\r\n    <div class=\"py-3\">\r\n        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbpath") || (depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbpath","hash":{},"data":data,"loc":{"start":{"line":7,"column":18},"end":{"line":7,"column":31}}}) : helper)))
    + "\" alt=\"\" class=\"round-img pull-left img-thumbnail\"> "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":7,"column":83},"end":{"line":7,"column":100}}}) : helper))) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>\r\n\r\n<div class=\"py-3 frm-comment\">\r\n    <h4 class=\"text-dark\">Leave your comment</h4>\r\n    <h4 class=\"text-dark\">Post comment as a guest</h4>\r\n    <form id=\"form-comment\" method=\"POST\" onsubmit=\"return addComment()\" data-blog-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":14,"column":87},"end":{"line":14,"column":93}}}) : helper)))
    + "\">\r\n        <div class=\"row\">\r\n            <div class=\"form-group col\">\r\n                <label for=\"name\">Name (required)</label>\r\n                <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control form-control-sm\" placeholder=\"\" required />\r\n            </div>\r\n            <div class=\"form-group col\">\r\n                <label for=\"email\">Email (required)</label>\r\n                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control form-control-sm\" placeholder=\"\"\r\n                    required />\r\n            </div>\r\n            <div class=\"col\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"form-group col\">\r\n                <label for=\"comment\"></label>\r\n                <textarea type=\"text\" name=\"comment\" id=\"comment\" class=\"form-control form-control-sm\" placeholder=\"\"\r\n                    required row=\"3\"></textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-0\">\r\n            <div class=\"form-check form-check-inline col\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" name=\"agree\" id=\"agree\" required /> Agree to Terms\r\n                    and Conditions\r\n                </label>\r\n            </div>\r\n            <div class=\"col text-right\">\r\n                <button type=\"submit\" class=\"btn btn-link btn-sm\">Submit Comment</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div id=\"comments\" class=\"bg-dark text-uppercase p-1\">Comments ("
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + ")</div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"comments") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":4},"end":{"line":54,"column":18}}})) != null ? stack1 : "")
    + "\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"row comment\">\r\n        <div class=\"head\">\r\n            <small><strong class=\"user\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":50,"column":40},"end":{"line":50,"column":48}}}) : helper)))
    + "</strong> "
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":50,"column":58},"end":{"line":50,"column":66}}}) : helper)))
    + "</small>\r\n        </div>\r\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":52,"column":11},"end":{"line":52,"column":22}}}) : helper)))
    + "</p>\r\n    </div>\r\n    <hr> ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":56,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['blog-blogs-pagination'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<nav aria-label=\"Page navigation\">\r\n    <ul class=\"pagination\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"startFromFirstPage") : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":12,"column":19}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"pages") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":24,"column":17}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"endAtLastPage") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":8},"end":{"line":33,"column":19}}})) != null ? stack1 : "")
    + "    </ul>\r\n</nav>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"page-item\">\r\n            <a class=\"page-link\" href=\"#\" aria-label=\"Previous\" onclick=\"loadBlogs('"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"api") || (depth0 != null ? lookupProperty(depth0,"api") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"api","hash":{},"data":data,"loc":{"start":{"line":7,"column":84},"end":{"line":7,"column":91}}}) : helper)))
    + "',1 )\">\r\n                <span aria-hidden=\"true\">&raquo;</span>\r\n                <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n        </li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":23,"column":15}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"page-item active\">\r\n            <a class=\"page-link\" href=\"#\" onclick=\"loadBlogs('"
    + alias4(((helper = (helper = lookupProperty(helpers,"api") || (depth0 != null ? lookupProperty(depth0,"api") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"api","hash":{},"data":data,"loc":{"start":{"line":17,"column":62},"end":{"line":17,"column":69}}}) : helper)))
    + "',"
    + alias4(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":17,"column":71},"end":{"line":17,"column":79}}}) : helper)))
    + " )\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":17,"column":83},"end":{"line":17,"column":91}}}) : helper)))
    + "</a>\r\n        </li>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"page-item\">\r\n            <a class=\"page-link\" href=\"#\" onclick=\"loadBlogs('"
    + alias4(((helper = (helper = lookupProperty(helpers,"api") || (depth0 != null ? lookupProperty(depth0,"api") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"api","hash":{},"data":data,"loc":{"start":{"line":21,"column":62},"end":{"line":21,"column":69}}}) : helper)))
    + "',"
    + alias4(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":21,"column":71},"end":{"line":21,"column":79}}}) : helper)))
    + " )\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":21,"column":83},"end":{"line":21,"column":91}}}) : helper)))
    + "</a>\r\n        </li>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"page-item\">\r\n            <a class=\"page-link\" href=\"#\" aria-label=\"Next\" onclick=\"loadBlogs('"
    + alias4(((helper = (helper = lookupProperty(helpers,"api") || (depth0 != null ? lookupProperty(depth0,"api") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"api","hash":{},"data":data,"loc":{"start":{"line":28,"column":80},"end":{"line":28,"column":87}}}) : helper)))
    + "',"
    + alias4(((helper = (helper = lookupProperty(helpers,"pageCount") || (depth0 != null ? lookupProperty(depth0,"pageCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageCount","hash":{},"data":data,"loc":{"start":{"line":28,"column":89},"end":{"line":28,"column":102}}}) : helper)))
    + " )\">\r\n                <span aria-hidden=\"true\">&raquo;</span>\r\n                <span class=\"sr-only\">Next</span>\r\n            </a>\r\n        </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"pagination")||(depth0 && lookupProperty(depth0,"pagination"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"currentPage") : depth0),(depth0 != null ? lookupProperty(depth0,"pageCount") : depth0),(depth0 != null ? lookupProperty(depth0,"size") : depth0),(depth0 != null ? lookupProperty(depth0,"api") : depth0),{"name":"pagination","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":36,"column":15}}})) != null ? stack1 : "");
},"useData":true});
templates['blog-blogs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"blog py-3\">\r\n    <h4>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":16}}}) : helper)))
    + "</h4>\r\n    <div>by "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":22}}}) : helper)))
    + " in <a href=\"#\" onclick=\"loadBlogs('blogs/categories/"
    + alias4(((helper = (helper = lookupProperty(helpers,"categoryId") || (depth0 != null ? lookupProperty(depth0,"categoryId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoryId","hash":{},"data":data,"loc":{"start":{"line":4,"column":75},"end":{"line":4,"column":89}}}) : helper)))
    + "')\">Blog. "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a>\r\n        on "
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":5,"column":11},"end":{"line":5,"column":19}}}) : helper)))
    + " Hits: 210 <a href=\"#\" onclick=\"loadDetails("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":63},"end":{"line":5,"column":69}}}) : helper)))
    + ")\">Comments ("
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + ")</a></div>\r\n    <div class=\"py-3\">\r\n        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbpath") || (depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbpath","hash":{},"data":data,"loc":{"start":{"line":7,"column":18},"end":{"line":7,"column":31}}}) : helper)))
    + "\" alt=\"\" class=\"round-img pull-left img-thumbnail\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":7,"column":83},"end":{"line":7,"column":94}}}) : helper)))
    + "\r\n        <br>\r\n        <br>\r\n        <a href=\"#\" class=\"readmore\" onclick=\"loadDetails("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":10,"column":58},"end":{"line":10,"column":64}}}) : helper)))
    + ")\">Read more</a>\r\n    </div>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"data") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":13,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['index-details'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container py-5\">\r\n    <h3 class=\"text-dark\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":9,"column":26},"end":{"line":9,"column":34}}}) : helper)))
    + "</h3>\r\n    <div>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":10,"column":9},"end":{"line":10,"column":26}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!--small-banner-->\r\n<div class=\"container-fluid\" id=\"small-banner\">\r\n\r\n</div>\r\n<!--/small-banner-->\r\n<!--details-->\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
    + "<!--/details-->";
},"useData":true});
templates['index-news'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"col\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"date\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":38}}}) : helper)))
    + "</div>\r\n            <a class=\"readmore\" href=\"#\" onclick=\"loadData('news/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":6,"column":65},"end":{"line":6,"column":71}}}) : helper)))
    + "', '#content', 'index-details')\">Read\r\n                more</a>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n            <h4>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":10,"column":24}}}) : helper)))
    + "</h4>\r\n            <div>"
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":11,"column":17},"end":{"line":11,"column":28}}}) : helper)))
    + "</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":15,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['index-products'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"col text-center\">\r\n    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbpath") || (depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbpath","hash":{},"data":data,"loc":{"start":{"line":3,"column":14},"end":{"line":3,"column":27}}}) : helper)))
    + "\" alt=\"\">\r\n    <h4>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":16}}}) : helper)))
    + "</h4>\r\n    <div class=\"pb-2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":5,"column":22},"end":{"line":5,"column":33}}}) : helper)))
    + "</div>\r\n    <a class=\"readmore\" href=\"#\" onclick=\"loadData('products/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":6,"column":61},"end":{"line":6,"column":67}}}) : helper)))
    + "', '#content', 'index-details')\">Read more</a>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":8,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['menu-gallery-categories'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li class=\"nav-item\">\r\n    <a class=\"nav-link\" href=\"#\" onclick=\"loadGallery(this,"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":6,"column":59},"end":{"line":6,"column":65}}}) : helper)))
    + ")\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":68},"end":{"line":6,"column":76}}}) : helper)))
    + "</a>\r\n</li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li class=\"nav-item\">\r\n    <a class=\"nav-link disabled pl-0\" href=\"#\" onclick=\"loadGallery(this)\">Show all</a>\r\n</li>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":8,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['menu-gallery'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"col-sm-6 col-md-4 col-lg-3\">\r\n    <img class=\"img-thumbnail\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"imagepath") || (depth0 != null ? lookupProperty(depth0,"imagepath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagepath","hash":{},"data":data,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":49}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":56},"end":{"line":3,"column":64}}}) : helper)))
    + "\">\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();
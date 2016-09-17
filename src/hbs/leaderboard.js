(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['leaderboard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "		<tr>\n			<td>"
    + alias2(alias1((depth0 != null ? depth0.username : depth0), depth0))
    + "</td>\n			<td>"
    + alias2(alias1((depth0 != null ? depth0.score : depth0), depth0))
    + "</td>\n		</tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table>\n	<tr>\n		<th>Username</th>\n		<th>Score</th>\n	</tr>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.scores : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</table>";
},"useData":true});
})();
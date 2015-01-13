var React = require('react');

var Index = React.createClass({
  render: function(){
    return (
      <html lang="en">
      <head>
          <meta charset="UTF-8"/>
          <title>React Experiments</title>
      </head>
      <body>
        <h1>Welcome to React Experiments <small>by Leon</small></h1>
        {
          this.props.examples.map(function(data){
            return ( <p key={data.name}><a href={data.link}>{data.name}</a></p> );
          })
        }
      </body>
      </html>
    )
  }
});

module.exports = Index;
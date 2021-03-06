const React = require('react');
const Default = require('./Default')
const moment= require('moment')

class Search extends React.Component {
    render() {
        const { recipes } = this.props;
        const { element } = this.props;
        return (
            <Default>

          <div className="container">

            <div className="row">
            <div className="col-md-8">
            <h1>Elements found for "{element}"</h1>
                <ul>
                    {
                        recipes.map((recipe, i)=>{
                            return(
                 
                                <div className="card mb-4">
                                    <img className="card-img-top img-fluid rounded" src={recipe.img}   alt="Card image cap"/>
                                    <div className="card-body">
                                        <h2 className="card-title">{recipe.name}</h2>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                                        <a href={`/fblog/${recipe._id}`} className="btn btn-primary">Read More &rarr;</a>
                                    </div>
                                    <div className="card-footer text-muted">
                                        Posted on {moment(recipe.createdAt).format('MMMM Do YYYY, h:mm a')}
                                        
                                    </div>

                                </div>
                               
                            )
                        
                        })
                    }

                </ul>
                </div>
                <div className="col-md-4">
                <div className="card my-4">
                    <h5 className="card-header">Search</h5>
                    <div className="card-body">
                        <form action={`/fblog/search/?name`} method="POST">
                        <div className="input-group">
                            
                         <input type="text" className="form-control" name='name' placeholder="Search for..."/>
                          <span className="input-group-btn">
                             <button  className="btn btn-secondary" type="submit button">Go!</button>
                        </span>
                    </div>
                    </form>
                </div>
                </div>
              </div>
            </div>
            </div>
            </Default>
        )
    }
}

module.exports = Search;
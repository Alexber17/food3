const React = require('react');
const Default = require('./Default')
const moment= require('moment')

class Index extends React.Component {
    render() {
        const { recipes } = this.props;
        return (
            <Default>

                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&h=500"   alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&h=500"  alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&h=500"  alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1542895364-1f38d277f031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&h=500"  alt="Third slide"/>
                        </div>

                       
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>




          <div className="container">

            <div className="row">
            <div className="col-md-8">
                <h1>Recipes</h1>
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
                            
                         <input required type="text" className="form-control" name='name' placeholder="Search for..."/>
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

module.exports = Index;
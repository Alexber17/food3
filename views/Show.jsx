const React = require('react');
const Default = require('./Default')
var moment = require('moment');

class Show extends React.Component {
    render() {
        // const name = this.props.fruit.name;
        // const color = this.props.fruit.color;
        // const readyToEat = this.props.fruit.readyToEat;
        // destructuring
        const { recipe } = this.props;
        let spl=recipe.ingredients.split(',')
        
        return (
            <Default>
          
            <div className="container">

                <div className="row">

                    
                    <div className="col-lg-8">

                            
                            <h1 className="mt-4">{recipe.name}</h1>

                            
                            <p className="lead">
                            by
                            <a href="#"> Alexander Bermudez</a>
                            </p>

                            <hr/>

                        
                            <p>Posted on {moment(recipe.createdAt).format('MMMM Do YYYY, h:mm a')}</p>

                            <hr/>

                            
                            <img className="img-fluid rounded" src={recipe.img} alt=""/>

                            <hr/>

                            <h4>Ingredients</h4>
                            <ul className="list-group list-group-flush">

                            {spl.map((ingredients, i)=>{
                                    return  (
                                        
                                        <li className="list-group-item">{ingredients}</li>
                                    )
                                })
                            }
                            </ul>
                            
                            <h4>How to Make It</h4>
                            <p className="lead text-justify">{recipe.directions}</p>

                            <hr/>

                            
                                <div className="card my-4">
                                    <h5 className="card-header">Leave a Comment:</h5>
                                        <div className="card-body">
                                            <form>
                                            <div className="form-group">
                                                <textarea className="form-control" rows="3"></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                            </form>
                                        </div>
                                </div>
                         </div>

                         <div className="col-md-4">
                        
                            <div className="card my-4">
                            <h5 className="card-header">Modify menu</h5>
                            <div className="card-body">

                            <div className="col-lg-6">
                                <ul className="list-unstyled mb-0">
                                <li>
                                    <a className="btn btn-link" href={`/FBlog/${recipe._id}/edit`}>Edit</a>
                                </li>
                                <li>
                                <a className="btn btn-link" href='' data-toggle="modal" data-target="#myModal">Delete</a>
                                <div className="modal" id="myModal">
                                    <div className="modal-dialog">
                                        <div className="modal-content">

                                        <div className="modal-header">
                                            <h4 className="modal-title">Modal Heading</h4>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>

                                        <div className="modal-body">
                                        Are you sure to delete?
                                        </div>

                                        <div className="modal-footer">
                                        <form action={`/FBlog/${recipe._id}?_method=DELETE`} method="POST">
                                            <input  type="submit" value="Yes" className="btn btn-link" ></input  >
                                         </form>
                                            <button type="button" className="btn btn-danger" data-dismiss="modal">No</button>
                                        </div>

                                        </div>
                                    </div>
                                    </div>

                                    
                              
                                </li>
            
                                </ul>
                            </div>

                            </div>
                            </div>

                         </div>


                    </div>
                </div>

            </Default>
        )
    }
}

module.exports = Show;
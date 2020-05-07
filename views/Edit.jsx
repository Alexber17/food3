const React = require('react');
const Default = require('./Default')
class Edit extends React.Component {
    render() {
        const { recipe } = this.props;
        return (
            <Default>
            <form action={`/FBlog/${recipe._id}?_method=PUT`} method="POST">
 
           <div class='container'>
               <h1>Edit Recipe</h1>
               <div class="form-group">
                 <label for="exampleFormControlInput1">Name</label>
                 <input type="text" class="form-control" defaultValue={recipe.name} name="name" />
 
               </div>
 
               <div class="form-group">
                 <label for="exampleFormControlInput1">Ingredients</label>
                 <input type="text" class="form-control" defaultValue={recipe.ingredients} name="ingredients" />
 
               </div>
 
               <div class="form-group">
                 <label for="exampleFormControlInput1">Directions</label>
                 <textarea  class="form-control" defaultValue={recipe.directions} name="directions" />
               </div>
 
               <div class="form-group">
                 <label for="exampleFormControlInput1"> Tutorial (video URL)</label>
                 <input  class="form-control" name="video" defaultValue={recipe.video} />
               </div>
               <div class="form-group">
                 <label for="exampleFormControlInput1">Img</label>
                 <input  class="form-control" name="img" defaultValue={recipe.img} />
               </div>
               
 
                   <button type="submit" class="btn btn-primary">Save</button>
                   
               
                </div>
 
                </form>
           </Default>
        )
    }
}

module.exports = Edit;
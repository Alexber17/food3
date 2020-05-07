const React = require('react');
const Default = require('./Default')
class New extends React.Component {
    render() {
      return (
        <Default>
           <form action="/FBlog" method="POST">


          <div class='container'>
              <h1>New Recipe</h1>
              <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="text" class="form-control" name="name" />

              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">Ingredients</label>
                <input type="text" class="form-control" name="ingredients" />

              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">Directions</label>
                <textarea  class="form-control" name="directions" />
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1"> Tutorial (video URL)</label>
                <input  class="form-control" name="video" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Img</label>
                <input  class="form-control" name="img" />
              </div>
              

                  <button type="submit" class="btn btn-primary">Add Recipes</button>
                  
              
               </div>

               </form>
          </Default>
          );
          
    }
  }
  
  module.exports = New;
const React = require('react');
const Default = require('./Default')
class New extends React.Component {
    render() {
      return (
        <Default>
       <form action="/fblog" method="POST">
              <div class='container'>
                      <h1>New Recipe</h1>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" class="form-control" name="name" placeholder='Peanut Butter Sandwich' />
                      </div>

                      <div class="form-group">
                        <label for="exampleFormControlInput1">Ingredients</label>
                        <input type="text" class="form-control" name="ingredients"  placeholder='2 slices bread, 1 1/2 tablespoons peanut butter, 1 1/2 tablespoons applesauce'/>
                      </div>

                      <div class="form-group">
                        <label for="exampleFormControlInput1">Directions</label>
                        <textarea  class="form-control" name="directions"  placeholder='Spread peanut butter on one slice of bread, and applesauce on the other slice. Place them together, cut in half, and serve'/>
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
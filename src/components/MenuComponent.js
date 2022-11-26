import React, { Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish:null
        };
    }
    onDishSelect(dish){
        this.setState(
            {
                selectedDish:dish
            }
        )
    }
    // renderDish(dish){
    //     if (dish!=null){
    //         const li = dish.comments.map((comment)=>{
    //             return(
    //                 <div>
    //                     <br></br>
    //                     <div>{comment.comment}</div>
    //                     <br></br>
    //                     <div>--{comment.author},{comment.date}</div>
    //                 </div>
    //             );
    //         })
    //         return(
    //             <div className="row">
    //                 <div className="col-5 md-5 xs-12 m-1">
    //                     <Card>
    //                         <CardImg top src={dish.image} alt={dish.name} />
    //                         <CardBody>
    //                             <CardTitle>{dish.name}</CardTitle>
    //                             <CardText>{dish.description}</CardText>
    //                         </CardBody>
    //                     </Card>
    //                 </div >
    //                 <div className="col-5 md-5 xs-12 m-1">
    //                    <h4>Comments</h4>
    //                     {li}
    //                 </div>
    //             </div>
    //         );
    //     }
    //     else{
    //         return(
    //             <div></div>
    //         );
    //     }
    // }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={()=>this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                {menu}
            </div>
            {/* {this.renderDish(this.state.selectedDish)} */}
            <DishDetail dish={this.state.selectedDish}/>
          </div>
        );
    }
}

export default Menu;
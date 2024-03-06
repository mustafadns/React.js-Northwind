import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge,
} from "reactstrap";
import { connect } from 'react-redux';
import "./CartSummary.css"
import  { bindActionCreators } from "redux"
import * as cartActions from "../../redux/actions/cartActions"
import { Link } from 'react-router-dom'
import alertify from 'alertifyjs'

class CartSummary extends Component {

    remoweFromCart (product) {
        this.props.actions.remoweFromCart(product);
        alertify.error(product.productName + " sepetten silindi")
    }

    renderEmpty () {
        return (
            <NavItem>
                <NavLink>Sepetiniz Boş</NavLink>
            </NavItem>
        )
    }

    renderSummary () {
        return (
            <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                SEPET
                </DropdownToggle>
                <DropdownMenu end>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                <Badge className='btn_main' color='danger' onClick={() => this.remoweFromCart(cartItem.product)}>X</Badge>
                                {cartItem.product.productName}
                                <Badge className='quantity_number' color='success'>{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }
                <DropdownItem divider />
                <DropdownItem><Link to={"/cart"}>Sepete Git</Link></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    render() {
        return (
            <div>
                {
                    this.props.cart.length>0?this.renderSummary():this.renderEmpty()
                }
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            remoweFromCart:bindActionCreators(cartActions.remoweFromCart , dispatch)
        }
    }
}

function mapStateToProps (state) {
    return {
        cart:state.cartReducer
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CartSummary);
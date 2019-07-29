import React from 'react';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';


const Header = ({currentUser, hidden}) => (
   <HeaderContainer>
       <LogoContainer to='/'>
          <Logo className='logo' />
       </LogoContainer>
       <OptionsContainer>
           <OptionLink to='/shop'>
               SHOP
           </OptionLink>
           <OptionLink to='/contact'>
               CONTACT
           </OptionLink>
           {currentUser ? 
              (<OptionLink as='div' className='option' onClick={() => auth.signOut()}>Sign Out</OptionLink>)
              :
              (<OptionLink className='option' to='/signin'>Sign In</OptionLink>)
           }
           <CartIcon />
       </OptionsContainer>
        {hidden ? null : <CartDropdown />}
   </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
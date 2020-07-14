import OrderList from '../components/OrderList';
import PleaseSignIn from '../components/PleaseSignIn';

const OrdersPage = (props) => {
  return (
    <div>
      <PleaseSignIn>
        <OrderList />
      </PleaseSignIn>
    </div>
  );
};

export default OrdersPage;

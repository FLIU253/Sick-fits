import { shallow, mount } from 'enzyme';
import CartCount from '../components/CartCount';
import toJSON from 'enzyme-to-json';

describe('<CartCount/>', () => {
  it('renders', () => {
    shallow(<CartCount count={10} />);
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<CartCount count={10} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});

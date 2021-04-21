/* global describe expect it */
import { shallow } from 'enzyme';
import Home from './index';

describe('Home', () => {
    it('should be defined', () => {
        expect(Home).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(<Home />);
        expect(tree.find('.FormLogin')).toBeDefined();
        expect(tree.find('.LoginInputUsername')).toBeDefined();
        expect(tree.find('.LoginInputPassword')).toBeDefined();
        expect(tree.find('.SubmitLogin')).toBeDefined();
        expect(tree).toMatchSnapshot();
    });
});

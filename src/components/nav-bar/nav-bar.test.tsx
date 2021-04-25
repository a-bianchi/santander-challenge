/* global describe expect it */
import { shallow } from 'enzyme';
import { NavBar } from './nav-bar';

describe('NavBar', () => {
    it('should be defined', () => {
        expect(NavBar).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(<NavBar />);
        expect(tree.find('.Title')).toBeDefined();
        expect(tree.find('.Button')).toBeDefined();
        expect(tree).toMatchSnapshot();
    });
});

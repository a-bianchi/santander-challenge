/* global describe expect it */
import { shallow } from 'enzyme';
import { Admin } from './admin';

describe('Admin Page', () => {
    it('should be defined', () => {
        expect(Admin).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(<Admin />);
        expect(tree.find('.NavBar')).toBeDefined();
        expect(tree.find('.DataTable')).toBeDefined();
        expect(tree).toMatchSnapshot();
    });
});

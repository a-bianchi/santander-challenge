/* global describe expect it */
import { shallow } from 'enzyme';
import { User } from './user';

describe('User Page', () => {
    it('should be defined', () => {
        expect(User).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(<User />);
        expect(tree.find('.NavBar')).toBeDefined();
        expect(tree.find('.DataTable')).toBeDefined();
        expect(tree).toMatchSnapshot();
    });
});

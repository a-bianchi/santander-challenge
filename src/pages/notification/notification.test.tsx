/* global describe expect it */
import { shallow } from 'enzyme';
import { Notification } from './notification';

describe('Notification Page', () => {
    it('should be defined', () => {
        expect(Notification).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(<Notification />);
        expect(tree.find('.NavBar')).toBeDefined();
        expect(tree.find('.DataTable')).toBeDefined();
        expect(tree).toMatchSnapshot();
    });
});

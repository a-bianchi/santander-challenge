/* global describe expect it */
import { shallow } from 'enzyme';
import NotFound from './index';

describe('Not found page', () => {
    it('should be defined', () => {
        expect(NotFound).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(<NotFound />);
        expect(tree.find('.Text404')).toBeDefined();
        expect(tree.find('.TextError')).toBeDefined();
        expect(tree).toMatchSnapshot();
    });
});

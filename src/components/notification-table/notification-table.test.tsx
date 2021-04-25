/* global describe expect it */
import { shallow } from 'enzyme';
import { NotificationTable } from './notification-table';

describe('Notification Table', () => {
    it('should be defined', () => {
        expect(NotificationTable).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(<NotificationTable title={'title'} />);
        expect(tree.find('.Table')).toBeDefined();
        expect(tree.find('.Header')).toBeDefined();
        expect(tree.find('.Body')).toBeDefined();
        expect(tree).toMatchSnapshot();
    });
    it('should render table', () => {
        const tree = shallow(
            <NotificationTable title={'title'} data={[{ message: 'some message', date: '04-04-2021' }]} />,
        );
        expect(tree.find('.title')).toBeDefined();
        expect(tree.find('.TableNotification')).toBeDefined();
        expect(tree).toMatchSnapshot();
    });
});

/* global describe expect it */
import { shallow } from 'enzyme';
import { DataTable } from './data-table';

describe('DataTable', () => {
    it('should be defined', () => {
        expect(DataTable).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(<DataTable />);
        expect(tree.find('.Table')).toBeDefined();
        expect(tree.find('.Header')).toBeDefined();
        expect(tree.find('.Body')).toBeDefined();
        expect(tree).toMatchSnapshot();
    });
    it('should render action buttons', () => {
        const tree = shallow(
            <DataTable
                title={'title'}
                create={() => console.log('test')}
                actions={[{ name: 'some', handler: () => console.log('test handler') }]}
            />,
        );
        expect(tree.find('.title')).toBeDefined();
        expect(tree.find('.CreateButton')).toBeDefined();
        expect(tree.find('.action-0')).toBeDefined();
        expect(tree).toMatchSnapshot();
    });
});

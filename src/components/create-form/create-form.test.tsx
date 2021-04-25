/* global describe expect it */
import { shallow } from 'enzyme';
import { CreateForm } from './create-form';

describe('Create Form', () => {
    it('should be defined', () => {
        expect(CreateForm).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(
            <CreateForm
                create={() => {
                    console.log('test');
                }}
            />,
        );
        expect(tree.find('.CreateForm')).toBeDefined();
        expect(tree.find('.inputCreateName')).toBeDefined();
        expect(tree.find('.inputCreateDate')).toBeDefined();
        expect(tree.find('.inputCreateTemperature')).toBeDefined();
        expect(tree.find('.inputCreatePeople')).toBeDefined();
        expect(tree.find('.inputCreateBeers')).toBeDefined();
        expect(tree.find('.SubmitCreateForm')).toBeDefined();
        expect(tree).toMatchSnapshot();
    });
});

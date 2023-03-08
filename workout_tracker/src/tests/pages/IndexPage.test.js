import renderer from 'react-test-renderer';
import IndexPage from '../../pages/IndexPage';

test('Renders Index Page and checks against snapshot', ()=> {
    const indexRender = renderer.create(<IndexPage />).toJSON();
    expect(indexRender).toMatchSnapshot();
})